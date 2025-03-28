import { TownType } from '@heroesjs/hmm1-core';

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

export const locators: Record<TownType, TownLocatorAssets> = {
  [TownType.Farm]: {
    castle: farmCastleLocator,
    town: farmTownLocator,
  },
  [TownType.Forest]: {
    castle: forestCastleLocator,
    town: forestTownLocator,
  },
  [TownType.Mountains]: {
    castle: mountainsCastleLocator,
    town: mountainsTownLocator,
  },
  [TownType.Plains]: {
    castle: plainsCastleLocator,
    town: plainsTownLocator,
  },
};
