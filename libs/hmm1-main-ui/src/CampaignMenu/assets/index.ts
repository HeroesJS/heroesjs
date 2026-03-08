import { Leader } from '@heroesjs/hmm1-core';
import type { ButtonAssets } from '@heroesjs/hmm1-core-ui';

import { assets as playLordAlamar } from './play-lord-alamar';
import { assets as playLordIronfist } from './play-lord-ironfist';
import { assets as playLordSlayer } from './play-lord-slayer';
import { assets as playQueenLamanda } from './play-queen-lamanda';

export const playAssets: Readonly<Record<Leader, ButtonAssets>> = {
  [Leader.LordAlamar]: playLordAlamar,
  [Leader.LordIronfist]: playLordIronfist,
  [Leader.LordSlayer]: playLordSlayer,
  [Leader.QueenLamanda]: playQueenLamanda,
};

export { assets as cancel } from './cancel';
