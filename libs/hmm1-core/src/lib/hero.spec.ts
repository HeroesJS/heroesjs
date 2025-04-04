import { sum } from 'lodash';

import { HeroClassId, Skill, skills, type SkillValues } from './core';
import { getHeroLevel, getHeroSkillsForLevel } from './hero';

describe(getHeroLevel, () => {
  it('returns 1 when no experience', () => {
    expect(getHeroLevel(0, [1])).toBe(1);
  });

  it('returns level when equal to threshold', () => {
    expect(getHeroLevel(1, [1])).toBe(2);
  });

  it('returns level when above threshold', () => {
    expect(getHeroLevel(2, [1])).toBe(2);
  });

  it('throws when experience is negative', () => {
    expect(() => getHeroLevel(-1, [1])).toThrow();
  });

  it('throws when no thresholds', () => {
    expect(() => getHeroLevel(1, [])).toThrow();
  });

  it('throws when thresholds are not sorted', () => {
    expect(() => getHeroLevel(0, [2, 1])).toThrow();
  });
});

describe(getHeroSkillsForLevel, () => {
  it('returns initial values for level 1', () => {
    expect(getHeroSkillsForLevel(1, HeroClassId.Knight)).toEqual<SkillValues>({
      [Skill.Attack]: 1,
      [Skill.Defense]: 2,
      [Skill.Knowledge]: 1,
      [Skill.SpellPower]: 1,
    });
  });

  it('adds one point per level', () => {
    const result = getHeroSkillsForLevel(2, HeroClassId.Knight);

    expect(sum(Object.values(result))).toBe(6);
  });

  it('throws when level is lower than 1', () => {
    expect(() => getHeroSkillsForLevel(0, HeroClassId.Knight)).toThrow();
  });
});
