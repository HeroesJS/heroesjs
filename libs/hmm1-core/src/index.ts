export {
  computerOpponentSettings,
  defaultGameDifficulty,
  defaultOpponentSetting,
  defaultPlayerColor,
  gameDifficulties,
  GameDifficulty,
  GameType,
  getDefaultOpponentSettings,
  getOpponentGameDifficulty,
  humanOpponentSettings,
  isHumanOpponent,
  Leader,
  leaders,
  MaxPlayerCount,
  MovementSpeed,
  movementSpeeds,
  noOpponent,
  opponentDifficulties,
  OpponentDifficulty,
  PlayerColor,
  playerColors,
  SoundVolume,
  soundVolumes,
} from './lib/core.js';
export type { OpponentSetting, OpponentSettings } from './lib/core.js';
export {
  defaultCampaignGameHighScores,
  defaultHighScores,
  defaultHighScoresGameType,
  defaultStandardGameHighScores,
} from './lib/highScores.js';
export type { CampaignGameScore, HighScores, HighScoresGameType, StandardGameScore } from './lib/highScores.js';
export { MapDifficulty, MapSize, mapSupportsHumanPlayers } from './lib/map.js';
export { getDifficultyRating } from './lib/rating.js';
export type { DifficultyRatingSettings } from './lib/rating.js';
export { scenarios } from './lib/scenario.js';
export type { Scenario } from './lib/scenario.js';
export { nextOption } from './lib/util.js';
