export enum ScenarioSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export const scenarioSizes: readonly ScenarioSize[] = [ScenarioSize.Small, ScenarioSize.Medium, ScenarioSize.Large];

export enum ScenarioDifficulty {
  Easy = 'easy',
  Impossible = 'impossible',
  Normal = 'normal',
  Tough = 'tough',
}

export const scenarioDifficulties: readonly ScenarioDifficulty[] = [
  ScenarioDifficulty.Easy,
  ScenarioDifficulty.Normal,
  ScenarioDifficulty.Tough,
  ScenarioDifficulty.Impossible,
];
