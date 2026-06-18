// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig(
  { ignores: ["dist/**", "node_modules/**"] },
  // Shared: every TypeScript and mjs file gets the same rule set, parser, and
  // type-aware linting. Platform-specific globals are layered on below.
  {
    files: ["**/*.{ts,tsx,mjs}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      eslintPluginUnicorn.configs.recommended,
    ],

    plugins: {
      perfectionist,
      unicorn: eslintPluginUnicorn,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        projectService: {
          allowDefaultProject: ["*.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.builtin },
    },

    rules: {
      "unicorn/no-useless-undefined": [
        "error",
        {
          checkArrowFunctionBody: false,
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          ignore: [
            /args/i,
            /ctx/i,
            /db/i,
            /deps/i,
            /dev/i,
            /env/i,
            /docs/i,
            /param/i,
            /prev/i,
            /props/i,
            /ref/i,
          ],
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
    },
  },
  // Browser platform: the userscript that runs on the NYT page.
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  // Deno/Node platform: the build and dev tooling that runs locally.
  {
    files: ["scripts/**/*.ts", "vite.config.ts", "eslint.config.mjs"],
    languageOptions: {
      globals: { ...globals.node, ...globals.denoBuiltin },
    },
  },
  // This flat config file is linted via the default project (it is not part of
  // any tsconfig), where type info is unreliable. Keep the syntactic rules but
  // drop the type-aware ones for it.
  {
    files: ["eslint.config.mjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
