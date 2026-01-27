import nx from '@nx/eslint-plugin';
import baseConfig, { reactRules } from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      ...reactRules,
    },
  },
  {
    ignores: ['**/out-tsc'],
  },
];
