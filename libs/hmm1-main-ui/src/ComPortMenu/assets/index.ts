import type { ButtonAssets } from '@heroesjs/hmm1-core-ui';

import { assets as com1 } from './com-1';
import { assets as com2 } from './com-2';
import { assets as com3 } from './com-3';
import { assets as com4 } from './com-4';

export const portAssets: Readonly<Record<number, ButtonAssets>> = {
  1: com1,
  2: com2,
  3: com3,
  4: com4,
};

export { assets as cancel } from './cancel';
