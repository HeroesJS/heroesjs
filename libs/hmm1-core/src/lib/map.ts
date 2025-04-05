import type { HeroId, PlayerId } from './core';
import type { ScenarioDifficulty, ScenarioSize } from './scenario';
import type { TownClass } from './town';

export const MapSize = 72;

export interface MapTile {
  readonly flags: number;
  readonly flagsExtra: number;
  readonly info: number;
  readonly objectId: number;
  readonly terrainType: number;
}

export const RandomTownClass = 4;

export interface MapTownInfo {
  readonly class: TownClass | typeof RandomTownClass;
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
  readonly owner: PlayerId | undefined;
  readonly type: typeof MapTownObjectType;
}

export const MapHeroObjectType = 0x4b;

export interface MapHeroObjectInfo {
  readonly army: readonly MapObjectArmy[];
  readonly experience: number;
  readonly id: HeroId;
  readonly owner: PlayerId;
  readonly startArtifact: readonly number[];
  readonly type: typeof MapHeroObjectType;
}

export type MapObjectInfo = MapTownObjectInfo | MapHeroObjectInfo;

export interface Map {
  readonly description: string;
  readonly difficulty: ScenarioDifficulty;
  readonly editorVersion: number;
  readonly height: typeof MapSize;
  readonly name: string;
  readonly objectInfo: readonly MapObjectInfo[];
  readonly size: ScenarioSize;
  readonly townInfo: readonly MapTownInfo[];
  readonly width: typeof MapSize;
}

export const createMap = (data: Omit<Map, 'editorVersion' | 'height' | 'width'>): Map => ({
  editorVersion: 0,
  height: MapSize,
  width: MapSize,
  ...data,
});
