import type { Preview } from '@storybook/react';

import { GlobalStyle } from '@heroesjs/hmm1-base-ui';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
  },
};

export default preview;
