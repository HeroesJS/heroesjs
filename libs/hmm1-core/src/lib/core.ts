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

export enum ComputerOpponentSetting {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  Smart = 'smart',
}

export const computerOpponentSettings: readonly (ComputerOpponentSetting | typeof noOpponent)[] = [
  noOpponent,
  ComputerOpponentSetting.Dumb,
  ComputerOpponentSetting.Average,
  ComputerOpponentSetting.Smart,
  ComputerOpponentSetting.Genius,
];

export const computerOpponentSettingLabel: Readonly<Record<ComputerOpponentSetting, string>> = {
  [ComputerOpponentSetting.Average]: 'Average',
  [ComputerOpponentSetting.Dumb]: 'Dumb',
  [ComputerOpponentSetting.Genius]: 'Genius',
  [ComputerOpponentSetting.Smart]: 'Smart',
};

const defaultComputerOpponentSetting: ComputerOpponentSetting = ComputerOpponentSetting.Average;

export type HumanOpponentSetting = GameDifficulty;

const defaultHumanOpponentSetting: HumanOpponentSetting = defaultGameDifficulty;

export type OpponentSetting = ComputerOpponentSetting | HumanOpponentSetting | typeof noOpponent;

export function isComputerOpponentSetting(value: OpponentSetting): value is ComputerOpponentSetting {
  return Object.values(ComputerOpponentSetting).includes(value as ComputerOpponentSetting);
}

export function isHumanOpponentSetting(value: OpponentSetting): value is HumanOpponentSetting {
  return Object.values(GameDifficulty).includes(value as GameDifficulty);
}

export type OpponentSettings = readonly OpponentSetting[];

export function getDefaultOpponentSettings(humanOpponentCount: number): OpponentSettings {
  if (humanOpponentCount < 0 || humanOpponentCount >= MaxPlayerCount) {
    throw new Error(`Human opponent count must be between 0 and ${MaxPlayerCount - 1}`);
  }

  return [
    ...new Array<HumanOpponentSetting>(humanOpponentCount).fill(defaultHumanOpponentSetting),
    ...new Array<ComputerOpponentSetting>(MaxPlayerCount - humanOpponentCount - 1).fill(defaultComputerOpponentSetting),
  ];
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
