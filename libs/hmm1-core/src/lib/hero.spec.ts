import { sum } from 'lodash';

import { HeroClassId, Skill, type SkillValues } from './core';
import { getHeroLevel, getHeroSkillsForLevel } from './hero';

describe(getHeroLevel, () => {
  it('returns 1 when experience is negative', () => {
    expect(getHeroLevel(-1)).toBe(1);
  });

  it('returns 1 when experience is 0', () => {
    expect(getHeroLevel(0)).toBe(1);
  });

  it('returns proper level for experience', () => {
    expect(getHeroLevel(1_500)).toBe(2);
  });

  it('returns proper level when experience is equal to threshold', () => {
    expect(getHeroLevel(3_200)).toBe(4);
  });
});

describe(getHeroSkillsForLevel, () => {
  it('returns initial values for level 1', () => {
    expect(getHeroSkillsForLevel(HeroClassId.Knight, 1)).toEqual<SkillValues>({
      [Skill.Attack]: 1,
      [Skill.Defense]: 2,
      [Skill.Knowledge]: 1,
      [Skill.SpellPower]: 1,
    });
  });

  it('adds one point per level', () => {
    const result = getHeroSkillsForLevel(HeroClassId.Knight, 2);

    expect(sum(Object.values(result))).toBe(6);
  });
});
