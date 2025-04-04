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

export const MapTownObjectType = 0x46;

export interface MapTownObjectInfo {
  readonly buildings: number;
  readonly garrison: readonly MapObjectArmy[];
  readonly initFlag: number;
  readonly mageGuildLevel: number;
  readonly owner: Player | undefined;
  readonly type: typeof MapTownObjectType;
}

export const MapHeroObjectType = 0x4b;

export interface MapHeroObjectInfo {
  readonly army: readonly MapObjectArmy[];
  readonly experience: number;
  readonly id: HeroId;
  readonly owner: Player;
  readonly startArtifact: readonly number[];
  readonly type: typeof MapHeroObjectType;
}

export type MapObjectInfo = MapTownObjectInfo | MapHeroObjectInfo;

export interface Map {
  readonly height: typeof MapSize;
  readonly objectInfo: readonly MapObjectInfo[];
  readonly townInfo: readonly MapTownInfo[];
  readonly width: typeof MapSize;
}

export const createMap = (): Map => ({
  height: MapSize,
  objectInfo: [],
  townInfo: [],
  width: MapSize,
});
