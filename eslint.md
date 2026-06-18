# ESLint + Deno + two platforms

Notes on why ESLint flagged the dev scripts and how the config is set up, so we
do not have to rediscover this.

## The problem

This repo has two kinds of code:

- Browser code under `src/` that ships in the userscript.
- Deno/Node tooling (`scripts/`, `vite.config.ts`, `eslint.config.mjs`) that
  runs locally.

ESLint reported ~35 errors in `scripts/serve.ts`, all from the
`@typescript-eslint/no-unsafe-*` family, every one on a `Deno.*` access ("Unsafe
call of a type that could not be resolved", etc.). Meanwhile `deno check` passed
and the Deno VSCode extension was happy.

## Root cause

The `no-unsafe-*` rules are type-aware. typescript-eslint feeds them types from
a TypeScript program it builds out of a `tsconfig.json`, NOT from `deno.json`.

- `deno check` and the Deno LSP read `deno.json`, whose `lib` includes
  `deno.ns`, so they know the `Deno` namespace.
- ESLint runs the normal TypeScript compiler against `tsconfig.json`, which did
  not include any Deno types. So `Deno` resolved to an error type and every
  member access tripped the unsafe rules.

You cannot fix this by adding `deno.ns` to `tsconfig.json`. `deno.ns` is a
synthetic lib provided by the Deno toolchain; vanilla `tsc` (what ESLint uses)
does not ship it.

Also note: the `globals.denoBuiltin` entry in the ESLint config only declares
the name `Deno` so `no-undef` stays quiet. It gives it no type. Globals and
types are separate concerns.

## Solution

Two parts: give the tooling files real Deno types, and make the platform
boundary directory-based so the right tsconfig governs each file.

1. Install the Deno ambient types as a dev dependency (community package, but
   current and tracks Deno 2.x):

   ```
   deno add npm:@types/deno
   ```

2. Split tsconfigs by directory. typescript-eslint's `projectService` resolves
   each file to the nearest `tsconfig.json` walking up from it, so directory
   layout decides the platform:

   - Root `tsconfig.json` is the Deno/Node config: `types: ["deno"]`,
     `include: ["scripts", "vite.config.ts"]`.
   - `src/tsconfig.json` is the browser config: `types: []`, dom lib.

   `scripts/serve.ts` and `vite.config.ts` then resolve to the root (Deno)
   config; `src/*` resolves to the browser config.

3. In `eslint.config.mjs`, keep one shared block with the rules/parser/extends
   for all `*.{ts,tsx,mjs}` files, then layer platform globals with
   `files`-scoped blocks: `globals.browser` for `src/**`, and `globals.node` +
   `globals.denoBuiltin` for the tooling files. A config object's `files` scopes
   everything in it, including anything it pulls in via `extends`.

Result: `Deno.*` in `vite.config.ts` or `scripts/` lints clean; `Deno.*` in
`src/` is correctly flagged (the userscript should not touch `Deno`).

## Gotchas

- `projectService.allowDefaultProject` must NOT match a file that is also in a
  real tsconfig, or you get a parsing error ("included by allowDefaultProject
  but also was found in the project service"). Once every `.ts` lives in a
  tsconfig, the only file needing the default project is `eslint.config.mjs`, so
  the list is just `["*.mjs"]`.

- `eslint.config.mjs` is `.mjs` and is not part of any tsconfig program (it
  would need `allowJs`). It is linted via the default project, where type info
  is unreliable (`import.meta.dirname` showed up as an error type). We give it
  an `extends: [tseslint.configs.disableTypeChecked]` override: it keeps the
  syntactic rules but drops the type-aware ones. Side effect: `Deno` usage in
  that one file is allowed but not type-checked.

- `deno check` (the `check:types` task) reads `deno.json`, not these tsconfigs.
  The tsconfigs exist only to feed typescript-eslint. Real type-checking still
  comes from Deno.

- The VSCode ESLint extension runs this same flat config, so it picks all of
  this up with no extra setup.
