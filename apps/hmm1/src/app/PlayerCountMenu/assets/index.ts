import type { ButtonAssets } from '../../Button';
import { assets as twoPlayers } from './2-players';
import { assets as threePlayers } from './3-players';
import { assets as fourPlayers } from './4-players';

export { assets as cancel } from './cancel';

export const countAssets: Record<number, ButtonAssets> = {
  2: twoPlayers,
  3: threePlayers,
  4: fourPlayers,
};
