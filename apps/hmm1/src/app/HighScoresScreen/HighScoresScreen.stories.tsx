import type { Meta, StoryObj } from '@storybook/react';

import { HighScoresScreen } from './HighScoresScreen';

const meta = {
  component: HighScoresScreen,
} satisfies Meta<typeof HighScoresScreen>;

export default meta;

type Story = StoryObj<typeof HighScoresScreen>;

export const Primary: Story = {};
