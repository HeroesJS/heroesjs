import type { Meta, StoryObj } from '@storybook/react';

import { ComPortMenu } from './ComPortMenu';

const meta = {
  component: ComPortMenu,
} satisfies Meta<typeof ComPortMenu>;

export default meta;

type Story = StoryObj<typeof ComPortMenu>;

export const Primary: Story = {};
