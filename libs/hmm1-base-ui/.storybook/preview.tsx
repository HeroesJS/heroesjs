import type {Preview} from '@storybook/react';

import {withI18next} from '@heroesjs/hmm1-i18n';

import {withGlobalStyle} from '../src';

const preview: Preview = {
  decorators: [withI18next, withGlobalStyle],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
};

export default preview;
