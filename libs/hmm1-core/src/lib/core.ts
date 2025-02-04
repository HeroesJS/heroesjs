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

export enum MovementSpeed {
  Canter = 'canter',
  Gallop = 'gallop',
  Jump = 'jump',
  Trot = 'trot',
  Walk = 'walk',
}

export enum SoundVolume {
  Off = 0,
  Volume1 = 1,
  Volume2 = 2,
  Volume3 = 3,
  Volume4 = 4,
  Volume5 = 5,
  Volume6 = 6,
  Volume7 = 7,
  Volume8 = 8,
  Volume9 = 9,
  On = 10,
}

export const isSoundEnabled = (value: SoundVolume) => value !== SoundVolume.Off;
