/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
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
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue', 'jsx', 'tsx'],
        shouldMatchCase: true
      }
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase']
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
