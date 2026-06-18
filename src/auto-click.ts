/*
 * Auto-click: watch a container and click a button the moment it appears, so a
 * modal or moment dismisses itself without manual interaction. Each clicker is
 * gated on its own localStorage key and built with createAutoClicker.
 */

import { keepApplied } from "./dom.ts";

interface AutoClickerConfig {
  storageKey: string;
  rootSelector: string;
  buttonSelector: string;
}

export interface AutoClicker {
  isEnabled: () => boolean;
  setEnabled: (isOn: boolean) => void;
  start: () => void;
}

export function createAutoClicker(config: AutoClickerConfig): AutoClicker {
  const { storageKey, rootSelector, buttonSelector } = config;

  let lastClicked: HTMLButtonElement | undefined;
  let stop: (() => void) | undefined;

  const isEnabled = (): boolean => localStorage.getItem(storageKey) === "true";

  function findVisibleButton(): HTMLButtonElement | undefined {
    const buttons =
      document.querySelectorAll<HTMLButtonElement>(buttonSelector);
    for (const button of buttons) {
      if (button.offsetParent !== null) return button;
    }
    return undefined;
  }

  function tryClick(): void {
    const button = findVisibleButton();
    if (!button || button === lastClicked) return;
    lastClicked = button;
    button.click();
  }

  function start(): void {
    // Stop any existing observer before (re)starting.
    stop?.();
    stop = undefined;

    if (!isEnabled()) return;

    // keepApplied tries to click immediately (the button may already be there)
    // and again on every mutation under root.
    const root = document.querySelector(rootSelector) ?? document.body;
    stop = keepApplied(root, tryClick);
  }

  // Persist the flag and (re)start so the change takes effect immediately.
  const setEnabled = (isOn: boolean): void => {
    localStorage.setItem(storageKey, String(isOn));
    start();
  };

  return { isEnabled, setEnabled, start };
}
