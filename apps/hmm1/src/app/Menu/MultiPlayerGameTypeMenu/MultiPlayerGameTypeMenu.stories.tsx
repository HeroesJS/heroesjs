import type { Meta, StoryObj } from '@storybook/react';

import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';

const meta: Meta<typeof MultiPlayerGameTypeMenu> = {
  component: MultiPlayerGameTypeMenu,
};

export default meta;

type Story = StoryObj<typeof MultiPlayerGameTypeMenu>;

export const Primary: Story = {};
