import { createAutoClicker } from "./auto-click.ts";

/*
 * Skip the start screen ("Ready to start solving?") by clicking its Play
 * button as soon as the moment appears.
 */
export const autoPlay = createAutoClicker({
  storageKey: "crosseyed-auto-play",
  rootSelector: "#pz-game-root",
  buttonSelector: ".pz-moment__button-wrapper button",
});
