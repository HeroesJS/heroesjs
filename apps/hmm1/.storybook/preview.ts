import type { Preview } from '@storybook/react';

const preview: Preview = {
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    actions: {
      argTypesRegex: /^on.*/,
    },
  },
};

export default preview;
