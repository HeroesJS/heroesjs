import type { Player } from './core';

export enum TownType {
  Farm = 0,
  Forest = 1,
  Plains = 2,
  Mountains = 3,
}

export const townTypes = Object.values(TownType).filter((v) => typeof v === 'number');

export interface Town {
  readonly id: number;
  readonly owner: Player | undefined;
  readonly type: TownType;
}
