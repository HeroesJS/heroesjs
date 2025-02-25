import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';
import type { HeroId } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly heroId?: HeroId;
}

export const HeroPortrait = ({ heroId, ...rest }: Props) => (
  <PositionedComponent {...rest} as="img" src={heroId !== undefined ? assets.poartraits[heroId] : assets.empty} />
);
