/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    es2022: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:sonarjs/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['sonarjs'],
  rules: {
    semi: [2, 'never']
  },
  overrides: [
    {
      files: ['scripts/**/*.{js,mjs,cjs}', '*.js'],
      env: {
        node: true,
        commonjs: true
      }
    }
  ]
}
