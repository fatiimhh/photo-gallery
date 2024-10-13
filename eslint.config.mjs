import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", 
      },
    },
  },
  {
    files: ["config-overrides.js"],
    languageOptions: {
      globals: {
        require: true,
        module: true,
      },
    },
  },
  {
    files: ["**/*.test.js", "**/*.test.jsx"],
    languageOptions: {
      globals: {
        jest: true,
        test: true,
        expect: true,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
