# crosseyed release branch

This branch exists only so Greasy Fork can sync the built userscript. Do not
edit it by hand.

Greasy Fork's webhook pulls the script file out of a git tree (a pushed
commit's contents), not from GitHub Release assets, even for "release" events.
The project keeps build artifacts out of `master`, so CI builds the userscript
and commits it here instead, on a branch that holds only this README and the
built file.

This branch is overwritten by the "Publish userscript" GitHub Actions workflow
on every push to `master`. To change the script, edit the source on `master`.

Greasy Fork sync URL:

    https://raw.githubusercontent.com/t-mart/crosseyed/release/crosseyed.user.js
