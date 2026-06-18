/*
 * Injects a "Crosseyed" section into the NYT "Puzzle Settings" modal, giving
 * our toggles a native-looking home alongside the game's own options.
 *
 * React builds the modal fresh each time it opens and re-renders the form as
 * settings change, so we cannot inject just once. Instead we watch the modal
 * portal and (re)add our section whenever the settings form is missing it.
 */

import type { AutoClicker } from "./auto-click.ts";

import { autoPlay } from "./auto-play.ts";
import { autoResume } from "./auto-resume.ts";
import { keepApplied } from "./dom.ts";

const MODAL_PORTAL = "#portal-game-modals";
const SETTINGS_FORM = "#settings-panel";
const COLUMN = ".xwd__settings-modal--column";
const SECTION_CLASS = "crosseyed-settings-section";

interface Toggle {
  name: string;
  label: string;
  clicker: AutoClicker;
}

const TOGGLES: Toggle[] = [
  {
    name: "crosseyedAutoPlay",
    label: "Auto play (skip the start screen)",
    clicker: autoPlay,
  },
  {
    name: "crosseyedAutoResume",
    label: "Auto resume (skip the pause screen)",
    clicker: autoResume,
  },
];

function makeToggle(toggle: Toggle): HTMLLabelElement {
  const label = document.createElement("label");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = toggle.name;
  input.checked = toggle.clicker.isEnabled();
  input.addEventListener("change", () => toggle.clicker.setEnabled(input.checked));

  const span = document.createElement("span");
  span.textContent = toggle.label;

  label.append(input, span);
  return label;
}

function makeSection(): HTMLElement {
  const section = document.createElement("section");
  section.className = `xwd__settings-modal--section ${SECTION_CLASS}`;

  const header = document.createElement("header");
  header.className = "xwd__settings-modal--heading";
  header.textContent = "Crosseyed";

  const inset = document.createElement("div");
  inset.className = "xwd__settings-modal--inset";
  for (const toggle of TOGGLES) inset.append(makeToggle(toggle));

  section.append(header, inset);
  return section;
}

// React owns the modal, so add our section back whenever the form lacks it.
function ensureSection(): void {
  const form = document.querySelector(SETTINGS_FORM);
  if (!form || form.querySelector(`.${SECTION_CLASS}`)) return;

  const columns = [...form.querySelectorAll(COLUMN)];
  const target = columns.length > 0 ? columns.at(-1)! : form;
  target.append(makeSection());
}

export function startSettingsPanel(): void {
  const root = document.querySelector(MODAL_PORTAL) ?? document.body;
  keepApplied(root, ensureSection);
}
