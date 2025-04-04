export { type Army, armySize, type Troop } from './lib/army';
export { artifactById, ArtifactId } from './lib/artifact';
export { Campaign, type CampaignScenarioData, campaignScenarios } from './lib/campaign';
export {
  defaultOpponentSettings,
  formatDamageRange,
  formatSkillValue,
  gameDifficulties,
  GameDifficulty,
  getOpponentCount,
  heroClasses,
  heroClassHeroes,
  HeroClassId,
  HeroId,
  heroIds,
  Luck,
  Morale,
  MovementSpeed,
  movementSpeeds,
  nextOption,
  opponentDifficulties,
  OpponentDifficulty,
  type OpponentSettings,
  Player,
  PlayerColor,
  playerColors,
  playerColorToHeroClassMap,
  players,
  previousOption,
  Skill,
  skills,
  type SkillValues,
} from './lib/core';
export { CreatureId, CreatureSpeed } from './lib/creature';
export * from './lib/data';
export { getHeroLevel, getHeroSkillsForLevel, type Hero, heroLevelExperienceThresholds } from './lib/hero';
export {
  createMap,
  type Map,
  type MapHeroObjectInfo,
  MapHeroObjectType,
  type MapMineInfo,
  type MapObjectArmy,
  type MapObjectInfo,
  MapSize,
  type MapTile,
  type MapTownInfo,
  type MapTownObjectInfo,
  MapTownObjectType,
  RandomTownType,
} from './lib/map';
export { calculateRating, formatRating, type RatingData } from './lib/rating';
export { scenarioDifficulties, ScenarioDifficulty, ScenarioSize, scenarioSizes } from './lib/scenario';
export { type ScenarioData, scenarios } from './lib/scenarios';
export { ScreenHeight, ScreenWidth } from './lib/screen';
export { isSoundEnabled, MaxVolume, MinVolume, type SoundVolume, soundVolumes } from './lib/sound';
export { type Town, TownType, townTypes } from './lib/town';
