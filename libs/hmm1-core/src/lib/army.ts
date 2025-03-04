import type { CreatureId } from './creature';

export interface Troop {
  readonly count: number;
  readonly creatureId: CreatureId;
}

export type Army = readonly Troop[];

export const armySize = 5;
