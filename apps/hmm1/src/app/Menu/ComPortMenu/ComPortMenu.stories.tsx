import type { Meta, StoryObj } from '@storybook/react';

import { ComPortMenu } from './ComPortMenu';

const meta: Meta<typeof ComPortMenu> = {
  argTypes: {
    onCancelClick: { action: 'Cancel Click' },
    onPortClick: { action: 'Port Click' },
  },
  component: ComPortMenu,
};

export default meta;

type Story = StoryObj<typeof ComPortMenu>;

export const Primary: Story = {};
