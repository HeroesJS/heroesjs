import { sum } from 'lodash';

import {
  ComputerOpponentSetting,
  GameDifficulty,
  OpponentSettings,
  isComputerOpponentSetting,
  isHumanOpponentSetting,
  noOpponent,
} from './core.js';
import { MapDifficulty, MapSize } from './map.js';

const gameDifficultyRating: Readonly<Record<GameDifficulty, number>> = {
  [GameDifficulty.Easy]: 0,
  [GameDifficulty.Expert]: 30,
  [GameDifficulty.Hard]: 20,
  [GameDifficulty.Normal]: 10,
};

const mapSizeRating: Readonly<Record<MapSize, number>> = {
  [MapSize.Large]: 20,
  [MapSize.Medium]: 10,
  [MapSize.Small]: 0,
};

const mapDifficultyRating: Readonly<Record<MapDifficulty, number>> = {
  [MapDifficulty.Easy]: 20,
  [MapDifficulty.Impossible]: 50,
  [MapDifficulty.Normal]: 30,
  [MapDifficulty.Tough]: 40,
};

const computerOpponentSettingRating: Readonly<Record<ComputerOpponentSetting, number>> = {
  [ComputerOpponentSetting.Average]: 10,
  [ComputerOpponentSetting.Dumb]: 5,
  [ComputerOpponentSetting.Genius]: 20,
  [ComputerOpponentSetting.Smart]: 15,
};

export interface DifficultyRatingSettings {
  readonly gameDifficulty: GameDifficulty;
  readonly kingOfTheHill: boolean;
  readonly mapDifficulty: MapDifficulty;
  readonly mapSize: MapSize;
  readonly opponentSettings: OpponentSettings;
}

const noOpponentRating = -10;
const kingOfTheHillOpponentRating = 5;

export function getDifficultyRating({
  gameDifficulty,
  kingOfTheHill,
  mapDifficulty,
  mapSize,
  opponentSettings,
}: DifficultyRatingSettings) {
  return (
    mapSizeRating[mapSize] +
    mapDifficultyRating[mapDifficulty] +
    gameDifficultyRating[gameDifficulty] +
    sum(
      opponentSettings.map((setting) =>
        setting !== noOpponent
          ? isHumanOpponentSetting(setting)
            ? gameDifficultyRating[setting]
            : computerOpponentSettingRating[setting]
          : noOpponentRating
      )
    ) +
    (kingOfTheHill
      ? Math.max(opponentSettings.filter((setting) => setting && isComputerOpponentSetting(setting)).length - 1, 0) *
        kingOfTheHillOpponentRating
      : 0)
  );
}
