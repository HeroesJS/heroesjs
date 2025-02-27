import { Town } from '@heroesjs/hmm1-core';

import farm from './farm.jpg';
import forest from './forest.jpg';
import generic from './generic.jpg';
import mountains from './mountains.jpg';
import plains from './plains.jpg';

const townBackgrounds: Readonly<Record<Town, string>> = {
  [Town.Farm]: farm,
  [Town.Forest]: forest,
  [Town.Mountains]: mountains,
  [Town.Plains]: plains,
};

export const background = {
  generic,
  town: townBackgrounds,
} as const;
