export enum GameType {
  Campaign = 'campaign',
  MultiPlayer = 'multi-player',
  Standard = 'standard',
}

export const MaxPlayerCount = 4;

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

export const defaultPlayerColor = PlayerColor.Blue;

export const playerColorLabel: Readonly<Record<PlayerColor, string>> = {
  [PlayerColor.Blue]: 'Blue',
  [PlayerColor.Green]: 'Green',
  [PlayerColor.Red]: 'Red',
  [PlayerColor.Yellow]: 'Yellow',
};

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

export const gameDifficultyLabel: Readonly<Record<GameDifficulty, string>> = {
  [GameDifficulty.Easy]: 'Easy',
  [GameDifficulty.Expert]: 'Expert',
  [GameDifficulty.Hard]: 'Hard',
  [GameDifficulty.Normal]: 'Normal',
};

export const defaultGameDifficulty = GameDifficulty.Normal;

export const noOpponent = undefined;

export enum OpponentDifficulty {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  Smart = 'smart',
}

export const opponentDifficulties: readonly OpponentDifficulty[] = [
  OpponentDifficulty.Dumb,
  OpponentDifficulty.Average,
  OpponentDifficulty.Smart,
  OpponentDifficulty.Genius,
];

export const computerOpponentSettings: readonly (OpponentDifficulty | typeof noOpponent)[] = [
  noOpponent,
  ...opponentDifficulties,
];

export const humanOpponentSettings = opponentDifficulties;

export const computerOpponentSettingLabel: Readonly<Record<OpponentDifficulty, string>> = {
  [OpponentDifficulty.Average]: 'Average',
  [OpponentDifficulty.Dumb]: 'Dumb',
  [OpponentDifficulty.Genius]: 'Genius',
  [OpponentDifficulty.Smart]: 'Smart',
};

export type OpponentSetting = OpponentDifficulty | typeof noOpponent;

export const defaultOpponentSetting: OpponentSetting = OpponentDifficulty.Average;

export type OpponentSettings = readonly OpponentSetting[];

export const isHumanOpponent = (opponentIndex: number, humanOpponentsCount: number): boolean =>
  opponentIndex < humanOpponentsCount;

const opponentGameDifficulty: Readonly<Record<OpponentDifficulty, GameDifficulty>> = {
  [OpponentDifficulty.Average]: GameDifficulty.Normal,
  [OpponentDifficulty.Dumb]: GameDifficulty.Easy,
  [OpponentDifficulty.Genius]: GameDifficulty.Expert,
  [OpponentDifficulty.Smart]: GameDifficulty.Hard,
};

export const getOpponentGameDifficulty = (value: OpponentDifficulty): GameDifficulty => opponentGameDifficulty[value];

export function getDefaultOpponentSettings(): OpponentSettings {
  return new Array<OpponentSetting>(MaxPlayerCount - 1).fill(defaultOpponentSetting);
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

export const soundVolumes: readonly SoundVolume[] = [
  SoundVolume.Off,
  SoundVolume.Volume1,
  SoundVolume.Volume2,
  SoundVolume.Volume3,
  SoundVolume.Volume4,
  SoundVolume.Volume5,
  SoundVolume.Volume6,
  SoundVolume.Volume7,
  SoundVolume.Volume8,
  SoundVolume.Volume9,
  SoundVolume.On,
];

export enum MovementSpeed {
  Canter = 'canter',
  Gallop = 'gallop',
  Jump = 'jump',
  Trot = 'trot',
  Walk = 'walk',
}

export const movementSpeeds: readonly MovementSpeed[] = [
  MovementSpeed.Walk,
  MovementSpeed.Trot,
  MovementSpeed.Canter,
  MovementSpeed.Gallop,
  MovementSpeed.Jump,
];

export const movementSpeedLabel: Readonly<Record<MovementSpeed, string>> = {
  [MovementSpeed.Canter]: 'Canter',
  [MovementSpeed.Gallop]: 'Gallop',
  [MovementSpeed.Jump]: 'Jump',
  [MovementSpeed.Trot]: 'Trot',
  [MovementSpeed.Walk]: 'Walk',
};
