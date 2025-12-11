import type { Meta, StoryObj } from '@storybook/react';

import { PlayerCountMenu } from './PlayerCountMenu';

const meta = {
  component: PlayerCountMenu,
} satisfies Meta<typeof PlayerCountMenu>;

export default meta;

type Story = StoryObj<typeof PlayerCountMenu>;

export const Primary: Story = {};
