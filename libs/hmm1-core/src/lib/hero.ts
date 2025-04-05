import { isEqual, last, range, sortBy } from 'lodash';
import assert from 'node:assert';

import type { Army } from './army';
import type { ArtifactId } from './artifact';
import type { HeroClassId, HeroId, Luck, Morale, PlayerId, Skill, SkillValues } from './core';
import { heroClassDataById } from './data';

export interface Hero {
  readonly army: Army;
  readonly artifacts: readonly ArtifactId[];
  readonly experience: number;
  readonly heroClass: HeroClassId;
  readonly id: HeroId;
  readonly level: number;
  readonly luck: Luck;
  readonly mobility: number;
  readonly morale: Morale;
  readonly owner: PlayerId;
  readonly skills: SkillValues;
}

export const heroLevelExperienceThresholds = [
  0, // 1
  1_000,
  2_000,
  3_200,
  4_500,
  6_000,
  7_700,
  9_000,
  11_000,
  13_200, // 10
  15_500,
  18_500,
  22_101,
  26_421,
  31_605,
  37_825,
  45_289,
  54_245,
  64_992,
  77_888, // 20
  93_363,
  111_933,
  134_217,
  160_957,
  193_045,
  231_550,
  277_756,
  333_203,
  399_739,
  479_582, // 30
  575_393,
  690_366,
  828_333,
  993_893,
  1_192_565,
  1_430_971,
  1_717_058,
  2_060_362,
  2_472_326,
  2_966_682, // 40
  3_559_909,
  4_271_781,
  5_126_027,
  6_151_122,
  7_381_236,
  8_857_372,
  10_628_735,
  12_754_370,
  15_305_132,
  18_366_046, // 50
  22_039_142,
  26_446_857,
  31_736_115,
  38_083_224,
  45_699_754,
  54_839_590,
  65_807_396,
  78_968_756,
  94_762_391,
  113_714_753, // 60
  136_457_587,
  163_748_987,
  196_498_667,
  235_798_283,
  282_957_822,
  339_549_268,
  407_459_003,
  488_950_685,
  586_740_703,
  704_088_724, // 70
  844_906_349,
  1_013_887_499,
  1_216_664_879,
  1_459_997_735,
  1_751_997_162, // 75
  // NOTE: levels above 75 are bugged
];

export const getHeroLevel = (experience: number, thresholds: readonly number[]) => {
  assert(experience >= 0, 'Experience must be non-negative');
  assert(thresholds.length, 'Thresholds are required');
  assert(isEqual(thresholds, sortBy(thresholds)), 'Thresholds must be sorted ascending');

  const crossedThresholds = thresholds.filter((threshold) => threshold <= experience);

  return crossedThresholds.length + 1;
};

export const getHeroSkillsForLevel = (level: number, heroClass: HeroClassId) => {
  assert(level >= 1, 'Level must be greater or equal to 1');

  const data = heroClassDataById[heroClass];

  const initialSkills = data.skills;

  return range(2, level + 1).reduce((skills, lvl) => {
    const probabilities = data.skillGainProbabilities.forLevel[lvl] ?? data.skillGainProbabilities.default;

    const weightedProbabilities = Object.values(probabilities).reduce<readonly number[]>(
      (p, c) => p.concat(c + (last(p) ?? 0)),
      [],
    );

    const total = last(weightedProbabilities)!;

    const value = Math.floor(Math.random() * total);

    const index = weightedProbabilities.findIndex((prob) => prob >= value);

    const skill = Object.keys(probabilities)[index] as Skill;

    return {
      ...skills,
      [skill]: skills[skill] + 1,
    };
  }, initialSkills);
};
