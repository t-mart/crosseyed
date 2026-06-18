import "./style.css";
import { spamItem } from "./spam.ts";
import { scrollItem, scrollToGame } from "./scroll.ts";
import { autoPlay } from "./auto-play.ts";
import { autoResume } from "./auto-resume.ts";
import { startSettingsPanel } from "./settings-panel.ts";
import { fullscreenItem, startFullscreen } from "./fullscreen.ts";
import { xwstatsItem } from "./xwstats.ts";
import { makeButton } from "./toolbar.ts";
import { keepApplied, onPresent } from "./dom.ts";

const READY_CLASS = "crosseyed-ready";

// The timer bar's button group, where we dock our buttons next to the
// rebus/check/reveal buttons.
const TOOLBAR = ".xwd__toolbar--wrapper";
// The tools list is present whether or not the puzzle is playable; the expanded
// clear/reveal/check menu only exists while the puzzle can still be edited (it
// is gone once the puzzle is completed), so it is our preferred-but-optional
// dock, not the readiness signal.
const TOOLBAR_TOOLS = ".xwd__toolbar--tools";
const TOOLBAR_MENU = ".xwd__toolbar--expandedMenu";

const ACTIONS = [spamItem, xwstatsItem, scrollItem, fullscreenItem];

// React owns the toolbar, so re-add any button a re-render drops. Dock into the
// expanded menu when present, otherwise straight into the tools list (completed
// puzzles drop the expanded menu). The presence check spans the whole tools
// list so a button is never duplicated when the dock changes between states.
function ensureButtons(): void {
  const tools = document.querySelector(TOOLBAR_TOOLS);
  if (!tools) return;
  const dock = document.querySelector(TOOLBAR_MENU) ?? tools;
  for (const action of ACTIONS) {
    if (tools.querySelector(`.${action.className}`)) continue;
    dock.append(makeButton(action));
  }
}

function activate(): void {
  document.body.classList.add(READY_CLASS);
  scrollToGame();

  const toolbar = document.querySelector(TOOLBAR);
  if (toolbar) keepApplied(toolbar, ensureButtons);
}

const starters = [
  autoPlay.start,
  autoResume.start,
  startSettingsPanel,
  startFullscreen,
];
for (const start of starters) start();
onPresent(TOOLBAR_TOOLS, activate);
