import type { Meta, StoryObj } from '@storybook/react-vite';

import { ModemGameMenu } from './ModemGameMenu';

const meta = {
  component: ModemGameMenu,
} satisfies Meta<typeof ModemGameMenu>;

export default meta;

type Story = StoryObj<typeof ModemGameMenu>;

export const Primary: Story = {};

export const WithConfiguration: Story = {
  args: {
    allowConfiguration: true,
  },
};
