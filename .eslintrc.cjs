/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
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
  plugins: ['sonarjs', 'simple-import-sort'],
  rules: {
    semi: [2, 'never'],
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: ['iconify-icon']
      }
    ]
  },
  overrides: [
    {
      files: ['scripts/**/*', '*.config.js'],
      env: {
        node: true,
        commonjs: true
      },
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
