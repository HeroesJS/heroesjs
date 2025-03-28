import { TownType } from '@heroesjs/hmm1-core';

import farm from './farm.jpg';
import forest from './forest.jpg';
import generic from './generic.jpg';
import mountains from './mountains.jpg';
import plains from './plains.jpg';

const townBackgrounds: Readonly<Record<TownType, string>> = {
  [TownType.Farm]: farm,
  [TownType.Forest]: forest,
  [TownType.Mountains]: mountains,
  [TownType.Plains]: plains,
};

export const background = {
  generic,
  town: townBackgrounds,
} as const;
