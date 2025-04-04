import type { Player } from './core';

export enum TownClass {
  Farm = 0,
  Forest = 1,
  Plains = 2,
  Mountains = 3,
}

export const townClasses = Object.values(TownClass).filter((v) => typeof v === 'number');

export interface Town {
  readonly class: TownClass;
  readonly id: number;
  readonly owner: Player | undefined;
}
