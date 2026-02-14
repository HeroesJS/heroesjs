import type { Meta, StoryObj } from '@storybook/react-vite';

import { PlayerColor } from '@heroesjs/hmm1-core';

import { PlayerColorJewel } from './PlayerColorJewel';

const meta = {
  component: PlayerColorJewel,
} satisfies Meta<typeof PlayerColorJewel>;

export default meta;

type Story = StoryObj<typeof PlayerColorJewel>;

export const Primary: Story = {
  args: {
    value: PlayerColor.Green,
  },
};

export const Default: Story = {};
