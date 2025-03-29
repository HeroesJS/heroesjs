export enum TownType {
  Farm = 'farm',
  Forest = 'forest',
  Mountains = 'mountains',
  Plains = 'plains',
}

export const townTypes = Object.values(TownType).filter((v) => typeof v === 'number');

export interface Town {
  readonly id: number;
  readonly type: TownType;
}
