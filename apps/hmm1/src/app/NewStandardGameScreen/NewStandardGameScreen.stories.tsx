import type { Meta, StoryObj } from '@storybook/react';

import { NewStandardGameScreen } from './NewStandardGameScreen';

const meta = {
  component: NewStandardGameScreen,
} satisfies Meta<typeof NewStandardGameScreen>;

export default meta;

type Story = StoryObj<typeof NewStandardGameScreen>;

export const Primary: Story = {};
