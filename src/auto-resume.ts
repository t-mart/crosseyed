import { createAutoClicker } from "./auto-click.ts";

/*
 * Skip the pause screen ("Your game is paused.") by clicking its Continue
 * button as soon as the pause modal appears. The game pauses after the tab
 * loses focus; this dismisses the modal so the dev loop is not interrupted.
 */
export const autoResume = createAutoClicker({
  storageKey: "crosseyed-auto-resume",
  rootSelector: "#portal-game-modals",
  buttonSelector: ".pause-modal .xwd__modal--button-container button",
});
