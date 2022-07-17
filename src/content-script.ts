import { log } from "./log";

/**
 * Call callback with a matching element if it already exists in the DOM or if it is eventaully
 * added later.
 * @param selection a query selector
 * @param callback the function to run when the element is found, will be called with one argument:
 * the found Element.
 */
const whenElementAdded = (selection: string, callback: (element: Element) => void) => {
  const foundElement = document.querySelector(selection);
  if (foundElement) {
    callback(foundElement);
  } else {
    const observer = new MutationObserver((mutations, observer) => {
      for (const mutation of mutations) {
        let found = false; // fast break of nested loop
        // should always be true with out childList config, but for safety...
        if (mutation.type !== "childList") {
          continue;
        }
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeType !== Node.ELEMENT_NODE) {
            continue;
          }
          const element = addedNode as Element;
          const foundElement = element.querySelector(selection);
          if (!foundElement) {
            continue;
          }
          callback(foundElement);
          observer.disconnect();
          found = true;
          break;
        }
        if (found) {
          break;
        }
      }
    });
    observer.observe(document.body, { subtree: true, childList: true });
  }
};

/**
 * Get a promise that resolves after a delay
 * @param delay Number of milliseconds to wait before resolving.
 * @returns A promise that resolves after delay
 */
function wait(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

/**
 * Spams the currently selected cell with all letters, A to Z.
 */
const spam = async () => {
  const groupElement = document.querySelector("rect.xwd__cell--selected")?.parentElement;
  if (!groupElement) {
    throw new Error(`Unable to find currently selected cell`);
  }

  // this element accepts the keypresses that cause the cells to be filled
  const franklin = document.querySelector("main.xwd__franklin");
  if (!franklin) {
    throw new Error(`Unable to find keypress listener element`);
  }

  const charCodeStart = "a".codePointAt(0);
  const charCodeEnd = "z".codePointAt(0);
  if (!charCodeStart || !charCodeEnd) {
    throw new Error("this is impossible");
  }
  for (let charCode = charCodeStart; charCode <= charCodeEnd; charCode++) {
    const key = String.fromCodePoint(charCode);
    await wait(25);
    franklin.dispatchEvent(
      new KeyboardEvent("keypress", {
        bubbles: true,
        charCode,
        key,
      })
    );
    await wait(25);
    const keepTrying = document.querySelector('button[aria-label="Keep trying"]');
    const congrats = document.querySelector("div.xwd__congrats-modal--content");
    if (keepTrying) {
      keepTrying.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      log.info('closing "Keep trying" modal to resume spam');
    } else if (congrats) {
      log.info("puzzle solved -- stopping spam");
      break;
    }

    groupElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
};

log.info("Loaded content script");

// remove that pesky board title tooltip that blocks the puzzle
whenElementAdded("#boardTitle", (element) => {
  element.remove();
  log.info(`Removed boardTitle element`);
});

whenElementAdded(".xwd__toolbar--tools", (element) => {
  const scrollLi = document.createElement("li");
  scrollLi.setAttribute("class", "xwd__tool--button xwd__tool--texty");
  // scrollLi.setAttribute("id", "scroll-into-view-button");
  const scrollButton = document.createElement("button");
  const scrollAnchor = document.createElement("a");
  scrollAnchor.setAttribute("href", "#js-hook-pz-moment__game");
  scrollAnchor.text = "Scroll into View";
  scrollButton.append(scrollAnchor);
  scrollLi.append(scrollButton);
  element.append(scrollLi);
  log.info(`Added Scroll into View button`);

  const spamLi = document.createElement("li");
  spamLi.setAttribute("class", "xwd__tool--button xwd__tool--texty");
  // spamLi.setAttribute("id", "spam-button");
  const spamButton = document.createElement("button");
  spamButton.textContent = "Spam";
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  spamButton.addEventListener("click", async () => {
    await spam();
  });
  spamLi.append(spamButton);
  log.info(`Added Spam button`);
  element.append(spamLi);
});

whenElementAdded(".xwd__start-modal button[aria-label=Play]", (button) => {
  console.log("huh");
  (button as HTMLButtonElement).addEventListener("click", () => {
    const gameElement = document.querySelector("#js-hook-pz-moment__game");
    if (!gameElement) {
      throw new Error("Unable to find game element");
    }
    gameElement.scrollIntoView();
  });
});
