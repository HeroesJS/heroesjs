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

export enum ComputerOpponentSetting {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  None = 'none',
  Smart = 'smart',
}

export const computerOpponentSettings: readonly ComputerOpponentSetting[] = [
  ComputerOpponentSetting.None,
  ComputerOpponentSetting.Dumb,
  ComputerOpponentSetting.Average,
  ComputerOpponentSetting.Smart,
  ComputerOpponentSetting.Genius,
];

export const computerOpponentSettingLabel: Readonly<Record<ComputerOpponentSetting, string>> = {
  [ComputerOpponentSetting.Average]: 'Average',
  [ComputerOpponentSetting.Dumb]: 'Dumb',
  [ComputerOpponentSetting.Genius]: 'Genius',
  [ComputerOpponentSetting.None]: 'None',
  [ComputerOpponentSetting.Smart]: 'Smart',
};

const defaultComputerOpponentSetting: ComputerOpponentSetting = ComputerOpponentSetting.Average;

export type HumanOpponentSetting = GameDifficulty;

const defaultHumanOpponentSetting: HumanOpponentSetting = defaultGameDifficulty;

export type OpponentSetting = ComputerOpponentSetting | HumanOpponentSetting;

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
