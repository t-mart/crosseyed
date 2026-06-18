/*
 * Toolbar item that opens the current puzzle's XWStats page (a third-party
 * stats site) in a new tab. NYT puzzle URLs map cleanly to XWStats URLs by
 * size and date; only the full-size "daily" puzzle has no size prefix on
 * XWStats.
 *
 *   /crosswords/game/daily/2026/06/11 -> xwstats.com/puzzles/2026-06-11
 *   /crosswords/game/midi/2026/06/11  -> xwstats.com/puzzles/midi/2026-06-11
 *   /crosswords/game/mini/2026/06/11  -> xwstats.com/puzzles/mini/2026-06-11
 */

import type { ToolbarItem } from "./toolbar.ts";

const PATH_PREFIX: Record<string, string> = {
  daily: "",
  midi: "midi/",
  mini: "mini/",
};

const NYT_PATH = /\/crosswords\/game\/([a-z]+)\/(\d{4})\/(\d{2})\/(\d{2})/;

export function xwstatsUrl(pathname: string): string | undefined {
  const match = NYT_PATH.exec(pathname);
  if (!match) return undefined;

  const [, size, year, month, day] = match;
  const prefix = PATH_PREFIX[size];
  if (prefix === undefined) return undefined;

  return `https://xwstats.com/puzzles/${prefix}${year}-${month}-${day}`;
}

function openXwstats(): void {
  const url = xwstatsUrl(location.pathname);
  open(url ?? "https://xwstats.com", "_blank", "noopener");
}

export const xwstatsItem: ToolbarItem = {
  className: "crosseyed-xwstats-button",
  run: openXwstats,
  view: () => ({ label: "XWStats" }),
};
