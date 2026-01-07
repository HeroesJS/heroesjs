import type { Meta, StoryObj } from '@storybook/react';

import { NewStandardGameWindow } from './NewStandardGameWindow';

const meta = {
  component: NewStandardGameWindow,
} satisfies Meta<typeof NewStandardGameWindow>;

export default meta;

type Story = StoryObj<typeof NewStandardGameWindow>;

export const Primary: Story = {};
