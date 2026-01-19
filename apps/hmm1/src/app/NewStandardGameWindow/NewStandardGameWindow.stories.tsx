import type { Meta, StoryObj } from '@storybook/react-vite';

import { NewStandardGameWindow } from './NewStandardGameWindow';
import { GameDifficulty, PlayerColor } from '@heroesjs/hmm1-core';

const meta = {
  args: {
    difficultyRating: 60,
    gameDifficulty: GameDifficulty.Normal,
    playerColor: PlayerColor.Blue,
    scenarioName: 'Claw ( Easy )',
  },
  component: NewStandardGameWindow,
} satisfies Meta<typeof NewStandardGameWindow>;

export default meta;

type Story = StoryObj<typeof NewStandardGameWindow>;

export const Primary: Story = {};
