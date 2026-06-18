import { defineConfig, type Plugin } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import packageJson from "./package.json" with { type: "json" };

const root = path.dirname(fileURLToPath(import.meta.url));

function buildHeader(): string {
  const { name, version, description, author, homepage, bugs, license, userscript } =
    packageJson;
  const { namespace, match, "run-at": runAt, grant } = userscript;
  const displayName = name.at(0)!.toUpperCase() + name.slice(1);

  // [directive, value] pairs; values are aligned to the widest directive so
  // adding a field never desyncs the spacing.
  const fields: [directive: string, value: string][] = [
    ["name", displayName],
    ["namespace", namespace],
    ["version", version],
    ["description", description],
    ["author", author],
    ["homepageURL", homepage],
    ["supportURL", bugs.url],
    ["license", license],
    ["match", match],
    ["run-at", runAt],
    ["grant", grant],
  ];
  const width = Math.max(...fields.map(([directive]) => directive.length));
  const lines = fields.map(
    ([directive, value]) => `// @${directive.padEnd(width)}  ${value}`,
  );

  return ["// ==UserScript==", ...lines, "// ==/UserScript==", ""].join("\n");
}

const userscriptHeader = buildHeader();

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
  clearScreen: false,
  plugins: [cssInjectedByJsPlugin(), userscriptHeaderPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(root, "src/main.ts"),
      formats: ["iife"],
      name: "Crosseyed",
      fileName: () => "crosseyed.user.js",
    },
  },
});
