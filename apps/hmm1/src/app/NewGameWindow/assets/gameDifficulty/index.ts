import {GameDifficulty} from '@heroesjs/hmm1-core';

import easy from './easy.jpg';
import expert from './expert.jpg';
import hard from './hard.jpg';
import normal from './normal.jpg';
import selection from './selection.png';

export {selection as gameDifficultySelection};

export const gameDifficultyImages: Readonly<Record<GameDifficulty, string>> = {
  [GameDifficulty.Easy]: easy,
  [GameDifficulty.Expert]: expert,
  [GameDifficulty.Hard]: hard,
  [GameDifficulty.Normal]: normal,
};
