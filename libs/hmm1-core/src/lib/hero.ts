import {isEqual, last, range, sortBy} from 'lodash';
import assert from 'node:assert';

import type {Army} from './army';
import type {ArtifactId} from './artifact';
import type {HeroClassId, HeroId, Luck, Morale, PlayerId, Skill, SkillValues} from './core';
import {heroClassDataById} from './data';

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
  1_000, // 2
  2_000, // 3
  3_200, // 4
  4_500, // 5
  6_000, // 6
  7_700, // 7
  9_000, // 8
  11_000, // 9
  13_200, // 10
  15_500, // 11
  18_500, // 12
  22_101, // 13
  26_421, // 14
  31_605, // 15
  37_825, // 16
  45_289, // 17
  54_245, // 18
  64_992, // 19
  77_888, // 20
  93_363, // 21
  111_933, // 22
  134_217, // 23
  160_957, // 24
  193_045, // 25
  231_550, // 26
  277_756, // 27
  333_203, // 28
  399_739, // 29
  479_582, // 30
  575_393, // 31
  690_366, // 32
  828_333, // 33
  993_893, // 34
  1_192_565, // 35
  1_430_971, // 36
  1_717_058, // 37
  2_060_362, // 38
  2_472_326, // 39
  2_966_682, // 40
  3_559_909, // 41
  4_271_781, // 42
  5_126_027, // 43
  6_151_122, // 44
  7_381_236, // 45
  8_857_372, // 46
  10_628_735, // 47
  12_754_370, // 48
  15_305_132, // 49
  18_366_046, // 50
  22_039_142, // 51
  26_446_857, // 52
  31_736_115, // 53
  38_083_224, // 54
  45_699_754, // 55
  54_839_590, // 56
  65_807_396, // 57
  78_968_756, // 58
  94_762_391, // 59
  113_714_753, // 60
  136_457_587, // 61
  163_748_987, // 62
  196_498_667, // 63
  235_798_283, // 64
  282_957_822, // 65
  339_549_268, // 66
  407_459_003, // 67
  488_950_685, // 68
  586_740_703, // 69
  704_088_724, // 70
  844_906_349, // 71
  1_013_887_499, // 72
  1_216_664_879, // 73
  1_459_997_735, // 74
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
