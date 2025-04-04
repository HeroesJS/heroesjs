import type { Meta, StoryObj } from '@storybook/react';

import { TownClass } from '@heroesjs/hmm1-core';

import { TownLocator } from './TownLocator';

const meta: Meta<typeof TownLocator> = {
  args: {
    town: TownClass.Farm,
  },
  component: TownLocator,
};

export default meta;

type Story = StoryObj<typeof TownLocator>;

export const Primary: Story = {};

export const Castle: Story = {
  args: {
    castle: true,
  },
};
