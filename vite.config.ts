import { defineConfig, type Plugin } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const userscriptHeader = `// ==UserScript==
// @name         Crosseyed
// @namespace    crosseyed
// @version      0.1.0
// @description  Make the NYT Crossword fill the window
// @author       crosseyed
// @match        https://www.nytimes.com/crosswords/game/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==
`;

function userscriptHeaderPlugin(): Plugin {
  return {
    name: "crosseyed-userscript-header",
    enforce: "post" as const,
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === "chunk" && file.fileName.endsWith(".user.js")) {
          file.code = `${userscriptHeader}\n${file.code}`;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [cssInjectedByJsPlugin(), userscriptHeaderPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(root, "src/main.ts"),
      formats: ["iife"],
      name: "Crosseyed",
      fileName: () => "crosseyed.user.js"
    },
  },
});
