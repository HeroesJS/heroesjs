import type {Preview} from '@storybook/react';

import {withGlobalStyle} from '@heroesjs/hmm1-base-ui';
import {withI18next} from '@heroesjs/hmm1-i18n';

const preview: Preview = {
  decorators: [withI18next, withGlobalStyle],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
};

export default preview;
