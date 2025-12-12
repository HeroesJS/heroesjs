import type { Meta, StoryObj } from '@storybook/react';

import { DirectConnectGameMenu } from './DirectConnectGameMenu';

const meta = {
  component: DirectConnectGameMenu,
} satisfies Meta<typeof DirectConnectGameMenu>;

export default meta;

type Story = StoryObj<typeof DirectConnectGameMenu>;

export const Primary: Story = {};

export const WithConfiguration: Story = {
  args: {
    allowConfiguration: true,
  },
};
