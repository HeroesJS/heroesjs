import { PlayerColor } from '../../../core';
import blue from './blue.png';
import green from './green.png';
import red from './red.png';
import yellow from './yellow.png';

export const assets: Readonly<Record<PlayerColor, string>> = {
  [PlayerColor.Blue]: blue,
  [PlayerColor.Green]: green,
  [PlayerColor.Red]: red,
  [PlayerColor.Yellow]: yellow,
};
