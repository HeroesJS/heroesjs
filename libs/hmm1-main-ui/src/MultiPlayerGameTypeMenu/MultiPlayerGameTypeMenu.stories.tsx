import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';

const meta = {
  component: MultiPlayerGameTypeMenu,
} satisfies Meta<typeof MultiPlayerGameTypeMenu>;

export default meta;

type Story = StoryObj<typeof MultiPlayerGameTypeMenu>;

export const Primary: Story = {};
