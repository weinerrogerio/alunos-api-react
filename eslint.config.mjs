import globals from "globals";
import pluginJs from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "./prettier.config.mjs";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },

  {
    plugins: {
      "react-hooks": reactHooks,
      react: pluginReact,
      "plugin:prettier/recommended": prettierConfig,
    },
    rules: {
      "no-unused-vars": [
        "error",
        {
          args: "none",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^React$",
        },
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-undef": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [
      "node_modules/*",
      "build/",
      "prettier.config.mjs",
      "eslint.config.mjs",
    ],
  },
];
