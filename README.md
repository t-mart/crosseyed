# Crosseyed

A browser extension that offers various (subjective!) improvements for the NYT Crossword website.

- Resizes the puzzle to use all of your viewport
- New menu buttons:
  - "Scroll into View": Scrolls your browser window to the puzzle
  - "Spam": Brute forces all letters, A to Z, on the currently selected cell

## Known Issues

- Content below the puzzle may be overflowed onto at small screen heights
- When a modal is open, the spam feature will continue to enter letters, even though they are not
  accepted as input to the puzzle.
  - If the puzzle is correctly solved, this shouldn't be an issue because the correct letter will be
    locked in already.
  - If the puzzle is incorrectly solved (e.g. "So close..."), clearing the cell and clicking it
    again will cause the same modal to reappear and thus, no spamming will actually be performed.
    A workaround to this problem is to enter in any letter into the cell first. (If a cell is
    already filled, but replaced with another letter from the spam function, the modal will not
    reappear.)
