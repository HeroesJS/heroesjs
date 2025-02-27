import type { Meta, StoryObj } from '@storybook/react';

import { CreatureId, Town } from '@heroesjs/hmm1-core';

import { TroopSlot } from './TroopSlot';

const meta: Meta<typeof TroopSlot> = {
  args: {
    creature: CreatureId.Peasant,
    origin: Town.Farm,
  },
  component: TroopSlot,
};

export default meta;

type Story = StoryObj<typeof TroopSlot>;

export const Primary: Story = {};

export const Empty: Story = {
  args: {
    creature: undefined,
  },
};
