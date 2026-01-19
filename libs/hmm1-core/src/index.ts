export {
  ComputerOpponentSetting,
  computerOpponentSettingLabel,
  computerOpponentSettings,
  defaultGameDifficulty,
  defaultPlayerColor,
  gameDifficulties,
  GameDifficulty,
  gameDifficultyLabel,
  GameType,
  getDefaultOpponentSettings,
  isComputerOpponentSetting,
  isHumanOpponentSetting,
  MaxPlayerCount,
  PlayerColor,
  playerColorLabel,
  playerColors,
} from './lib/core.js';
export type { HumanOpponentSetting, OpponentSetting, OpponentSettings } from './lib/core.js';
export {
  defaultCampaignGameHighScores,
  defaultHighScores,
  defaultHighScoresGameType,
  defaultStandardGameHighScores,
} from './lib/highScores.js';
export type { CampaignGameScore, HighScores, HighScoresGameType, StandardGameScore } from './lib/highScores.js';
export { MapDifficulty, MapSize, mapDifficultyLabel, mapSizeLabel, mapSupportsHumanPlayers } from './lib/map.js';
export { getDifficultyRating } from './lib/rating.js';
export type { DifficultyRatingSettings } from './lib/rating.js';
export { scenarios } from './lib/scenario.js';
export type { Scenario } from './lib/scenario.js';
export { nextOption } from './lib/util.js';
