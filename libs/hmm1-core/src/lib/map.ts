import type { HeroId, Player } from './core';
import type { TownType } from './town';

export const MapSize = 72;

export interface MapTile {
  readonly flags: number;
  readonly flagsExtra: number;
  readonly info: number;
  readonly objectId: number;
  readonly terrainType: number;
}

export const RandomTownType = 4;

export interface MapTownInfo {
  readonly type: TownType | typeof RandomTownType;
  readonly x: number;
  readonly y: number;
}

export interface MapMineInfo {
  readonly type: number;
  readonly x: number;
  readonly y: number;
}

export interface MapObjectArmy {
  readonly count: number;
  readonly creatureId: number;
}

export interface MapTownObjectInfo {
  readonly buildings: number;
  readonly garrison: readonly MapObjectArmy[];
  readonly initFlag: number;
  readonly mageGuildLevel: number;
  readonly owner: Player | undefined;
  readonly type: 0x46;
}

export interface MapHeroObjectInfo {
  readonly army: readonly MapObjectArmy[];
  readonly experience: number;
  readonly id: HeroId;
  readonly owner: Player;
  readonly startArtifact: readonly number[];
  readonly type: 0x4b;
}

export type MapObjectInfo = MapTownObjectInfo | MapHeroObjectInfo;

export interface Map {
  // readonly difficulty: GameDifficulty;
  // readonly height: typeof MapSize;
  // readonly mineInfo: readonly MapMineInfo[];
  // readonly obeliskCount: number;
  readonly objectInfo: readonly MapObjectInfo[];
  // readonly size: ScenarioSize;
  // readonly tiles: readonly MapTile[][];
  readonly townInfo: readonly MapTownInfo[];
  // readonly width: typeof MapSize;
}

export const createMap = (): Map => ({
  objectInfo: [],
  townInfo: [],
});
