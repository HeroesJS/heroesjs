import {TownClassId} from '@heroesjs/hmm1-core';

import farm from './farm.jpg';
import forest from './forest.jpg';
import generic from './generic.jpg';
import mountains from './mountains.jpg';
import plains from './plains.jpg';

const townBackgrounds: Readonly<Record<TownClassId, string>> = {
  [TownClassId.Farm]: farm,
  [TownClassId.Forest]: forest,
  [TownClassId.Mountains]: mountains,
  [TownClassId.Plains]: plains,
};

export const background = {
  generic,
  town: townBackgrounds,
} as const;
