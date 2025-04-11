import {HeroClassId} from '@heroesjs/hmm1-core';

import {barbarian} from './barbarian';
import {knight} from './knight';
import {sorceress} from './sorceress';
import {warlock} from './warlock';

export * from './generic';

export const heroClass: Readonly<Record<HeroClassId, typeof barbarian>> = {
  [HeroClassId.Barbarian]: barbarian,
  [HeroClassId.Knight]: knight,
  [HeroClassId.Sorceress]: sorceress,
  [HeroClassId.Warlock]: warlock,
};
