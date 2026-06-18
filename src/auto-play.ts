/*
 * Auto-play: automatically click modal buttons ("Play", "View solved puzzle",
 * etc.) so the game advances without manual interaction.
 *
 * Gated on localStorage key CE_AUTO_PLAY set to "true".
 */

const STORAGE_KEY = "CE_AUTO_PLAY";

const BUTTON_SELECTOR = ".pz-moment__button-wrapper button";

interface State {
  lastClicked: HTMLButtonElement | undefined;
}

function newState(): State {
  return { lastClicked: undefined };
}

function isEnabled(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

function findVisibleButton(): HTMLButtonElement | undefined {
  const buttons =
    document.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR);
  for (const button of buttons) {
    if (button.offsetParent !== null) return button;
  }
  return undefined;
}

function tryClick(state: State): void {
  const button = findVisibleButton();
  if (!button || button === state.lastClicked) return;
  state.lastClicked = button;
  button.click();
}

export function startAutoPlay(): void {
  if (!isEnabled()) return;

  const state = newState();

  // Modals may already be in the DOM by the time we run.
  tryClick(state);

  const gameRoot = document.querySelector("#pz-game-root");
  if (!gameRoot) return;

  const observer = new MutationObserver(() => {
    tryClick(state);
  });
  observer.observe(gameRoot, { subtree: true, childList: true });
}
