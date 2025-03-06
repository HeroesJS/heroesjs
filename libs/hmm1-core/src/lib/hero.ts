import type { Army } from './army';
import type { HeroClassId, HeroId, PlayerColor, SkillValues } from './core';

export interface Hero {
  readonly army: Army;
  readonly heroClass: HeroClassId;
  readonly id: HeroId;
  readonly mobility: number;
  readonly player: PlayerColor;
  readonly skills: SkillValues;
}
