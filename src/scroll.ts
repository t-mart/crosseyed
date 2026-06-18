/*
 * Toolbar item that scrolls the game area to the top of the viewport. scrollToGame
 * is also called once on activation so the board starts docked at the top.
 */

import type { ToolbarItem } from "./toolbar.ts";
import galleryVerticalIcon from "./icons/gallery-vertical.svg?raw";

// The game area starts at #pz-game-root; scrolling there docks the timer bar at
// the top of the viewport with the board and clues filling the rest.
const GAME_ROOT = "#pz-game-root";

export function scrollToGame(): void {
  const target = document.querySelector(GAME_ROOT);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const scrollItem: ToolbarItem = {
  className: "crosseyed-scroll-button",
  run: scrollToGame,
  view: () => ({ label: "Scroll Into View", icon: galleryVerticalIcon }),
};
