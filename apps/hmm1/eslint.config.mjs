import nx from '@nx/eslint-plugin';
import storybook from 'eslint-plugin-storybook';
import baseConfig, { reactRules } from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      ...reactRules,
    },
  },
];
