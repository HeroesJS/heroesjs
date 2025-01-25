import { PlayerColor } from '@heroesjs/hmm1-core';

import blue from './blue.png';
import green from './green.png';
import red from './red.png';
import yellow from './yellow.png';

export const gems: Record<PlayerColor, string> = {
  [PlayerColor.Blue]: blue,
  [PlayerColor.Green]: green,
  [PlayerColor.Red]: red,
  [PlayerColor.Yellow]: yellow,
};
