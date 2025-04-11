import type {ButtonAssets} from '@heroesjs/hmm1-base-ui';

import {twoPlayersButton} from './2-players';
import {threePlayersButton} from './3-players';
import {fourPlayersButton} from './4-players';

export const playerCountButtons: Readonly<Record<number, ButtonAssets>> = {
  2: twoPlayersButton,
  3: threePlayersButton,
  4: fourPlayersButton,
};

export * from './cancel';
