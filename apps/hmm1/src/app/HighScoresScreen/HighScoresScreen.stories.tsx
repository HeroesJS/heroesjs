import type { Meta, StoryObj } from '@storybook/react-vite';
import { range } from 'lodash';

import { GameType } from '../core';
import type { CampaignGameScore, StandardGameScore } from '../highScores';
import { HighScoresScreen } from './HighScoresScreen';

const meta = {
  argTypes: {
    entries: {
      control: false,
    },
    gameType: {
      control: 'radio',
      options: [GameType.Standard, GameType.Campaign],
    },
  },
  args: {
    entries: {
      [GameType.Campaign]: range(1, 11).map<CampaignGameScore>((i) => ({
        days: i,
        leader: `Leader ${i}`,
        player: `Player ${i}`,
        title: `Title ${i}`,
      })),
      [GameType.Standard]: range(1, 11).map<StandardGameScore>((i, _, arr) => ({
        player: `Player ${i}`,
        scenario: `Scenario ${i}`,
        score: arr.length - i,
        title: `Title ${i}`,
      })),
    },
    gameType: GameType.Standard,
  },
  component: HighScoresScreen,
} satisfies Meta<typeof HighScoresScreen>;

export default meta;

type Story = StoryObj<typeof HighScoresScreen>;

export const Primary: Story = {};

export const Empty: Story = {
  args: {
    entries: undefined,
  },
};

export const StandardGame: Story = {
  args: {
    gameType: GameType.Standard,
  },
};

export const CampaignGame: Story = {
  args: {
    gameType: GameType.Campaign,
  },
};
