/*
 * "Spam" action: rapidly enter A..Z into the currently selected cell, one after
 * another, each overwriting the last. Useful for brute-forcing a single unsure
 * cell (e.g. the last square) and watching for the puzzle to complete.
 *
 * The app only acts on real-looking mouse/keyboard input, so each letter goes
 * in by re-selecting the cell (a click reselects it, since typing advances the
 * selection) and then dispatching a key press.
 */

import type { ToolbarItem } from "./toolbar.ts";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SELECTED_CELL = ".xwd__cell--selected";
// i don't know if this franklin selector is important, this is just a vestige
// from my last version
const FRANKLIN_SELECTOR = "main.xwd__franklin";
const STEP_DELAY = 80;

let isSpamming = false;

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function dispatchPointer(target: Element, type: string): void {
  const box = target.getBoundingClientRect();
  const init: PointerEventInit = {
    bubbles: true,
    cancelable: true,
    // eslint-disable-next-line unicorn/prefer-global-this
    view: window,
    clientX: box.left + box.width / 2,
    clientY: box.top + box.height / 2,
  };
  const event = type.startsWith("pointer")
    ? new PointerEvent(type, init)
    : new MouseEvent(type, init);
  target.dispatchEvent(event);
}

// Reselect the cell the way a click would: typing advances the selection, so we
// click the same cell again before each letter.
function selectCell(cell: Element): void {
  dispatchPointer(cell, "click");
}

function pressLetter(target: Element, letter: string): void {
  const lower = letter.toLowerCase();
  const keyCode = lower.codePointAt(0) ?? 0;
  for (const type of ["keydown", "keypress", "keyup"]) {
    const event = new KeyboardEvent(type, {
      key: lower,
      code: `Key${letter}`,
      bubbles: true,
      cancelable: true,
    });
    // keyCode/which are legacy and not in KeyboardEventInit, but some handlers
    // still read them, so attach them after construction.
    Object.defineProperties(event, {
      keyCode: { get: () => keyCode },
      which: { get: () => keyCode },
      charCode: { get: () => keyCode },
    });
    target.dispatchEvent(event);
  }
}

export async function spamLetters(): Promise<void> {
  if (isSpamming) return;

  const selected = document.querySelector<SVGElement>(SELECTED_CELL);
  const cellGroup = selected?.parentElement;
  const franklin = document.querySelector<HTMLElement>(FRANKLIN_SELECTOR);
  if (!cellGroup || !franklin) return;

  // eslint-disable-next-line unicorn/no-top-level-assignment-in-function
  isSpamming = true;
  try {
    for (const letter of LETTERS) {
      pressLetter(franklin, letter);
      await delay(STEP_DELAY);
      selectCell(cellGroup);
      await delay(STEP_DELAY);
    }
  } finally {
    // eslint-disable-next-line unicorn/no-top-level-assignment-in-function
    isSpamming = false;
  }
}

export const spamItem: ToolbarItem = {
  className: "crosseyed-spam-button",
  run: () => void spamLetters(),
  view: () => ({ label: "Spam" }),
};
