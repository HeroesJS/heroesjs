import {PositionedComponent, type PositionProps} from '@heroesjs/hmm1-base-ui';
import type {CreatureId} from '@heroesjs/hmm1-core';

import * as assets from './assets';

export type CreatureIconSize = 'large' | 'medium' | 'small' | 'tiny';

interface Props extends PositionProps {
  readonly creature: CreatureId;
  readonly size: CreatureIconSize;
}

export const CreatureIcon = ({creature, size, x, y}: Props) => (
  <PositionedComponent as="img" src={assets.icons[creature][size]} x={x} y={y} />
);
