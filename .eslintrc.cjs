/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    es2022: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: [2, "never"],
  },
  overrides: [
    {
      files: ["scripts/**/*.js"],
      env: {
        node: true,
        commonjs: true,
      },
    },
  ],
}
