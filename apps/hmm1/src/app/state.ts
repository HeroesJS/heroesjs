import { CreatureId, type Hero, HeroClassId, HeroId, Luck, Morale, PlayerColor, Skill } from '@heroesjs/hmm1-core';

export const heroes: readonly Hero[] = [
  {
    army: [
      {
        count: 7,
        creatureId: CreatureId.Centaur,
      },
      {
        count: 2,
        creatureId: CreatureId.Gargoyle,
      },
    ],
    experience: 65,
    heroClass: HeroClassId.Warlock,
    id: HeroId.Falagar,
    level: 1,
    luck: Luck.Neutral,
    mobility: 14,
    morale: Morale.Good,
    player: PlayerColor.Red,
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
        count: 13,
        creatureId: CreatureId.Peasant,
      },
    ],
    experience: 86,
    heroClass: HeroClassId.Knight,
    id: HeroId.Ambrose,
    level: 1,
    luck: Luck.Neutral,
    mobility: 0,
    morale: Morale.Good,
    player: PlayerColor.Red,
    skills: {
      [Skill.Attack]: 2,
      [Skill.Defense]: 3,
      [Skill.Knowledge]: 0,
      [Skill.SpellPower]: 0,
    },
  },
];
