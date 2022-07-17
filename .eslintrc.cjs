/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      files: ["*.ts"],
      env: {
        node: true,
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "prettier",
        "plugin:unicorn/recommended",
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
        "unicorn/prevent-abbreviations": [
          "error",
          {
            allowList: {
              dist: true,
            },
          },
        ],
      },
    },
  ],
};
