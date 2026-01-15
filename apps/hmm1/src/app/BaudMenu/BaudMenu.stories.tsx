import type { Meta, StoryObj } from '@storybook/react-vite';

import { BaudMenu } from './BaudMenu';

const meta = {
  component: BaudMenu,
} satisfies Meta<typeof BaudMenu>;

export default meta;

type Story = StoryObj<typeof BaudMenu>;

export const Primary: Story = {};
