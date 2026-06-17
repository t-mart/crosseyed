# Crosseyed: NYT Crossword layout userscript

A userscript that makes the NYT Crossword fill the browser window: header (with
timer) stays visible at top, board and clue panes split the space below, and the
board scales to use the available vertical height.

## Runtime

Deno. TypeScript is built in. No package.json, no `typescript` dep. npm packages
are added via `deno add npm:...` and resolved through node_modules so Vite can
find them.

## Discovery findings (from the HAR capture)

The relevant DOM, top to bottom:

```
body.pz-page (starts with .pz-loading; JS removes it when the game is ready)
  header.pz-header.pz-game-header        nav bar, ~48px, contains the timer
  .pz-content
    .pz-section.pz-ad-box                 top ad (we scroll past it)
    .pz-section#crossword-container
      .pz-row.pz-game-title-bar          puzzle title
      .pz-game-wrapper
        .pz-game-screen
          .pz-game-toolbar               (.xwd__toolbar--wrapper)
          .pz-game-field#pz-game-root    <- React renders the game in here
            .xwd__layout_container
              .xwd__layout_puzzle--desktop   <- THE CAGE (two-pane flex)
                left pane  (board + clue bar)   width: 48%
                right pane (clue lists)         width: 48%
    .pz-section.pz-ad-box                 bottom ad
```

The constraints that keep the puzzle small (all in
`games-assets/v2/crossword.<hash>.css`):

| Selector                       | Property   | Value    |
| ------------------------------ | ---------- | -------- |
| `.xwd__layout_puzzle--desktop` | max-width  | 1132px   |
| `.xwd__layout_puzzle--desktop` | max-height | 660px    |
| `.xwd__layout_puzzle--desktop` | height     | 100vh    |
| `.pz-row` (game toolbar)       | max-width  | 460px    |
| `.xwd__toolbar--wrapper`       | max-width  | 1280px   |
| `.xwd__layout--cluelists`      | max-height | 625px    |

Notes:

- The desktop vs mobile layout choice happens in JS by reading the computed
  width of a hidden `#width-hook` element at breakpoints. At >= 1025px the app is
  already in desktop mode, so we do not need to touch that; we only widen the
  cage.
- The board is an inline SVG inside the left pane and scales to its container, so
  growing the left pane grows the board. This is the main lever for vertical
  fill.
- Ads live in sibling `.pz-section` blocks before and after
  `#crossword-container`. We leave them in the DOM and scroll past them.

## Layout goal

- The header (with timer) plus the puzzle area together equal the window height.
- Below the header, a two-pane row fills the remaining height: board on the left,
  clue lists on the right.
- The board scales up to consume available vertical space while staying square
  (proportional). Clue panes get the leftover horizontal space and scroll
  internally.

This is almost entirely CSS. The overrides:

- Remove the max-width / max-height caps on `.xwd__layout_puzzle--desktop`; let
  it be `width: 100%`, `height: calc(100vh - <header>)`.
- Size the left/right panes by available height instead of fixed percentages so
  the board tracks the viewport.
- Make `.xwd__layout--cluelists` panes `overflow-y: auto` with height bound to
  the row.

## JS (minimal)

- Wait for the game to be ready (body loses `.pz-loading`, or
  `#pz-game-root` gains children) via a MutationObserver, then apply a marker
  class on `<body>` (e.g. `crosseyed-ready`) that our CSS keys off of, so styles
  only kick in once the real layout exists.
- Insert an anchor and scroll the crossword container into view so the puzzle
  sits at the top of the viewport under the header (skipping the top ad). Use
  `scrollIntoView` against an element/anchor we control rather than a hardcoded
  offset.

## CSS-from-a-file requirement

No CSS-in-strings.

- Dev: inject our stylesheet and our JS as two separate tags. The dev page is a
  rewritten copy of the captured HTML; Vite serves `src/style.css` as a real
  file and the JS imports it so HMR works. No GM_ APIs exist on the dev server,
  and we do not rely on them there.
- Prod: bundling may inline the CSS however the bundler wants (we do not care
  about file purity in the built artifact). The source stays a real .css file.

## Project structure

```
deno.json            nodeModulesDir + tasks + imports
vite.config.ts       dev server (command=serve) + lib build (command=build)
index.html           generated dev page (Vite root entry); git-ignored
src/
  main.ts            entry: import style.css, run the JS, set ready class
  style.css          the layout overrides (real file)
host/
  www.nytimes.com/   HAR-extracted assets (served as Vite publicDir in dev)
scripts/
  extract-har.ts     HAR -> files extractor (was the old root main.ts)
  gen-dev-page.ts    rewrite captured HTML: absolute asset URLs -> local
                     paths, inject our <link> + <script type=module>
dist/
  crosseyed.user.js  built userscript with ==UserScript== header
```

Vite's root is the project root and `index.html` is generated there so `/src/...`
resolves to real source files (HMR). `publicDir` points at
`host/www.nytimes.com`, so the captured NYT assets serve at their original
`/games-assets/...` paths.

## Tasks

- `deno task gen` - regenerate `index.html` from the capture.
- `deno task dev` - gen then run the Vite dev server.
- `deno task build` - produce `dist/crosseyed.user.js`.
- `deno task extract <file.har>` - re-extract assets from a HAR.

## Dev flow

1. `gen-dev-page.ts` rewrites the captured crossword HTML so asset URLs point at
   local `/games-assets/...` and injects `<link rel=stylesheet href=/src/style.css>`
   and `<script type=module src=/src/main.ts>`, writing `index.html`.
2. `deno task dev` runs Vite. Editing `src/style.css` or `src/main.ts` hot
   reloads. This mimics what a userscript manager injects, against a local copy
   of the site.

Caveat: the captured page is a static snapshot; the live game JS may need data
endpoints that were not captured. If the board does not render from the snapshot
alone, dev still validates CSS against the real markup, and final verification
happens by installing the built userscript on the live site.

## Prod build

- Vite `lib` mode, single IIFE output.
- `vite-plugin-css-injected-by-js` inlines `style.css` into the JS.
- A small plugin prepends the `==UserScript==` metadata header
  (@name, @match https://www.nytimes.com/crosswords/game/*, @grant none,
  @run-at document-idle) to produce `dist/crosseyed.user.js`.

## Dependencies to install

```
deno add npm:vite npm:vite-plugin-css-injected-by-js
```
