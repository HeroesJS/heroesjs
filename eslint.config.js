import nx from '@nx/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import playwrightPlugin from 'eslint-plugin-playwright';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import merge from 'lodash.merge';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/react'],
  {
    ignores: ['**/dist', '**/storybook-static', '**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: ['**/vite.config.ts'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: ['*'],
              sourceTag: '*',
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    plugins: {
      import: importPlugin,
      perfectionist,
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
          named: true,
          'newlines-between': 'always',
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          forceNumericSort: true,
        },
      ],
      'perfectionist/sort-interfaces': ['error'],
      'sort-keys': [
        'error',
        'asc',
        {
          allowLineSeparatedGroups: false,
          caseSensitive: true,
          ignoreComputedKeys: false,
          minKeys: 2,
          natural: true,
        },
      ],
    },
    settings: {
      'import/internal-regex': '^@heroesjs/',
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/jsx-sort-props': 'error',
    },
  },
  merge(testingLibraryPlugin.configs['flat/react'], {
    files: ['**/*.{spec,stories}.{js,jsx,ts,tsx}'],
    rules: {
      'testing-library/consistent-data-testid': 'off',
      'testing-library/no-debugging-utils': 'error',
      'testing-library/no-node-access': [
        'error',
        {
          allowContainerFirstChild: true,
        },
      ],
      'testing-library/prefer-explicit-assert': [
        'error',
        {
          assertion: 'toBeInTheDocument',
        },
      ],
      'testing-library/prefer-implicit-assert': 'off',
      'testing-library/prefer-query-matchers': 'off',
      'testing-library/prefer-user-event': 'error',
    },
  }),
  {
    ...playwrightPlugin.configs['flat/recommended'],
    files: ['**/*.test.{js,ts}'],
    rules: {
      ...playwrightPlugin.configs['flat/recommended'].rules,
      'playwright/no-commented-out-tests': 'error',
      'playwright/no-duplicate-hooks': 'error',
      'playwright/no-get-by-title': 'error',
      'playwright/no-hooks': 'off',
      'playwright/no-nth-methods': 'error',
      'playwright/no-raw-locators': [
        'error',
        {
          allowed: ['#app'],
        },
      ],
      'playwright/no-restricted-matchers': 'off',
      'playwright/no-useless-await': 'error',
      'playwright/prefer-comparison-matcher': 'error',
      'playwright/prefer-equality-matcher': 'error',
      'playwright/prefer-hooks-in-order': 'error',
      'playwright/prefer-hooks-on-top': 'error',
      'playwright/prefer-locator': 'error',
      'playwright/prefer-lowercase-title': 'error',
      'playwright/prefer-native-locators': [
        'error',
        {
          testIdAttribute: 'data-testid',
        },
      ],
      'playwright/prefer-strict-equal': 'error',
      'playwright/prefer-to-be': 'error',
      'playwright/prefer-to-contain': 'error',
      'playwright/prefer-to-have-count': 'error',
      'playwright/prefer-to-have-length': 'error',
      'playwright/require-hook': [
        'error',
        {
          allowedFunctionCalls: [],
        },
      ],
      'playwright/require-soft-assertions': 'off',
      'playwright/require-to-throw-message': 'error',
      'playwright/require-top-level-describe': 'off',
    },
  },
];
