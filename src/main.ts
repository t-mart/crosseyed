import "./style.css";
import { spamLetters } from "./spam.ts";
import { startAutoPlay } from "./auto-play.ts";

const READY_CLASS = "crosseyed-ready";

// The game area starts at #pz-game-root; scrolling there docks the timer bar at
// the top of the viewport with the board and clues filling the rest.
const GAME_ROOT = "#pz-game-root";

// The timer bar's button group, where we dock our buttons next to the
// rebus/check/reveal buttons.
const TOOLBAR = ".xwd__toolbar--wrapper";
const TOOLBAR_MENU = ".xwd__toolbar--expandedMenu";

interface ToolbarAction {
  className: string;
  label: string;
  run: () => void;
}

function isToolbarReady(): boolean {
  return !!document.querySelector(TOOLBAR_MENU);
}

function scrollToGame(): void {
  const target = document.querySelector(GAME_ROOT);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const ACTIONS: ToolbarAction[] = [
  {
    className: "crosseyed-scroll-button",
    label: "Scroll Into View",
    run: scrollToGame,
  },
  {
    className: "crosseyed-spam-button",
    label: "Spam",
    run: () => void spamLetters(),
  },
];

function makeButton(action: ToolbarAction): HTMLLIElement {
  const item = document.createElement("li");
  item.className =
    `xwd__tool--button xwd__tool--texty crosseyed-tool ${action.className}`;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = action.label;
  button.addEventListener("click", action.run);

  item.append(button);
  return item;
}

// React owns the toolbar, so re-add any button a re-render drops.
function ensureButtons(): void {
  const menu = document.querySelector(TOOLBAR_MENU);
  if (!menu) return;
  for (const action of ACTIONS) {
    if (menu.querySelector(`.${action.className}`)) continue;
    menu.append(makeButton(action));
  }
}

function activate(): void {
  document.body.classList.add(READY_CLASS);
  ensureButtons();
  scrollToGame();

  const toolbar = document.querySelector(TOOLBAR);
  if (toolbar) {
    const observer = new MutationObserver(ensureButtons);
    observer.observe(toolbar, { subtree: true, childList: true });
  }
}

function whenReady(run: () => void): void {
  if (isToolbarReady()) {
    run();
    return;
  }
  const observer = new MutationObserver(() => {
    if (!isToolbarReady()) return;
    observer.disconnect();
    run();
  });
  observer.observe(document.body, { subtree: true, childList: true });
}

startAutoPlay();
whenReady(activate);
