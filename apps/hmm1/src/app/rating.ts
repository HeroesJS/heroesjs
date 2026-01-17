import { sum } from 'lodash';

import {
  ComputerOpponentSetting,
  GameDifficulty,
  OpponentSettings,
  isComputerOpponentSetting,
  isHumanOpponentSetting,
} from './core';
import { MapDifficulty, MapSize } from './map';

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
  [ComputerOpponentSetting.None]: -10,
  [ComputerOpponentSetting.Smart]: 15,
};

export interface DifficultyRatingSettings {
  readonly gameDifficulty: GameDifficulty;
  readonly kingOfTheHill: boolean;
  readonly mapDifficulty: MapDifficulty;
  readonly mapSize: MapSize;
  readonly opponentSettings: OpponentSettings;
}

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
        isHumanOpponentSetting(setting) ? gameDifficultyRating[setting] : computerOpponentSettingRating[setting]
      )
    ) +
    (kingOfTheHill
      ? Math.max(
          opponentSettings.filter(
            (setting) => isComputerOpponentSetting(setting) && setting !== ComputerOpponentSetting.None
          ).length - 1,
          0
        ) * 5
      : 0)
  );
}
