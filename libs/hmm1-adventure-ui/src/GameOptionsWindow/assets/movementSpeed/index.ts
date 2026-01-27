import { MovementSpeed } from '@heroesjs/hmm1-core';

import canter from './canter.jpg';
import gallop from './gallop.jpg';
import jump from './jump.jpg';
import trot from './trot.jpg';
import walk from './walk.jpg';

export const assets: Readonly<Record<MovementSpeed, string>> = {
  [MovementSpeed.Canter]: canter,
  [MovementSpeed.Gallop]: gallop,
  [MovementSpeed.Jump]: jump,
  [MovementSpeed.Trot]: trot,
  [MovementSpeed.Walk]: walk,
};
