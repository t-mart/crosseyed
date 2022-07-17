document
  .querySelector("rect.xwd__cell--selected")
  ?.parentElement?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

document.querySelector("main.xwd__franklin")?.dispatchEvent(
  new KeyboardEvent("keypress", {
    bubbles: true,
    charCode: 97,
    key: "a",
  })
);

const spam = () => {
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
    franklin.dispatchEvent(
      new KeyboardEvent("keypress", {
        bubbles: true,
        charCode,
        key,
      })
    );
    groupElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
};
