/*
 * Toolbar item that toggles the page in and out of fullscreen. The icon and
 * label reflect the current state, and startFullscreen keeps them in sync when
 * the user leaves fullscreen by other means (Esc, browser chrome).
 */

import expandIcon from "./icons/expand.svg?raw";
import shrinkIcon from "./icons/shrink.svg?raw";

import { refreshItem, type ToolbarItem } from "./toolbar.ts";

const isFullscreen = (): boolean => document.fullscreenElement !== null;

async function changeFullscreen(): Promise<void> {
  try {
    if (isFullscreen()) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    // Fullscreen can be blocked; nothing to do then.
  }
}

function toggleFullscreen(): void {
  void changeFullscreen();
}

export const fullscreenItem: ToolbarItem = {
  className: "crosseyed-fullscreen-button",
  run: toggleFullscreen,
  view: () =>
    isFullscreen()
      ? { label: "Exit fullscreen", icon: shrinkIcon }
      : { label: "Enter fullscreen", icon: expandIcon },
};

export function startFullscreen(): void {
  document.addEventListener("fullscreenchange", () =>
    refreshItem(fullscreenItem),
  );
}
