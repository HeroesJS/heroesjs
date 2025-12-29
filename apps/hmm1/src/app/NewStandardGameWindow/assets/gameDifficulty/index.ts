import { GameDifficulty } from '../../../core';
import easy from './easy.jpg';
import expert from './expert.jpg';
import hard from './hard.jpg';
import normal from './normal.jpg';
import selection from './selection.png';

export const assets = {
  option: {
    [GameDifficulty.Easy]: easy,
    [GameDifficulty.Expert]: expert,
    [GameDifficulty.Hard]: hard,
    [GameDifficulty.Normal]: normal,
  },
  selection,
} as const;
