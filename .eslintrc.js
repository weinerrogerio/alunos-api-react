/* import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
 */
// mimic CommonJS variables -- not needed if using CommonJS
/* const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended});

export default [
  {languageOptions: { globals: globals.node }},
  ...compat.extends("airbnb"),
]; */

// configurações do chat-gpt

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

  overrides: [
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    // eslint-disable-next-line quote-props
    'camelcase': 'off',
  },
};
