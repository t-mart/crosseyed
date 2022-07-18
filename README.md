<h1><img src="src/icons/icon.svg" width="32" /> Crosseyed</h1>

<p align="center">
  <img src="docs/before-and-after.gif" width="800" alt="Spam feature">
</p>

A browser extension that offers various (subjective!) improvements for the NYT Crossword website.

**Download at <https://addons.mozilla.org/en-US/firefox/addon/crosseyed/>**

- Resizes the puzzle to use all of your viewport.
- Automatically scrolls your viewport to the puzzle when you start the puzzle.
- Add new menu buttons:
  - "Spam": Brute forces all letters, A to Z, on the currently selected cell. Helpful for solving
    the last cell of a puzzle.
  - "Scroll into View": Scrolls your viewport to the puzzle.
- Responsively increases font size for larger screens
- Removes an annoying tooltip that blocks the puzzle when mousing-.over it.

## Spam Feature

<p align="center">
  <img src="docs/spam.gif" width="800" alt="Spam feature">
</p>

This feature is helpful if you're at the end of the puzzle, but have just one or two open cells left
that you can't quite get (obscure trivia, etc). With the Spam feature, Crosseyed will iterate
through all letters on the selected cell in mere seconds. One of them will eventually be right!

You may call it cheaty... I don't. This just saves me time for how I work a crossword in this
specific case.

## Development

To get started: `pnpm install`

Then, choose what you need:

- `pnpm dev`: start a file-watching dev server that rebundles the extension and hot reloads it. To
  use the extension in this form:
  1. Go to Firefox "Settings"
  2. "Extensions & Themes"
  3. gear icon
  4. "Debug Add-ons"
  5. "Load a Temporary Add-on..."
  6. And finally, navigate to the `dist` directory and select the `manifest.json`.
- `pnpm build`: do the above, but without file watching
- `pnpm build-zip`: create an add-on zip file in `web-ext-artifacts`. This zip can only be loaded as
  a temporary add-on like above.
- `pnpm sign`: do the above, but also get the add-on signed by mozilla, so you can install it like a
  normal add-on. The generated `.xpi` file will also be in `web-ext-artifacts`. **Note**: this will
  "fail" because listed add-ons (like this one) must be submitted for review, and
  [web-ext always fails on submission](https://github.com/mozilla/web-ext/issues/804)
- `pnpm sign-deferred-review`: do the above, but search the output for text that indicates
  submission was successful, the addon will be reviewed later, and we've done everything we can.

### Releasing

There's an automated release process with Github Actions. See
[.github/worflows/release.yml](https://github.com/t-mart/crosseyed/blob/master/.github/workflows/release.yml).

Run it at <https://github.com/t-mart/crosseyed/actions/workflows/release.yml>

As of time of writing, when you run it, this action:

- bumps the version
- commits the newly bumped repo and tags it and pushes it
- bundles the addon with the new version
- checks ("lints") the addon to make sure its ok
- zips up the addon
- creates a new github release under the new git tag and adds the zip as an asset
- and finally, submits the zip to mozilla for review.

The status of the review can be found at:
<https://addons.mozilla.org/en-US/developers/addon/crosseyed/versions>

## Known Issues

- _None right now, just a placeholder._

## TODO

- _nothing right now_
