/*
 * Reusable toolbar items for the NYT timer bar. One code path builds both texty
 * buttons (a plain label) and icon buttons (inline SVG markup). React owns the
 * toolbar and re-renders it, so callers keep an observer and re-run makeButton;
 * refreshItem updates a stateful button in place when its state changes without
 * a toolbar re-render.
 */

export interface ToolbarView {
  // aria-label, and the visible text for texty items.
  label: string;
  // Raw SVG markup; when present the item renders as an icon button.
  icon?: string;
}

export interface ToolbarItem {
  // Marker class used for idempotent injection and refresh lookup.
  className: string;
  run: () => void;
  // Re-evaluated on each (re)render and on refresh, so it can reflect state.
  view: () => ToolbarView;
}

function applyView(button: HTMLButtonElement, view: ToolbarView): void {
  button.setAttribute("aria-label", view.label);
  if (view.icon) {
    // Icon buttons have no visible text, so lean on the label for a native
    // hover tooltip.
    button.title = view.label;
    button.innerHTML = view.icon;
  } else {
    button.textContent = view.label;
  }
}

export function makeButton(item: ToolbarItem): HTMLLIElement {
  const view = item.view();

  const list = document.createElement("li");
  const texty = view.icon ? "" : " xwd__tool--texty";
  list.className =
    `xwd__tool--button${texty} crosseyed-tool ${item.className}`;

  const button = document.createElement("button");
  button.type = "button";
  applyView(button, view);
  button.addEventListener("click", item.run);

  list.append(button);
  return list;
}

// Update an already-rendered button to reflect current state (e.g. after a
// fullscreen change) instead of rebuilding it.
export function refreshItem(item: ToolbarItem): void {
  const button = document.querySelector<HTMLButtonElement>(
    `.${item.className} > button`,
  );
  if (button) applyView(button, item.view());
}
