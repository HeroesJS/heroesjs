import type { PlayerId } from './core';

export enum TownClassId {
  Farm = 0,
  Forest = 1,
  Plains = 2,
  Mountains = 3,
}

export const townClasses = Object.values(TownClassId).filter((v) => typeof v === 'number');

export interface Town {
  readonly class: TownClassId;
  readonly id: number;
  readonly owner: PlayerId | undefined;
}
