import type { Meta, StoryObj } from '@storybook/react';

import { PlayerColor } from '@heroesjs/hmm1-core';

import { PlayerColorJewel } from './PlayerColorJewel';

const meta: Meta<typeof PlayerColorJewel> = {
  args: {
    value: PlayerColor.Blue,
  },
  component: PlayerColorJewel,
};

export default meta;

type Story = StoryObj<typeof PlayerColorJewel>;

export const Primary: Story = {};
