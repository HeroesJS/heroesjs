import type { Meta, StoryObj } from '@storybook/react';

import { PlayerColor } from '@heroesjs/hmm1-core';

import { PlayerColorGem } from './PlayerColorGem';

const meta: Meta<typeof PlayerColorGem> = {
  args: {
    value: PlayerColor.Blue,
  },
  component: PlayerColorGem,
};

export default meta;

type Story = StoryObj<typeof PlayerColorGem>;

export const Primary: Story = {};
