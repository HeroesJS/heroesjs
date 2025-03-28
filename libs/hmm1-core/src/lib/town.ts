export enum TownType {
  Farm = 'farm',
  Forest = 'forest',
  Mountains = 'mountains',
  Plains = 'plains',
}

export interface Town {
  readonly id: number;
  readonly type: TownType;
}
