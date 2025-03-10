import { PositionedComponent, type PositionProps } from '@heroesjs/hmm1-base-ui';
import type { ArtifactId } from '@heroesjs/hmm1-core';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly id: ArtifactId;
  readonly size: 'small' | 'large';
}

export const ArtifactIcon = ({ id, size, x, y }: Props) => (
  <PositionedComponent as="img" src={assets.icons[id][size]} x={x} y={y} />
);
