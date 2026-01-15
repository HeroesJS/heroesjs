import { OpponentSetting } from '../../../core';
import average from './average.jpg';
import dumb from './dumb.jpg';
import genius from './genius.jpg';
import human from './human.jpg';
import none from './none.jpg';
import smart from './smart.jpg';

export const assets: Readonly<Record<OpponentSetting, string>> = {
  [OpponentSetting.Average]: average,
  [OpponentSetting.Dumb]: dumb,
  [OpponentSetting.Genius]: genius,
  [OpponentSetting.Human]: human,
  [OpponentSetting.None]: none,
  [OpponentSetting.Smart]: smart,
};
