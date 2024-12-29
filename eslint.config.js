import nx from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import merge from 'lodash.merge';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/react'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    plugins: {
      import: importPlugin,
      'typescript-sort-keys': typescriptSortKeys,
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
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
    },
    settings: {
      import: {
        'internal-regex': '^@heroesjs/',
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/jsx-sort-props': 'error',
    },
  },
  merge(testingLibraryPlugin.configs['flat/react'], {
    files: ['**/*.{spec,test,stories}.{js,jsx,ts,tsx}'],
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
];
