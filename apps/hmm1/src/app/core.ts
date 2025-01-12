export const ScreenWidth = 640;
export const ScreenHeight = 480;

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

export enum ScenarioSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const scenarioSizes: readonly ScenarioSize[] = [ScenarioSize.Small, ScenarioSize.Medium, ScenarioSize.Large];

export enum ScenarioDifficulty {
  Easy = 'easy',
  Hard = 'hard',
  Normal = 'normal',
  Tough = 'tough',
}

export const scenarioDifficulties: readonly ScenarioDifficulty[] = [
  ScenarioDifficulty.Easy,
  ScenarioDifficulty.Normal,
  ScenarioDifficulty.Hard,
  ScenarioDifficulty.Tough,
];

export const scenarios = [
  'Claw ( Easy )',
  'Around the Bay',
  'Badlands',
  'Close Quarters',
  'Crossroads',
  'Desert Isle',
  'Dragon Pass',
  'Four Nations',
  "Hermit's Isle",
  'Jolly Roger',
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
