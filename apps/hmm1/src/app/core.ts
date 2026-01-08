export enum GameType {
  Campaign = 'campaign',
  MultiPlayer = 'multi-player',
  Standard = 'standard',
}

export const MaxPlayerCount = 4;

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

export enum OpponentSetting {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  Human = 'human',
  None = 'none',
  Smart = 'smart',
}

export const computerOpponentSettings: readonly OpponentSetting[] = [
  OpponentSetting.None,
  OpponentSetting.Dumb,
  OpponentSetting.Average,
  OpponentSetting.Smart,
  OpponentSetting.Genius,
];

const defaultComputerOpponentSetting = OpponentSetting.Average;
const defaultHumanOpponentSetting = OpponentSetting.Human;

export function getDefaultOpponentSettings(humanPlayerCount: number): readonly OpponentSetting[] {
  if (humanPlayerCount < 0 || humanPlayerCount >= MaxPlayerCount) {
    throw new Error(`Human player count must be between 0 and ${MaxPlayerCount - 1}`);
  }

  return new Array(humanPlayerCount)
    .fill(defaultHumanOpponentSetting)
    .concat(new Array(MaxPlayerCount - humanPlayerCount - 1).fill(defaultComputerOpponentSetting));
}

export const opponentSettingLabel: Readonly<Record<OpponentSetting, string>> = {
  [OpponentSetting.Average]: 'Average',
  [OpponentSetting.Dumb]: 'Dumb',
  [OpponentSetting.Genius]: 'Genius',
  [OpponentSetting.Human]: 'Human',
  [OpponentSetting.None]: 'None',
  [OpponentSetting.Smart]: 'Smart',
};
