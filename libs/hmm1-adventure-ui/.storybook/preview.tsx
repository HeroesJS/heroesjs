import type { Preview } from '@storybook/react-vite';
import { I18nextProvider } from 'react-i18next';

import { GlobalFontStyles } from '@heroesjs/hmm1-core-ui';
import { i18n } from '@heroesjs/hmm1-i18n';

const preview: Preview = {
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <GlobalFontStyles />
        <Story />
      </I18nextProvider>
    ),
  ],
  parameters: {
    actions: {
      argTypesRegex: /^on.*/,
    },
  },
};

export default preview;
