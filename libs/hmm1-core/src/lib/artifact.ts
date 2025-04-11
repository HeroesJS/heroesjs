import {keyBy} from 'lodash';

import {Skill, type SkillValues} from './core';

export enum ArtifactId {
  UltimateBookOfKnowledge = 1,
  UltimateSwordOfDominion = 2,
  UltimateCloakOfProtection = 3,
  UltimateWandOfMagic = 4,
  ArcaneNecklaceOfMagic = 5,
  CastersBraceletOfMagic = 6,
  MagesRingOfPower = 7,
  WitchsBroachOfMagic = 8,
  MedalOfValor = 9,
  MedalOfCourage = 10,
  MedalOfHonor = 11,
  MedalOfDistinction = 12,
  FizbinOfMisfortune = 13,
  ThunderMaceOfDominion = 14,
  ArmoredGauntletsOfProtection = 15,
  DefenderHelmOfProtection = 16,
  GiantFlailOfDominion = 17,
  BallistaOfQuickness = 18,
  StealthShieldOfProtection = 19,
  DragonSwordOfDominion = 20,
  PowerAxeOfDominion = 21,
  DivineBreastplateOfProtection = 22,
  MinorScrollOfKnowledge = 23,
  MajorScrollOfKnowledge = 24,
  SuperiorScrollOfKnowledge = 25,
  ForemostScrollOfKnowledge = 26,
  EndlessSackOfGold = 27,
  EndlessBagOfGold = 28,
  EndlessPurseOfGold = 29,
  NomadBootsOfMobility = 30,
  TravelersBootsOfMobility = 31,
  LuckyRabbitsFoot = 32,
  GoldenHorseshoe = 33,
  GamblersLuckyCoin = 34,
  FourLeafClover = 35,
  TrueCompassOfMobility = 36,
  SailorsAstrolabeOfMobility = 37,
  Spellbook = 99,
}

interface ArtifactData {
  readonly catapultShotsModifier?: number;
  readonly goldModifier?: number;
  readonly id: ArtifactId;
  readonly isUltimate?: boolean;
  readonly luckModifier?: number;
  readonly mobilityModifier?: number;
  readonly moraleModifier?: number;
  readonly skillModifiers?: Partial<SkillValues>;
}

const ultimateBookOfKnowledge: ArtifactData = {
  id: ArtifactId.UltimateBookOfKnowledge,
  isUltimate: true,
  skillModifiers: {
    [Skill.Knowledge]: 12,
  },
};

const ultimateSwordOfDominion: ArtifactData = {
  id: ArtifactId.UltimateSwordOfDominion,
  isUltimate: true,
  skillModifiers: {
    [Skill.Attack]: 12,
  },
};

const ultimateCloakOfProtection: ArtifactData = {
  id: ArtifactId.UltimateCloakOfProtection,
  isUltimate: true,
  skillModifiers: {
    [Skill.Defense]: 12,
  },
};

const ultimateWandOfMagic: ArtifactData = {
  id: ArtifactId.UltimateWandOfMagic,
  isUltimate: true,
  skillModifiers: {
    [Skill.SpellPower]: 12,
  },
};

const arcaneNecklaceOfMagic: ArtifactData = {
  id: ArtifactId.ArcaneNecklaceOfMagic,
  skillModifiers: {
    [Skill.SpellPower]: 4,
  },
};

const castersBraceletOfMagic: ArtifactData = {
  id: ArtifactId.CastersBraceletOfMagic,
  skillModifiers: {
    [Skill.SpellPower]: 2,
  },
};

const magesRingOfPower: ArtifactData = {
  id: ArtifactId.MagesRingOfPower,
  skillModifiers: {
    [Skill.SpellPower]: 2,
  },
};

const witchsBroachOfMagic: ArtifactData = {
  id: ArtifactId.WitchsBroachOfMagic,
  skillModifiers: {
    [Skill.SpellPower]: 3,
  },
};

const medalOfValor: ArtifactData = {
  id: ArtifactId.MedalOfValor,
  moraleModifier: 1,
};

const medalOfCourage: ArtifactData = {
  id: ArtifactId.MedalOfCourage,
  moraleModifier: 1,
};

const medalOfHonor: ArtifactData = {
  id: ArtifactId.MedalOfHonor,
  moraleModifier: 1,
};

const medalOfDistinction: ArtifactData = {
  id: ArtifactId.MedalOfDistinction,
  moraleModifier: 1,
};

const fizbinOfMisfortune: ArtifactData = {
  id: ArtifactId.FizbinOfMisfortune,
  moraleModifier: -2,
};

const thunderMaceOfDominion: ArtifactData = {
  id: ArtifactId.ThunderMaceOfDominion,
  skillModifiers: {
    [Skill.Attack]: 1,
  },
};

const armoredGauntletsOfProtection: ArtifactData = {
  id: ArtifactId.ArmoredGauntletsOfProtection,
  skillModifiers: {
    [Skill.Defense]: 1,
  },
};

const defenderHelmOfProtection: ArtifactData = {
  id: ArtifactId.DefenderHelmOfProtection,
  skillModifiers: {
    [Skill.Defense]: 1,
  },
};

const giantFlailOfDominion: ArtifactData = {
  id: ArtifactId.GiantFlailOfDominion,
  skillModifiers: {
    [Skill.Attack]: 1,
  },
};

const ballistaOfQuickness: ArtifactData = {
  catapultShotsModifier: 1,
  id: ArtifactId.BallistaOfQuickness,
};

const stealthShieldOfProtection: ArtifactData = {
  id: ArtifactId.StealthShieldOfProtection,
  skillModifiers: {
    [Skill.Defense]: 2,
  },
};

const dragonSwordOfDominion: ArtifactData = {
  id: ArtifactId.DragonSwordOfDominion,
  skillModifiers: {
    [Skill.Attack]: 3,
  },
};

const powerAxeOfDominion: ArtifactData = {
  id: ArtifactId.PowerAxeOfDominion,
  skillModifiers: {
    [Skill.Attack]: 2,
  },
};

const divineBreastplateOfProtection: ArtifactData = {
  id: ArtifactId.DivineBreastplateOfProtection,
  skillModifiers: {
    [Skill.Defense]: 3,
  },
};

const minorScrollOfKnowledge: ArtifactData = {
  id: ArtifactId.MinorScrollOfKnowledge,
  skillModifiers: {
    [Skill.Knowledge]: 2,
  },
};

const majorScrollOfKnowledge: ArtifactData = {
  id: ArtifactId.MajorScrollOfKnowledge,
  skillModifiers: {
    [Skill.Knowledge]: 3,
  },
};

const superiorScrollOfKnowledge: ArtifactData = {
  id: ArtifactId.SuperiorScrollOfKnowledge,
  skillModifiers: {
    [Skill.Knowledge]: 4,
  },
};

const foremostScrollOfKnowledge: ArtifactData = {
  id: ArtifactId.ForemostScrollOfKnowledge,
  skillModifiers: {
    [Skill.Knowledge]: 5,
  },
};

const endlessSackOfGold: ArtifactData = {
  goldModifier: 1_000,
  id: ArtifactId.EndlessSackOfGold,
};

const endlessBagOfGold: ArtifactData = {
  goldModifier: 750,
  id: ArtifactId.EndlessBagOfGold,
};

const endlessPurseOfGold: ArtifactData = {
  goldModifier: 500,
  id: ArtifactId.EndlessPurseOfGold,
};

const nomadBootsOfMobility: ArtifactData = {
  id: ArtifactId.NomadBootsOfMobility,
  mobilityModifier: 24,
};

const travelersBootsOfMobility: ArtifactData = {
  id: ArtifactId.TravelersBootsOfMobility,
  mobilityModifier: 12,
};

const luckyRabbitsFoot: ArtifactData = {
  id: ArtifactId.LuckyRabbitsFoot,
  luckModifier: 1,
};

const goldenHorseshoe: ArtifactData = {
  id: ArtifactId.GoldenHorseshoe,
  luckModifier: 1,
};

const gamblersLuckyCoin: ArtifactData = {
  id: ArtifactId.GamblersLuckyCoin,
  luckModifier: 1,
};

const fourLeafClover: ArtifactData = {
  id: ArtifactId.FourLeafClover,
  luckModifier: 1,
};

const trueCompassOfMobility: ArtifactData = {
  id: ArtifactId.TrueCompassOfMobility,
  mobilityModifier: 20, // on land and water
};

const sailorsAstrolabeOfMobility: ArtifactData = {
  id: ArtifactId.SailorsAstrolabeOfMobility,
  mobilityModifier: 40, // 80 to sorceress, on water
};

const spellbook: ArtifactData = {
  id: ArtifactId.Spellbook,
};

const artifacts = [
  ultimateBookOfKnowledge,
  ultimateSwordOfDominion,
  ultimateCloakOfProtection,
  ultimateWandOfMagic,
  arcaneNecklaceOfMagic,
  castersBraceletOfMagic,
  magesRingOfPower,
  witchsBroachOfMagic,
  medalOfValor,
  medalOfCourage,
  medalOfHonor,
  medalOfDistinction,
  fizbinOfMisfortune,
  thunderMaceOfDominion,
  armoredGauntletsOfProtection,
  defenderHelmOfProtection,
  giantFlailOfDominion,
  ballistaOfQuickness,
  stealthShieldOfProtection,
  dragonSwordOfDominion,
  powerAxeOfDominion,
  divineBreastplateOfProtection,
  minorScrollOfKnowledge,
  majorScrollOfKnowledge,
  superiorScrollOfKnowledge,
  foremostScrollOfKnowledge,
  endlessSackOfGold,
  endlessBagOfGold,
  endlessPurseOfGold,
  nomadBootsOfMobility,
  travelersBootsOfMobility,
  luckyRabbitsFoot,
  goldenHorseshoe,
  gamblersLuckyCoin,
  fourLeafClover,
  trueCompassOfMobility,
  sailorsAstrolabeOfMobility,
  spellbook,
];

export const artifactById = keyBy(artifacts, (a) => a.id);
