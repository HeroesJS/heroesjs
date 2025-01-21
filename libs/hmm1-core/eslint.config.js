import jsoncParser from 'jsonc-eslint-parser';

import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}', '{projectRoot}/vite.config.{js,ts,mjs,mts}'],
        },
      ],
    },
  },
];
