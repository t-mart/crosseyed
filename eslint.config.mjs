// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig(
  {
    files: ["vite.config.ts", "eslint.config.mjs", "scripts/**/*.ts"],
    languageOptions: {
      globals: { ...globals.builtin, ...globals.node, ...globals.bunBuiltin },
    },
  },
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
          allowDefaultProject: ["*.ts", "*.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.builtin, ...globals.browser },
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
    ignores: ["dist/**", "node_modules/**"],
  },
);
