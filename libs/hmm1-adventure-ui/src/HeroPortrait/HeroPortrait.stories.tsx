import type { Meta, StoryObj } from '@storybook/react';

import { HeroId } from '@heroesjs/hmm1-core';

import { HeroPortrait } from './HeroPortrait';

const meta: Meta<typeof HeroPortrait> = {
  args: {
    heroId: HeroId.LordKilburn,
  },
  component: HeroPortrait,
};

export default meta;

type Story = StoryObj<typeof HeroPortrait>;

export const Primary: Story = {};

export const Empty: Story = {
  args: {
    heroId: undefined,
  },
};
