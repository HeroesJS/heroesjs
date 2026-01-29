import { OpponentDifficulty } from '@heroesjs/hmm1-core';

import average from './average.jpg';
import dumb from './dumb.jpg';
import genius from './genius.jpg';
import human from './human.jpg';
import none from './none.jpg';
import smart from './smart.jpg';

const computer: Readonly<Record<OpponentDifficulty, string>> = {
  [OpponentDifficulty.Average]: average,
  [OpponentDifficulty.Dumb]: dumb,
  [OpponentDifficulty.Genius]: genius,
  [OpponentDifficulty.Smart]: smart,
};

export const assets = {
  computer,
  human,
  none,
} as const;
