import type { Meta, StoryObj } from '@storybook/react-vite';

import { GameTypeMenu } from './GameTypeMenu';

const meta = {
  component: GameTypeMenu,
} satisfies Meta<typeof GameTypeMenu>;

export default meta;

type Story = StoryObj<typeof GameTypeMenu>;

export const Primary: Story = {};
