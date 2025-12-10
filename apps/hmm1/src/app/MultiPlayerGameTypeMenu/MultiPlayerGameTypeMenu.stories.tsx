import type { Meta, StoryObj } from '@storybook/react';

import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';

const meta = {
  component: MultiPlayerGameTypeMenu,
} satisfies Meta<typeof MultiPlayerGameTypeMenu>;

export default meta;

type Story = StoryObj<typeof MultiPlayerGameTypeMenu>;

export const Primary: Story = {};
