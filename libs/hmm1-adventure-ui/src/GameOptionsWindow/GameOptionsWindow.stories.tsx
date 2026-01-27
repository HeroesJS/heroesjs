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

export const NewGameInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^new game$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const NewGameConfirmation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^new game$/i }));
  },
};

export const LoadGameInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^load game$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const LoadGameConfirmation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^load game$/i }));
  },
};

export const SaveGameInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^save game$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const QuitInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^quit$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const QuitConfirmation: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /^quit$/i }));
  },
};

export const MusicVolumeInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('radiogroup', { name: /^music$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const EffectsVolumeInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('radiogroup', { name: /^effects$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const MovementSpeedInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('radiogroup', { name: /^speed$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const AutoSaveInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('checkbox', { name: /^auto save$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const ShowPathInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('checkbox', { name: /^show path$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const ViewEnemyMovementInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('checkbox', { name: /^view enemy movement$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const OkayInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^okay$/i }),
      keys: '[MouseRight>]',
    });
  },
};

export const InfoInfo: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.pointer({
      target: canvas.getByRole('button', { name: /^info$/i }),
      keys: '[MouseRight>]',
    });
  },
};
