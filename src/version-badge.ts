/*
 * Stamps "crosseyed v<version> loaded" into the NYT global nav, so it is obvious
 * at a glance that the script is running and which build.
 *
 * The version comes from the userscript manager via GM_info, which reflects the
 * @version in the metadata header (stamped at build time, see vite.config.ts).
 * GM_info is available even under `@grant none`, so no grant is required.
 *
 * The global nav is React-managed page chrome, so we follow the usual
 * observe-and-re-apply pattern: wait for it, then keep an idempotent badge
 * applied across re-renders.
 */

import { keepApplied, onPresent } from "./dom.ts";

interface UserscriptInfo {
  script?: { version?: string };
}

const GLOBAL_NAV = "#js-global-nav";
const BADGE_CLASS = "crosseyed-version-badge";

function scriptVersion(): string {
  const info = (globalThis as { GM_info?: UserscriptInfo }).GM_info;
  const version = info?.script?.version;
  if (version) {
    return `v${version}`;
  }
  return "development build"
}

function ensureBadge(nav: Element): void {
  if (nav.querySelector(`.${BADGE_CLASS}`)) return;
  const badge = document.createElement("span");
  badge.className = BADGE_CLASS;
  badge.textContent = `crosseyed (${scriptVersion()})`;
  nav.append(badge);
}

export function startVersionBadge(): void {
  onPresent(GLOBAL_NAV, () => {
    const nav = document.querySelector(GLOBAL_NAV);
    if (nav) keepApplied(nav, () => ensureBadge(nav));
  });
}
