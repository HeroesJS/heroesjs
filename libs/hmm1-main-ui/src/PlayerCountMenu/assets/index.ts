import type { ButtonAssets } from '@heroesjs/hmm1-core-ui';

import { assets as twoPlayers } from './2-players';
import { assets as threePlayers } from './3-players';
import { assets as fourPlayers } from './4-players';

export const countAssets: Readonly<Record<number, ButtonAssets>> = {
  2: twoPlayers,
  3: threePlayers,
  4: fourPlayers,
};

export { assets as cancel } from './cancel';
