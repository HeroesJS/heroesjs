import type { ComponentProps } from 'react';

import { Button } from '@heroesjs/hmm1-base-ui';
import type { HeroClassId, PlayerColor } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends Omit<ComponentProps<typeof Button>, 'assets'> {
  readonly color: PlayerColor;
  readonly heroClass?: HeroClassId;
}

export const Crest = ({ color, heroClass, ...props }: Props) => {
  const image = heroClass !== undefined ? assets.heroClass[heroClass][color] : assets.generic[color];

  return (
    <Button
      {...props}
      assets={{
        disabled: image,
        enabled: image,
      }}
    />
  );
};
