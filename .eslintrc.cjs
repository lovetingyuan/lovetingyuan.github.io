/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: [2, 'never'],
  },
  overrides: [
    {
      files: ['scripts/**/*.js'],
      env: {
        node: true,
        commonjs: true,
      },
    },
  ],
}
