import { OpponentDifficulty } from '@heroesjs/hmm1-core';

import average from './average.jpg';
import dumb from './dumb.jpg';
import genius from './genius.jpg';
import none from './none.jpg';
import smart from './smart.jpg';

export const opponentSetting: Record<OpponentDifficulty, string> = {
  [OpponentDifficulty.Average]: average,
  [OpponentDifficulty.Dumb]: dumb,
  [OpponentDifficulty.Genius]: genius,
  [OpponentDifficulty.None]: none,
  [OpponentDifficulty.Smart]: smart,
};
