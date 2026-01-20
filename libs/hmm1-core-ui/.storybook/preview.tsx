import type { Preview } from '@storybook/react-vite';

import { GlobalFontStyles } from '../src';

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
      <>
        <GlobalFontStyles />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: {
      argTypesRegex: /^on.*/,
    },
  },
};

export default preview;
