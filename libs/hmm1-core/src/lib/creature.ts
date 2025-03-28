import { keyBy } from 'lodash';

import { Skill } from './core';
import { TownType } from './town';

export enum CreatureId {
  Peasant = 0,
  Archer = 1,
  Pikeman = 2,
  Swordsman = 3,
  Cavalry = 4,
  Paladin = 5,
  Goblin = 6,
  Orc = 7,
  Wolf = 8,
  Ogre = 9,
  Troll = 10,
  Cyclops = 11,
  Sprite = 12,
  Dwarf = 13,
  Elf = 14,
  Druid = 15,
  Unicorn = 16,
  Phoenix = 17,
  Centaur = 18,
  Gargoyle = 19,
  Griffin = 20,
  Minotaur = 21,
  Hydra = 22,
  Dragon = 23,
  Rogue = 24,
  Nomad = 25,
  Ghost = 26,
  Genie = 27,
}

export enum CreatureSpeed {
  Fast = 'fast',
  Medium = 'medium',
  Slow = 'slow',
}

export interface CreatureData {
  readonly hitPoints: number;
  readonly id: CreatureId;
  readonly maxDamage: number;
  readonly minDamage: number;
  readonly origin: TownType | undefined;
  readonly shots: number;
  readonly skills: Readonly<Record<Skill.Attack | Skill.Defense, number>>;
  readonly speed: CreatureSpeed;
}

const peasant: CreatureData = {
  hitPoints: 1,
  id: CreatureId.Peasant,
  maxDamage: 1,
  minDamage: 1,
  origin: TownType.Farm,
  shots: 0,
  skills: {
    [Skill.Attack]: 1,
    [Skill.Defense]: 1,
  },
  speed: CreatureSpeed.Slow,
};

const archer: CreatureData = {
  hitPoints: 10,
  id: CreatureId.Archer,
  maxDamage: 3,
  minDamage: 2,
  origin: TownType.Farm,
  shots: 12,
  skills: {
    [Skill.Attack]: 5,
    [Skill.Defense]: 3,
  },
  speed: CreatureSpeed.Slow,
};

const pikeman: CreatureData = {
  hitPoints: 15,
  id: CreatureId.Pikeman,
  maxDamage: 4,
  minDamage: 3,
  origin: TownType.Farm,
  shots: 0,
  skills: {
    [Skill.Attack]: 5,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Medium,
};

const swordsman: CreatureData = {
  hitPoints: 25,
  id: CreatureId.Swordsman,
  maxDamage: 6,
  minDamage: 4,
  origin: TownType.Farm,
  shots: 0,
  skills: {
    [Skill.Attack]: 7,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Medium,
};

const cavalry: CreatureData = {
  hitPoints: 30,
  id: CreatureId.Cavalry,
  maxDamage: 10,
  minDamage: 5,
  origin: TownType.Farm,
  shots: 0,
  skills: {
    [Skill.Attack]: 10,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Fast,
};

const paladin: CreatureData = {
  hitPoints: 50,
  id: CreatureId.Paladin,
  maxDamage: 20,
  minDamage: 10,
  origin: TownType.Farm,
  shots: 0,
  skills: {
    [Skill.Attack]: 11,
    [Skill.Defense]: 12,
  },
  speed: CreatureSpeed.Fast,
};

const goblin: CreatureData = {
  hitPoints: 3,
  id: CreatureId.Goblin,
  maxDamage: 2,
  minDamage: 1,
  origin: TownType.Plains,
  shots: 0,
  skills: {
    [Skill.Attack]: 3,
    [Skill.Defense]: 1,
  },
  speed: CreatureSpeed.Medium,
};

const orc: CreatureData = {
  hitPoints: 10,
  id: CreatureId.Orc,
  maxDamage: 3,
  minDamage: 2,
  origin: TownType.Plains,
  shots: 8,
  skills: {
    [Skill.Attack]: 3,
    [Skill.Defense]: 4,
  },
  speed: CreatureSpeed.Slow,
};

const wolf: CreatureData = {
  hitPoints: 20,
  id: CreatureId.Wolf,
  maxDamage: 5,
  minDamage: 3,
  origin: TownType.Plains,
  shots: 0,
  skills: {
    [Skill.Attack]: 6,
    [Skill.Defense]: 2,
  },
  speed: CreatureSpeed.Fast,
};

const ogre: CreatureData = {
  hitPoints: 40,
  id: CreatureId.Ogre,
  maxDamage: 6,
  minDamage: 4,
  origin: TownType.Plains,
  shots: 0,
  skills: {
    [Skill.Attack]: 9,
    [Skill.Defense]: 5,
  },
  speed: CreatureSpeed.Slow,
};

const troll: CreatureData = {
  hitPoints: 40,
  id: CreatureId.Troll,
  maxDamage: 7,
  minDamage: 5,
  origin: TownType.Plains,
  shots: 8,
  skills: {
    [Skill.Attack]: 10,
    [Skill.Defense]: 5,
  },
  speed: CreatureSpeed.Medium,
};

const cyclops: CreatureData = {
  hitPoints: 80,
  id: CreatureId.Cyclops,
  maxDamage: 24,
  minDamage: 12,
  origin: TownType.Plains,
  shots: 0,
  skills: {
    [Skill.Attack]: 12,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Medium,
};

const sprite: CreatureData = {
  hitPoints: 2,
  id: CreatureId.Sprite,
  maxDamage: 2,
  minDamage: 1,
  origin: TownType.Forest,
  shots: 0,
  skills: {
    [Skill.Attack]: 4,
    [Skill.Defense]: 2,
  },
  speed: CreatureSpeed.Medium,
};

const dwarf: CreatureData = {
  hitPoints: 20,
  id: CreatureId.Dwarf,
  maxDamage: 4,
  minDamage: 2,
  origin: TownType.Forest,
  shots: 0,
  skills: {
    [Skill.Attack]: 6,
    [Skill.Defense]: 5,
  },
  speed: CreatureSpeed.Slow,
};

const elf: CreatureData = {
  hitPoints: 15,
  id: CreatureId.Elf,
  maxDamage: 3,
  minDamage: 2,
  origin: TownType.Forest,
  shots: 24,
  skills: {
    [Skill.Attack]: 4,
    [Skill.Defense]: 3,
  },
  speed: CreatureSpeed.Medium,
};

const druid: CreatureData = {
  hitPoints: 25,
  id: CreatureId.Druid,
  maxDamage: 8,
  minDamage: 5,
  origin: TownType.Forest,
  shots: 8,
  skills: {
    [Skill.Attack]: 7,
    [Skill.Defense]: 5,
  },
  speed: CreatureSpeed.Fast,
};

const unicorn: CreatureData = {
  hitPoints: 40,
  id: CreatureId.Unicorn,
  maxDamage: 14,
  minDamage: 7,
  origin: TownType.Forest,
  shots: 0,
  skills: {
    [Skill.Attack]: 10,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Medium,
};

const phoenix: CreatureData = {
  hitPoints: 100,
  id: CreatureId.Phoenix,
  maxDamage: 40,
  minDamage: 20,
  origin: TownType.Forest,
  shots: 0,
  skills: {
    [Skill.Attack]: 12,
    [Skill.Defense]: 10,
  },
  speed: CreatureSpeed.Fast,
};

const centaur: CreatureData = {
  hitPoints: 5,
  id: CreatureId.Centaur,
  maxDamage: 2,
  minDamage: 1,
  origin: TownType.Mountains,
  shots: 8,
  skills: {
    [Skill.Attack]: 3,
    [Skill.Defense]: 1,
  },
  speed: CreatureSpeed.Medium,
};

const gargoyle: CreatureData = {
  hitPoints: 15,
  id: CreatureId.Gargoyle,
  maxDamage: 3,
  minDamage: 2,
  origin: TownType.Mountains,
  shots: 0,
  skills: {
    [Skill.Attack]: 4,
    [Skill.Defense]: 7,
  },
  speed: CreatureSpeed.Fast,
};

const griffin: CreatureData = {
  hitPoints: 25,
  id: CreatureId.Griffin,
  maxDamage: 5,
  minDamage: 3,
  origin: TownType.Mountains,
  shots: 0,
  skills: {
    [Skill.Attack]: 6,
    [Skill.Defense]: 6,
  },
  speed: CreatureSpeed.Medium,
};

const minotaur: CreatureData = {
  hitPoints: 35,
  id: CreatureId.Minotaur,
  maxDamage: 10,
  minDamage: 5,
  origin: TownType.Mountains,
  shots: 0,
  skills: {
    [Skill.Attack]: 9,
    [Skill.Defense]: 8,
  },
  speed: CreatureSpeed.Medium,
};

const hydra: CreatureData = {
  hitPoints: 75,
  id: CreatureId.Hydra,
  maxDamage: 12,
  minDamage: 6,
  origin: TownType.Mountains,
  shots: 0,
  skills: {
    [Skill.Attack]: 8,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Slow,
};

const dragon: CreatureData = {
  hitPoints: 200,
  id: CreatureId.Dragon,
  maxDamage: 50,
  minDamage: 24,
  origin: TownType.Mountains,
  shots: 0,
  skills: {
    [Skill.Attack]: 12,
    [Skill.Defense]: 12,
  },
  speed: CreatureSpeed.Medium,
};

const rogue: CreatureData = {
  hitPoints: 4,
  id: CreatureId.Rogue,
  maxDamage: 2,
  minDamage: 1,
  origin: undefined,
  shots: 0,
  skills: {
    [Skill.Attack]: 6,
    [Skill.Defense]: 1,
  },
  speed: CreatureSpeed.Fast,
};

const nomad: CreatureData = {
  hitPoints: 20,
  id: CreatureId.Nomad,
  maxDamage: 5,
  minDamage: 2,
  origin: undefined,
  shots: 0,
  skills: {
    [Skill.Attack]: 7,
    [Skill.Defense]: 6,
  },
  speed: CreatureSpeed.Fast,
};

const ghost: CreatureData = {
  hitPoints: 20,
  id: CreatureId.Ghost,
  maxDamage: 6,
  minDamage: 4,
  origin: undefined,
  shots: 0,
  skills: {
    [Skill.Attack]: 8,
    [Skill.Defense]: 7,
  },
  speed: CreatureSpeed.Medium,
};

const genie: CreatureData = {
  hitPoints: 50,
  id: CreatureId.Genie,
  maxDamage: 30,
  minDamage: 20,
  origin: undefined,
  shots: 0,
  skills: {
    [Skill.Attack]: 10,
    [Skill.Defense]: 9,
  },
  speed: CreatureSpeed.Fast,
};

export const creatures: readonly CreatureData[] = [
  peasant,
  archer,
  pikeman,
  swordsman,
  cavalry,
  paladin,
  goblin,
  orc,
  wolf,
  ogre,
  troll,
  cyclops,
  sprite,
  dwarf,
  elf,
  druid,
  unicorn,
  phoenix,
  centaur,
  gargoyle,
  griffin,
  minotaur,
  hydra,
  dragon,
  rogue,
  nomad,
  ghost,
  genie,
];

export const creatureById = keyBy(creatures, (c) => c.id);
