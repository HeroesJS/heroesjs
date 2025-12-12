import type { Meta, StoryObj } from '@storybook/react';

import { NetworkGameMenu } from './NetworkGameMenu';

const meta = {
  component: NetworkGameMenu,
} satisfies Meta<typeof NetworkGameMenu>;

export default meta;

type Story = StoryObj<typeof NetworkGameMenu>;

export const Primary: Story = {};
