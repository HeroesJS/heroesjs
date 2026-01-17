import { ComputerOpponentSetting } from '../../../core';
import average from './average.jpg';
import dumb from './dumb.jpg';
import genius from './genius.jpg';
import human from './human.jpg';
import none from './none.jpg';
import smart from './smart.jpg';

const computer: Readonly<Record<ComputerOpponentSetting, string>> = {
  [ComputerOpponentSetting.Average]: average,
  [ComputerOpponentSetting.Dumb]: dumb,
  [ComputerOpponentSetting.Genius]: genius,
  [ComputerOpponentSetting.None]: none,
  [ComputerOpponentSetting.Smart]: smart,
};

export const assets = {
  computer,
  human,
} as const;
