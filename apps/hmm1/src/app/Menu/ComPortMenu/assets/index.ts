import type { ButtonAssets } from '@heroesjs/hmm1-base-ui';

import { com1Button } from './com-1';
import { com2Button } from './com-2';
import { com3Button } from './com-3';
import { com4Button } from './com-4';

export const comPortButtons: Readonly<Record<number, ButtonAssets>> = {
  1: com1Button,
  2: com2Button,
  3: com3Button,
  4: com4Button,
};

export * from './cancel';
