import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  GameDifficulty,
  MapDifficulty,
  MapSize,
  noOpponent,
  OpponentDifficulty,
  PlayerColor,
} from '@heroesjs/hmm1-core';

import { ScenarioInfoWindow } from './ScenarioInfoWindow';

const meta = {
  args: {
    difficultyRating: 60,
    gameDifficulty: GameDifficulty.Normal,
    humanOpponentsCount: 1,
    kingOfTheHill: false,
    open: true,
    opponents: [OpponentDifficulty.Smart, OpponentDifficulty.Dumb, noOpponent],
    playerColor: PlayerColor.Red,
    scenario: {
      description: 'Description',
      difficulty: MapDifficulty.Normal,
      name: 'Name',
      size: MapSize.Medium,
    },
  },
  component: ScenarioInfoWindow,
} satisfies Meta<typeof ScenarioInfoWindow>;

export default meta;

type Story = StoryObj<typeof ScenarioInfoWindow>;

export const Primary: Story = {};
