import { PlayerColor } from '@heroesjs/hmm1-core';

import blue from './blue.jpg';
import green from './green.jpg';
import red from './red.jpg';
import yellow from './yellow.jpg';

export const generic: Readonly<Record<PlayerColor, string>> = {
  [PlayerColor.Blue]: blue,
  [PlayerColor.Green]: green,
  [PlayerColor.Red]: red,
  [PlayerColor.Yellow]: yellow,
};
