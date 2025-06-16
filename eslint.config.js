// @ts-check

import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sonarjs from 'eslint-plugin-sonarjs'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  sonarjs.configs.recommended,
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}', 'scripts/**/*'],
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      semi: [2, 'never'],
      // '@typescript-eslint/consistent-type-imports': 'error',
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sonarjs/no-commented-code': 'off'
    }
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },
  {
    name: 'app/scripts',
    files: ['scripts/**/*', '*.config.js'],
    rules: {
      'no-console': 'off'
    }
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    files: ['**/*.vue', '*.vue'],
    rules: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: []
        }
      ],
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['vue', 'jsx', 'tsx'],
          shouldMatchCase: true
        }
      ],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'sonarjs/no-vue-bypass-sanitization': 'warn'
    }
  }
)
