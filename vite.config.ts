import { defineConfig, type Plugin } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import packageJson from "./package.json" with { type: "json" };

const root = path.dirname(fileURLToPath(import.meta.url));

function gitShortSha(): string {
  try {
    return execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      cwd: root,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return "unknown";
  }
}

function commitDate(): Date | undefined {
  try {
    const epoch = execFileSync("git", ["show", "-s", "--format=%ct", "HEAD"], {
      cwd: root,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return new Date(Number(epoch) * 1000);
  } catch {
    return undefined;
  }
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

// CalVer stamped at build time so each CD release gets a strictly increasing
// @version (Greasy Fork / userscript managers only auto-update when it rises).
// Derived from the commit's UTC timestamp, so rebuilding a commit is reproducible.
function calendarVersion(): string {
  const d = commitDate() ?? new Date();
  const hms = `${pad2(d.getUTCHours())}${pad2(d.getUTCMinutes())}${pad2(d.getUTCSeconds())}`;
  return `${d.getUTCFullYear()}.${pad2(d.getUTCMonth() + 1)}.${pad2(d.getUTCDate())}.${hms}`;
}

function buildHeader(): string {
  const { name, description, author, homepage, bugs, license, userscript } =
    packageJson;
  const { namespace, match, "run-at": runAt, grant } = userscript;
  const displayName = name.at(0)!.toUpperCase() + name.slice(1);

  // [directive, value] pairs; values are aligned to the widest directive so
  // adding a field never desyncs the spacing.
  const fields: [directive: string, value: string][] = [
    ["name", displayName],
    ["namespace", namespace],
    ["version", version],
    ["commit", gitShortSha()],
    ["description", description],
    ["author", author],
    [
      "releaseURL",
      `https://github.com/t-mart/crosseyed/releases/tag/${version}`,
    ],
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

// The release is tagged and titled with this same CalVer (see publish.yml), so the
// header's releaseURL resolves to it.
const version = calendarVersion();
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

// Write dist/version.txt holding the bare CalVer, so the publish workflow can read
// the version from a stable file instead of scraping it out of the bundle.
function versionFilePlugin(): Plugin {
  return {
    name: "crosseyed-version-file",
    writeBundle(options) {
      const outputDirectory = options.dir ?? path.join(root, "dist");
      writeFileSync(path.join(outputDirectory, "version.txt"), `${version}\n`);
    },
  };
}

export default defineConfig({
  clearScreen: false,
  plugins: [
    cssInjectedByJsPlugin(),
    userscriptHeaderPlugin(),
    versionFilePlugin(),
  ],
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
