import type { Meta, StoryObj } from '@storybook/react';

import { CreatureId, CreatureSpeed, Luck, Morale, Skill } from '@heroesjs/hmm1-core';

import { TroopDetailsWindow } from './TroopDetailsWindow';

const meta: Meta<typeof TroopDetailsWindow> = {
  args: {
    count: 41,
    creature: {
      hitPoints: 1,
      id: CreatureId.Peasant,
      luck: Luck.Normal,
      maxDamage: 1,
      minDamange: 1,
      morale: Morale.Great,
      shots: 0,
      skills: {
        [Skill.Attack]: 1,
        [Skill.Defense]: 1,
      },
      speed: CreatureSpeed.Slow,
    },
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
    creature: {
      hitPoints: 5,
      id: CreatureId.Centaur,
      luck: Luck.Normal,
      maxDamage: 2,
      minDamange: 1,
      morale: Morale.Good,
      shots: 8,
      skills: {
        [Skill.Attack]: 3,
        [Skill.Defense]: 1,
      },
      speed: CreatureSpeed.Medium,
    },
    skillsBonus: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
    },
  },
};
