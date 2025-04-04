import { keyBy } from 'lodash';

import { HeroClassId, Skill, type SkillValues } from '../core';
import { CreatureId } from '../creature';

export interface SkillGainProbabilities {
  readonly default: SkillValues;
  readonly forLevel: Record<number, SkillValues>;
}

export interface InitialTroop {
  readonly creatureId: CreatureId;
  readonly max: number;
  readonly min: number;
  readonly optional?: boolean;
}

export interface HeroClassData {
  readonly army: readonly InitialTroop[];
  readonly id: HeroClassId;
  readonly skillGainProbabilities: SkillGainProbabilities;
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
    skillGainProbabilities: {
      default: {
        [Skill.Attack]: 25,
        [Skill.Defense]: 25,
        [Skill.Knowledge]: 25,
        [Skill.SpellPower]: 25,
      },
      forLevel: {
        2: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 60,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        3: {
          [Skill.Attack]: 60,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        4: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 60,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        5: {
          [Skill.Attack]: 25,
          [Skill.Defense]: 25,
          [Skill.Knowledge]: 25,
          [Skill.SpellPower]: 25,
        },
        6: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 60,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        7: {
          [Skill.Attack]: 60,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        8: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 60,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        9: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 60,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
      },
    },
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
    skillGainProbabilities: {
      default: {
        [Skill.Attack]: 40,
        [Skill.Defense]: 40,
        [Skill.Knowledge]: 10,
        [Skill.SpellPower]: 10,
      },
      forLevel: {
        2: {
          [Skill.Attack]: 70,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        3: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 70,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        4: {
          [Skill.Attack]: 70,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        5: {
          [Skill.Attack]: 40,
          [Skill.Defense]: 40,
          [Skill.Knowledge]: 10,
          [Skill.SpellPower]: 10,
        },
        6: {
          [Skill.Attack]: 70,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        7: {
          [Skill.Attack]: 20,
          [Skill.Defense]: 70,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        8: {
          [Skill.Attack]: 70,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
        9: {
          [Skill.Attack]: 70,
          [Skill.Defense]: 20,
          [Skill.Knowledge]: 5,
          [Skill.SpellPower]: 5,
        },
      },
    },
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
    skillGainProbabilities: {
      default: {
        [Skill.Attack]: 20,
        [Skill.Defense]: 20,
        [Skill.Knowledge]: 30,
        [Skill.SpellPower]: 30,
      },
      forLevel: {
        2: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 20,
          [Skill.SpellPower]: 70,
        },
        3: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 70,
          [Skill.SpellPower]: 20,
        },
        4: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 20,
          [Skill.SpellPower]: 70,
        },
        5: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 40,
          [Skill.SpellPower]: 40,
        },
        6: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 30,
          [Skill.SpellPower]: 50,
        },
        7: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 50,
          [Skill.SpellPower]: 30,
        },
        8: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 30,
          [Skill.SpellPower]: 50,
        },
        9: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 30,
          [Skill.SpellPower]: 50,
        },
      },
    },
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
    skillGainProbabilities: {
      default: {
        [Skill.Attack]: 20,
        [Skill.Defense]: 20,
        [Skill.Knowledge]: 30,
        [Skill.SpellPower]: 30,
      },
      forLevel: {
        2: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 70,
          [Skill.SpellPower]: 20,
        },
        3: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 20,
          [Skill.SpellPower]: 70,
        },
        4: {
          [Skill.Attack]: 5,
          [Skill.Defense]: 5,
          [Skill.Knowledge]: 70,
          [Skill.SpellPower]: 20,
        },
        5: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 40,
          [Skill.SpellPower]: 40,
        },
        6: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 50,
          [Skill.SpellPower]: 30,
        },
        7: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 30,
          [Skill.SpellPower]: 50,
        },
        8: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 50,
          [Skill.SpellPower]: 30,
        },
        9: {
          [Skill.Attack]: 10,
          [Skill.Defense]: 10,
          [Skill.Knowledge]: 50,
          [Skill.SpellPower]: 30,
        },
      },
    },
    skills: {
      [Skill.Attack]: 0,
      [Skill.Defense]: 0,
      [Skill.Knowledge]: 3,
      [Skill.SpellPower]: 2,
    },
  },
];

export const heroClassDataById = keyBy(heroClassData, (d) => d.id);
