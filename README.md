# Crosseyed

A userscript that enhances the New York Times Crossword.

Published to [Greasy Fork](https://greasyfork.org/en/scripts/583262-crosseyed).

## Features

- **Full-window layout.** The puzzle fills the browser window: the board scales
  up to use the vertical space, and the clue lists take the rest and scroll on
  their own.
- **Clearer cell colors.** The shaded, highlighted, selected, and related cell
  states are re-themed as distinct hues so they are easy to tell apart.
- **Spam button.** Rapidly enters A through Z into the selected cell, for
  brute-forcing a single unsure square.

## Source

- **`src/main.ts`** — Entry point
- **`src/style.css`** — All visual changes. Must be imported by `main.ts` to be
  bundled.

## Build

Vite (`vite.config.ts`) bundles `src/main.ts` as an IIFE library into
`dist/crosseyed.user.js`. The `vite-plugin-css-injected-by-js` plugin inlines
CSS into the JS bundle, and a custom plugin prepends the `// ==UserScript==`
metadata header.

## Releases

Pushing to `master` runs `.github/workflows/publish.yml`, which builds the
userscript and publishes it two ways: a GitHub Release (tag plus attached
bundle) and a copy committed to the `release` branch.

The `release` branch exists for Greasy Fork. Its webhook pulls the script out of
a git tree, not from Release assets, so the built file has to be committed
somewhere; keeping it on `release` keeps build artifacts off `master`. Greasy
Fork's sync URL points at the raw file on that branch, and a Push-event webhook
tells it to re-fetch.

## Deno Tasks

| Task          | What it does                                         |
| ------------- | ---------------------------------------------------- |
| `dev:watch`   | Rebuilds on file changes with Vite                   |
| `dev:serve`   | Runs `scripts/serve.ts`, an HTTP server on port 5174 |
| `build`       | One-shot Vite build to `./dist`                      |
| `check:types` | Type checks the project                              |
| `check:lint`  | Lints the project                                    |

With Deno, you can specify a glob of tasks to run in parallel. So
`deno task dev:*` runs both `dev:watch` and `dev:serve` together.

## `reference/`

Files pulled from the live NYT Crossword page to study its DOM structure. Not
part of the build.

## Development Loop

This particular loop requires the Violentmonkey extension installed in your
browser.

1. Run `deno task dev` to start continuously rebuilding the userscript on file
   changes and simultaneously serve it over HTTP.
2. Navigate to <http://localhost:5174> and Violentmonkey should detect the
   userscript and offer to install it.
3. Click "Install". Then click "Track external edits" to have Violentmonkey poll
   the server for changes. Optionally check "Reload tab" to have the NYT
   Crossword page reload when the script updates.
