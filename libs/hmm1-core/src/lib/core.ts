export enum PlayerColor {
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
}

export const playerColors: readonly PlayerColor[] = [
  PlayerColor.Blue,
  PlayerColor.Green,
  PlayerColor.Red,
  PlayerColor.Yellow,
];

export enum Town {
  Farm = 'farm',
  Forest = 'forest',
  Mountains = 'mountains',
  Plains = 'plains',
}

export enum HeroId {
  LordKilburn = 0,
  LordHaart = 1,
  SirGallant = 2,
  Arturius = 3,
  Tyro = 4,
  Maximus = 5,
  Ector = 6,
  Dimitri = 7,
  Ambrose = 8,
  Thundax = 9,
  Ergon = 10,
  Kelzen = 11,
  Tsabu = 12,
  CragHack = 13,
  JoJosh = 14,
  Atlas = 15,
  Yog = 16,
  Antoine = 17,
  Ariel = 18,
  Vatawna = 19,
  Carlawn = 20,
  Rebecca = 21,
  Luna = 22,
  Astra = 23,
  Natasha = 24,
  Gem = 25,
  Troyan = 26,
  Agar = 27,
  Crodo = 28,
  Falagar = 29,
  Barok = 30,
  Arie = 31,
  Kastore = 32,
  Sandro = 33,
  Wrathmont = 34,
  Vesper = 35,
}

export enum GameDifficulty {
  Easy = 'easy',
  Expert = 'expert',
  Hard = 'hard',
  Normal = 'normal',
}

export const gameDifficulties: readonly GameDifficulty[] = [
  GameDifficulty.Easy,
  GameDifficulty.Normal,
  GameDifficulty.Hard,
  GameDifficulty.Expert,
];

export enum OpponentDifficulty {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  None = 'none',
  Smart = 'smart',
}

export const opponentDifficulties: readonly OpponentDifficulty[] = [
  OpponentDifficulty.None,
  OpponentDifficulty.Dumb,
  OpponentDifficulty.Average,
  OpponentDifficulty.Smart,
  OpponentDifficulty.Genius,
];

export type OpponentSettings = readonly OpponentDifficulty[];

export const getOpponentCount = (settings: OpponentSettings) =>
  settings.filter((s) => s !== OpponentDifficulty.None).length;

export const defaultOpponentSettings: OpponentSettings = [
  OpponentDifficulty.Average,
  OpponentDifficulty.Average,
  OpponentDifficulty.Average,
];

export enum MovementSpeed {
  Canter = 'canter',
  Gallop = 'gallop',
  Jump = 'jump',
  Trot = 'trot',
  Walk = 'walk',
}

export const movementSpeeds = [
  MovementSpeed.Walk,
  MovementSpeed.Trot,
  MovementSpeed.Canter,
  MovementSpeed.Gallop,
  MovementSpeed.Jump,
] as const;

export const nextOption = <T>(values: readonly T[], currentValue: T): T =>
  values[(values.indexOf(currentValue) + 1) % values.length] ?? currentValue;

export const previousOption = <T>(values: readonly T[], currentValue: T): T =>
  values[(values.length + values.indexOf(currentValue) - 1) % values.length] ?? currentValue;

export enum Skill {
  Attack = 'attack',
  Defense = 'defense',
  Knowledge = 'knowledge',
  SpellPower = 'spellPower',
}

export const skills: readonly Skill[] = [Skill.Attack, Skill.Defense, Skill.SpellPower, Skill.Knowledge];

export type SkillValues = Readonly<Record<Skill, number>>;

export const formatSkillValue = (values: Partial<SkillValues>, skill: Skill, bonuses: Partial<SkillValues>) => {
  const value = values[skill] ?? 0;
  const bonus = bonuses[skill] ?? 0;

  return `${value}${bonus ? ` (${value + bonus})` : ''}`;
};

export enum HeroClassId {
  Knight = 0,
  Barbarian = 1,
  Sorceress = 2,
  Warlock = 3,
}

export const heroClasses: readonly HeroClassId[] = [
  HeroClassId.Knight,
  HeroClassId.Barbarian,
  HeroClassId.Sorceress,
  HeroClassId.Warlock,
];

export enum Morale {
  Treason = -3,
  Awful = -2,
  Poor = -1,
  Normal = 0,
  Good = 1,
  Great = 2,
  Blood = 3,
}

export enum Luck {
  Cursed = -3,
  Terrible = -2,
  Bad = -1,
  Normal = 0,
  Good = 1,
  Great = 2,
  Irish = 3,
}

export const formatDamageRange = (minDamage: number, maxDamage: number) =>
  minDamage === maxDamage ? minDamage : `${minDamage}-${maxDamage}`;
