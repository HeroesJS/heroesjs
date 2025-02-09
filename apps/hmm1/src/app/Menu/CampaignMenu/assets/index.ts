import type { ButtonAssets } from '@heroesjs/hmm1-base-ui';
import { Campaign } from '@heroesjs/hmm1-core';

import { playLordAlamarButton } from './play-lord-alamar';
import { playLordIronfistButton } from './play-lord-ironfist';
import { playLordSlayerButton } from './play-lord-slayer';
import { playQueenLamandaButton } from './play-queen-lamanda';

export * from './cancel';

export const campaignButtons: Record<Campaign, ButtonAssets> = {
  [Campaign.LordAlamar]: playLordAlamarButton,
  [Campaign.LordIronfist]: playLordIronfistButton,
  [Campaign.LordSlayer]: playLordSlayerButton,
  [Campaign.QueenLamanda]: playQueenLamandaButton,
};
