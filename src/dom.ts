/*
 * DOM helpers for the two recurring patterns described in ARCHITECTURE.md:
 * waiting for a React-rendered node to appear, and keeping an idempotent
 * injection applied as React re-renders the subtree.
 */

// Run now, then re-run on any childList change anywhere under root. Returns a
// disconnect function.
export function keepApplied(root: Node, run: () => void): () => void {
  run();
  const observer = new MutationObserver(run);
  observer.observe(root, { subtree: true, childList: true });
  return () => observer.disconnect();
}

// Resolve once the selector is present (immediately if it already is, otherwise
// when it next appears), then run once.
export function onPresent(selector: string, run: () => void): void {
  if (document.querySelector(selector)) {
    run();
    return;
  }
  const observer = new MutationObserver(() => {
    if (!document.querySelector(selector)) return;
    observer.disconnect();
    run();
  });
  observer.observe(document.body, { subtree: true, childList: true });
}
