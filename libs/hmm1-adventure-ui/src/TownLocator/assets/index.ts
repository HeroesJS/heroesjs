import { TownClass } from '@heroesjs/hmm1-core';

import farmCastleLocator from './farm/castle-locator.jpg';
import farmTownLocator from './farm/town-locator.jpg';
import forestCastleLocator from './forest/castle-locator.jpg';
import forestTownLocator from './forest/town-locator.jpg';
import mountainsCastleLocator from './mountains/castle-locator.jpg';
import mountainsTownLocator from './mountains/town-locator.jpg';
import plainsCastleLocator from './plains/castle-locator.jpg';
import plainsTownLocator from './plains/town-locator.jpg';

interface TownLocatorAssets {
  readonly castle: string;
  readonly town: string;
}

export const locators: Record<TownClass, TownLocatorAssets> = {
  [TownClass.Farm]: {
    castle: farmCastleLocator,
    town: farmTownLocator,
  },
  [TownClass.Forest]: {
    castle: forestCastleLocator,
    town: forestTownLocator,
  },
  [TownClass.Mountains]: {
    castle: mountainsCastleLocator,
    town: mountainsTownLocator,
  },
  [TownClass.Plains]: {
    castle: plainsCastleLocator,
    town: plainsTownLocator,
  },
};
