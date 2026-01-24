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

export const NewGameConfirmation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^new game$/i }));
  },
};

export const LoadGameConfirmation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^load game$/i }));
  },
};
