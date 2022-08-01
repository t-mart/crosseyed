<h1><img src="src/icons/icon.svg" width="32" /> Crosseyed</h1>

<p align="center">
  <img src="docs/before-and-after.gif" width="800" alt="before and after demonstration">
</p>

A browser extension that offers various (subjective!) improvements for the NYT Crossword website.

**Download at <https://add-ons.mozilla.org/en-US/firefox/add-on/crosseyed/>**

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

- `pnpm dev`: build the add-on immediately and again whenever a source file changes in `dist/`.
  Additionally, build the add-on with auto-reloading and HMR provided by
  [Parcel's web extension configuration](https://parceljs.org/recipes/web-extension/) -- this means
  that, in many cases, changes will be applied without needing to reload the add-on or the page.

- `pnpm run firefox`: Run Firefox with a test-purposed profile that loads the unpackaged add-on from
  `dist/` (thus, this script is best used in conjunction with `pnpm dev` or `pnpm  build`).
  This profile is separate from your default profile, so that bookmarks, cookies (logins), add-ons,
  and more are isolated. (e.g. you can keep a production version of the add-on installed in the
  default profile, and use this other profile only for testing during development.)

  You **must** create the profile first if it does not exist: run Firefox from the command line with
  `firefox -P` and follow the prompts to create a new profile named `crosseyed-test`.

  Finally, we do not use
  [web-ext's automatic extension reload mechanism](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
  because [Parcel already offers one](https://parceljs.org/recipes/web-extension/#hmr). (In fact, it
  doesn't look like we can even disable this)

- `pnpm build`: like `dev`, but without file watching

- `pnpm build-zip`: create an add-on zip file in `web-ext-artifacts`. This zip can only be loaded as
  a temporary add-on like above.

- `pnpm sign`: do the above, but also get the add-on signed by mozilla, so you can install it like a
  normal add-on. The generated `.xpi` file will also be in `web-ext-artifacts`. **Note**: this will
  "fail" because listed add-ons (like this one) must be submitted for review, and
  [web-ext always fails on submission](https://github.com/mozilla/web-ext/issues/804)

- `pnpm sign-deferred-review`: do the above, but search the output for text that indicates
  submission was successful, the add-on will be reviewed later, and we've done everything we can.

### Releasing

There's an automated release process with Github Actions. See
[.github/worflows/release.yml](https://github.com/t-mart/crosseyed/blob/master/.github/workflows/release.yml).

Run it at <https://github.com/t-mart/crosseyed/actions/workflows/release.yml>

As of time of writing, when you run it, this action:

- bumps the version
- commits the newly bumped repo and tags it and pushes it
- bundles the add-on with the new version
- checks ("lints") the add-on to make sure its ok
- zips up the add-on
- creates a new github release under the new git tag and adds the zip as an asset
- and finally, submits the zip to mozilla for review.

The status of the review can be found at:
<https://add-ons.mozilla.org/en-US/developers/add-on/crosseyed/versions>

## Known Issues

- _None right now, just a placeholder._

## TODO

- _nothing right now_
