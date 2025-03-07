import type { Army } from './army';
import type { HeroClassId, HeroId, Luck, Morale, PlayerColor, SkillValues } from './core';

export interface Hero {
  readonly army: Army;
  readonly experience: number;
  readonly heroClass: HeroClassId;
  readonly id: HeroId;
  readonly level: number;
  readonly luck: Luck;
  readonly mobility: number;
  readonly morale: Morale;
  readonly player: PlayerColor;
  readonly skills: SkillValues;
}
