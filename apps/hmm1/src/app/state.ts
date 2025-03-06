import { CreatureId, type Hero, HeroClassId, HeroId, PlayerColor, Skill } from '@heroesjs/hmm1-core';

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
    heroClass: HeroClassId.Warlock,
    id: HeroId.Falagar,
    mobility: 14,
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
    heroClass: HeroClassId.Knight,
    id: HeroId.Ambrose,
    mobility: 0,
    player: PlayerColor.Red,
    skills: {
      [Skill.Attack]: 2,
      [Skill.Defense]: 3,
      [Skill.Knowledge]: 0,
      [Skill.SpellPower]: 0,
    },
  },
];
