import type { Meta, StoryObj } from '@storybook/react';

import { creatureById, CreatureId, Luck, Morale, Skill } from '@heroesjs/hmm1-core';

import { TroopDetailsWindow } from './TroopDetailsWindow';

const meta: Meta<typeof TroopDetailsWindow> = {
  args: {
    count: 41,
    creature: creatureById[CreatureId.Peasant],
    luck: Luck.Normal,
    morale: Morale.Great,
    skillsBonus: {
      [Skill.Attack]: 1,
      [Skill.Defense]: 2,
    },
  },
  component: TroopDetailsWindow,
};

export default meta;

type Story = StoryObj<typeof TroopDetailsWindow>;

export const Primary: Story = {};

export const Shots: Story = {
  args: {
    count: 10,
    creature: creatureById[CreatureId.Centaur],
    luck: Luck.Normal,
    morale: Morale.Good,
    skillsBonus: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
    },
  },
};
