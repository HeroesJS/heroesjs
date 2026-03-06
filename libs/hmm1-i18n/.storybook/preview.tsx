import type { Preview } from '@storybook/react-vite';

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
