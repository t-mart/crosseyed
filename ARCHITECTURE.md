# How Crosseyed works

Orientation for anyone (human or agent) about to change this codebase. The
README covers what the script does and how to install it; this doc covers how
the pieces fit together and the patterns you must follow to add to it.

## The one constraint that shapes everything

Crosseyed is a userscript that runs *inside* the New York Times Crossword page.
That page is a React app we do not own and cannot import from. We get no access
to its components, its Redux store, or its internal callbacks. The only surface
we have is the one any script on a page has:

- read and observe the DOM,
- mutate the DOM (add nodes, toggle classes),
- inject CSS,
- dispatch DOM events.

Two facts follow, and almost every design choice comes from them:

1. **The app mounts asynchronously.** Our code runs at `document-idle`, but the
   game toolbar, board, and modals appear later as React renders. So we wait for
   a readiness signal before acting on something, rather than assuming it exists.

2. **React owns the DOM and will undo our changes.** Any node we add to a
   React-managed subtree can be dropped on the next render, and any class we
   toggle can be reset. So our injections are not one-shot. We watch for
   re-renders with a `MutationObserver` and re-apply, and we make every
   injection idempotent (check whether our node is already there before adding
   it).

If you internalize those two points, the rest of the code reads naturally.

## The three recurring patterns

**Wait, then act.** Find a stable signal that the thing you need exists, then
run. `onPresent()` in [src/dom.ts](src/dom.ts) is the template: if the selector
is already present, run now; otherwise observe `document.body` until it appears,
then disconnect and run once.

**Observe and re-apply.** When we add UI into a React subtree, we keep an
observer on that subtree and re-run an idempotent `ensure...` function on every
mutation. `keepApplied()` in [src/dom.ts](src/dom.ts) is the shared helper (run
now, re-run on every mutation, return a disconnect). `ensureButtons()` (toolbar
buttons) and the settings-modal injection in
[src/settings-panel.ts](src/settings-panel.ts) both use it: query for our marker
class, return early if present, otherwise build and append.

**Drive the game with realistic input.** The app ignores programmatic state
changes (you cannot set a cell's value directly). You interact the way a user
would: click real buttons, and dispatch pointer and keyboard events that look
genuine. [src/spam.ts](src/spam.ts) is the reference implementation, including
the detail that some handlers still read the legacy `keyCode`/`which`/`charCode`
properties, so we shim them onto the synthetic `KeyboardEvent`.

## Runtime lifecycle

[src/main.ts](src/main.ts) is the entry point and the place to start reading.
At load it:

1. imports `./style.css` for its side effect (see Styling below),
2. kicks off the background observers that do not depend on the toolbar,
3. calls `whenReady(activate)`.

`activate()` then adds the `crosseyed-ready` class to `<body>`, injects our
toolbar buttons, scrolls the game into view, and starts an observer that
re-injects buttons if React drops them. Everything visible is downstream of
that body class.

## Styling

All visual changes live in [src/style.css](src/style.css). It is a side-effect
import in `main.ts` (typed by [src/css.d.ts](src/css.d.ts)), inlined into the
JS bundle at build time by `vite-plugin-css-injected-by-js`, and injected into
the page at runtime. There is no separate `.css` file in the output.

Every rule is scoped under `body.crosseyed-ready`. That is deliberate: nothing
applies until `main.ts` has decided the page is ready, and the prefix makes it
obvious which rules are ours versus the site's. To change layout or the cell
colors, edit this file; you do not touch the toolbar logic.

## Source map (`src/`)

| File | Role |
| ---- | ---- |
| `main.ts` | Entry point. Readiness gating, toolbar registry, top-level wiring; builds buttons via `toolbar.ts`. |
| `style.css` | Every visual change, grouped under nested `body.crosseyed-ready` blocks. |
| `css.d.ts` | Types the side-effect CSS import. |
| `svg.d.ts` | Types raw SVG imports (`*.svg?raw`, inlined as strings by Vite). |
| `dom.ts` | The two recurring DOM patterns as helpers: `keepApplied` (observe + re-apply) and `onPresent` (wait, then act). |
| `spam.ts` | Synthetic-input example: types A-Z into the selected cell. Exports `spamItem`. |
| `scroll.ts` | Scrolls the game to the top; exports `scrollToGame` and `scrollItem`. |
| `toolbar.ts` | Reusable toolbar-item factory: texty and icon buttons, plus `refreshItem` for stateful ones. |
| `fullscreen.ts` | Fullscreen toggle item built on `toolbar.ts`; icon reflects state and stays in sync. |
| `xwstats.ts` | Toolbar item linking to the current puzzle's XWStats page (NYT URL -> XWStats URL mapping). |
| `settings-panel.ts` | Injects a "Crosseyed" section into NYT's Puzzle Settings modal (re-injection pattern). |
| `auto-click.ts` | Factory for "click a button when it appears" behaviors. |
| `auto-play.ts`, `auto-resume.ts` | Thin configs built on `auto-click.ts`. |

## Build and output

Vite ([vite.config.ts](vite.config.ts)) builds `src/main.ts` as a single IIFE
library into `dist/crosseyed.user.js`. There are no runtime dependencies; it is
one self-contained file. Two things are layered on during the build:

- CSS is inlined into the JS by `vite-plugin-css-injected-by-js`.
- A small custom plugin prepends the `// ==UserScript==` metadata header,
  generated from the `userscript` field in [package.json](package.json)
  (`@match https://www.nytimes.com/crosswords/game/*`, run at `document-idle`,
  `@grant none`).

So to change where the script runs or its metadata, edit `package.json`, not
the header text.

## Tooling and checks

The project runs on Deno; tasks are in [deno.json](deno.json). Before finishing
a change, run:

- `deno task check:types` (type check, via `deno check`),
- `deno task check:lint-eslint` (ESLint over `src`) and `deno task
  check:lint-deno` (`deno lint`).

ESLint uses `eslint-plugin-unicorn` with some rules that are easy to trip over:
boolean names and params must start with `is`/`has`/`can`/`should`/`was`/`did`/
`will` (`consistent-boolean-name`), abbreviations are rejected
(`prevent-abbreviations`), and `[arr.length - 1]` must be `arr.at(-1)`
(`prefer-at`). [eslint.md](eslint.md) explains why the config is split across
two platforms (the browser userscript versus the Deno dev tooling).

Note that `deno lint` (unscoped) also lints `reference/`, which contains
third-party minified code and reports many pre-existing errors. Those are not
ours; lint `src` specifically when checking your own work.

## The `reference/` directory

Static assets pulled from the live NYT page so we can study its structure
without guessing. Not part of the build, never run. It holds HTML snapshots of
the states we care about (the settings modal open, the pause screen, completion
and progress modals, the side menu, a whole-page capture) plus the site's own
minified bundle and stylesheet.

How to use it when adding a feature:

- To find an injection point or a selector, grep the relevant HTML snapshot for
  visible text or NYT class names (`xwd__*`, `pz-*`), then copy the exact
  classes. Treat those selectors as load-bearing: they are NYT's internal names
  and can change, so verify against a fresh capture or the live DOM if something
  stops matching.
- `crossword.<hash>.js` is the minified app, useful for understanding behavior
  (when a modal shows, what an action dispatches). It is minified onto a few
  enormous lines, so reading it by line number is impractical; find a token's
  byte offset with `grep -ob -o <token> <file>` and extract a window around it
  with `dd if=<file> bs=1 skip=<offset> count=<n>`.

## Rules of thumb when adding a feature

- Anything you inject into a React subtree needs an observer and an idempotent
  `ensure...` function. Do not assume your node survives a re-render.
- Wait for a readiness signal before acting; do not assume the target exists at
  `document-idle`.
- Interact with the grid through realistic events, never by setting values.
- Keep new CSS scoped under `body.crosseyed-ready`.
- Verify NYT selectors against `reference/` or the live page before relying on
  them.
