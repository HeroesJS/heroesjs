import { OpponentDifficulty } from './core';
import { ScenarioDifficulty, ScenarioSize } from './scenario';

const baseRating = -10;

const scenarioSizeRating: Record<ScenarioSize, number> = {
  [ScenarioSize.Large]: 20,
  [ScenarioSize.Medium]: 10,
  [ScenarioSize.Small]: 0,
};

const scenarioDifficultyRating: Record<ScenarioDifficulty, number> = {
  [ScenarioDifficulty.Easy]: 0,
  [ScenarioDifficulty.Normal]: 10,
  [ScenarioDifficulty.Tough]: 20,
  [ScenarioDifficulty.Impossible]: 30,
};

const opponentDifficultyRating: Record<OpponentDifficulty, number> = {
  [OpponentDifficulty.Average]: 20,
  [OpponentDifficulty.Dumb]: 15,
  [OpponentDifficulty.Genius]: 30,
  [OpponentDifficulty.None]: 0,
  [OpponentDifficulty.Smart]: 25,
};

export interface RatingData {
  readonly kingOfTheHill: boolean;
  readonly opponentSettings: readonly OpponentDifficulty[];
  readonly scenarioDifficulty: ScenarioDifficulty;
  readonly scenarioSize: ScenarioSize;
}

export const calculateRating = ({
  kingOfTheHill,
  opponentSettings,
  scenarioDifficulty,
  scenarioSize,
}: RatingData): number =>
  baseRating +
  scenarioSizeRating[scenarioSize] +
  scenarioDifficultyRating[scenarioDifficulty] +
  opponentSettings.reduce((p, c) => p + opponentDifficultyRating[c], 0) +
  (kingOfTheHill ? Math.max(opponentSettings.filter((d) => d !== OpponentDifficulty.None).length - 1, 0) * 5 : 0);

export const formatRating = (value: number): string => `${value}%`;
