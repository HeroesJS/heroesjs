export enum GameType {
  Campaign = 'campaign',
  MultiPlayer = 'multi-player',
  Standard = 'standard',
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

export const gameDifficultyLabels: Record<GameDifficulty, string> = {
  [GameDifficulty.Easy]: 'Easy',
  [GameDifficulty.Expert]: 'Expert',
  [GameDifficulty.Hard]: 'Hard',
  [GameDifficulty.Normal]: 'Normal',
};

export enum OpponentSetting {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  Human = 'human',
  None = 'none',
  Smart = 'smart',
}
