import type { Meta, StoryObj } from '@storybook/react';

import { HeroClassId, playerColors } from '@heroesjs/hmm1-core';

import { Crest } from './Crest';

const meta: Meta<typeof Crest> = {
  args: {
    color: playerColors[0],
  },
  component: Crest,
};

export default meta;

type Story = StoryObj<typeof Crest>;

export const Primary: Story = {};

export const HeroClass: Story = {
  args: {
    heroClass: HeroClassId.Knight,
  },
};
