import type { Meta, StoryObj } from '@storybook/react-vite';

import { GameOptionsWindow } from './GameOptionsWindow';

const meta = {
  args: {
    open: true,
  },
  component: GameOptionsWindow,
} satisfies Meta<typeof GameOptionsWindow>;

export default meta;

type Story = StoryObj<typeof GameOptionsWindow>;

export const Primary: Story = {};
