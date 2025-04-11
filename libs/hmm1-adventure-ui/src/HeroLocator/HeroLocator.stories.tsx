import type {Meta, StoryObj} from '@storybook/react';

import {HeroId} from '@heroesjs/hmm1-core';

import {HeroLocator} from './HeroLocator';

const meta: Meta<typeof HeroLocator> = {
  args: {
    hero: HeroId.LordKilburn,
  },
  component: HeroLocator,
};

export default meta;

type Story = StoryObj<typeof HeroLocator>;

export const Primary: Story = {};

export const Mobility: Story = {
  args: {
    mobility: 10,
  },
};
