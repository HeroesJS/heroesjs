import { keyBy } from 'lodash';

import { HeroClassId, Skill, type SkillValues } from '../core';
import { CreatureId } from '../creature';

export interface InitialTroop {
  readonly creatureId: CreatureId;
  readonly max: number;
  readonly min: number;
  readonly optional?: boolean;
}

export interface HeroClassData {
  readonly army: readonly InitialTroop[];
  readonly id: HeroClassId;
  readonly skills: SkillValues;
}

export const heroClassData: readonly HeroClassData[] = [
  {
    army: [
      {
        creatureId: CreatureId.Peasant,
        max: 50,
        min: 30,
      },
      {
        creatureId: CreatureId.Archer,
        max: 5,
        min: 3,
        optional: true,
      },
    ],
    id: HeroClassId.Knight,
    skills: {
      [Skill.Attack]: 1,
      [Skill.Defense]: 2,
      [Skill.Knowledge]: 1,
      [Skill.SpellPower]: 1,
    },
  },
  {
    army: [
      {
        creatureId: CreatureId.Goblin,
        max: 25,
        min: 15,
      },
      {
        creatureId: CreatureId.Orc,
        max: 5,
        min: 3,
        optional: true,
      },
    ],
    id: HeroClassId.Barbarian,
    skills: {
      [Skill.Attack]: 2,
      [Skill.Defense]: 1,
      [Skill.Knowledge]: 1,
      [Skill.SpellPower]: 1,
    },
  },
  {
    army: [
      {
        creatureId: CreatureId.Sprite,
        max: 20,
        min: 10,
      },
      {
        creatureId: CreatureId.Dwarf,
        max: 4,
        min: 2,
        optional: true,
      },
    ],
    id: HeroClassId.Sorceress,
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.Knowledge]: 2,
      [Skill.SpellPower]: 3,
    },
  },
  {
    army: [
      {
        creatureId: CreatureId.Centaur,
        max: 10,
        min: 6,
      },
      {
        creatureId: CreatureId.Gargoyle,
        max: 4,
        min: 2,
        optional: true,
      },
    ],
    id: HeroClassId.Warlock,
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.Knowledge]: 3,
      [Skill.SpellPower]: 2,
    },
  },
];

export const heroClassDataById = keyBy(heroClassData, (d) => d.id);
