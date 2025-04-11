import {type MouseEvent, useCallback} from 'react';
import styled from 'styled-components';

import {PositionedComponent, type PositionProps} from '@heroesjs/hmm1-base-ui';
import type {ArtifactId} from '@heroesjs/hmm1-core';

import {ArtifactIcon} from '../ArtifactIcon';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly artifactId?: ArtifactId;
  readonly index: number;
  readonly isUltimate?: boolean;
  readonly onClick?: (e: MouseEvent, index: number) => void;
  readonly onMouseDown?: (e: MouseEvent, index: number) => void;
  readonly onMouseLeave?: (e: MouseEvent, index: number) => void;
  readonly onMouseOver?: (e: MouseEvent, index: number) => void;
}

export const ArtifactSlot = ({
  artifactId,
  index,
  isUltimate,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseOver,
  x,
  y,
}: Props) => {
  const handleMouseOver = useCallback((e: MouseEvent) => onMouseOver?.(e, index), [index, onMouseOver]);

  const handleMouseLeave = useCallback((e: MouseEvent) => onMouseLeave?.(e, index), [index, onMouseLeave]);

  const handleMouseDown = useCallback((e: MouseEvent) => onMouseDown?.(e, index), [index, onMouseDown]);

  const handleClick = useCallback((e: MouseEvent) => onClick?.(e, index), [index, onClick]);

  return (
    <Root
      isUltimate={isUltimate}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      role="button"
      x={x}
      y={y}
    >
      {artifactId ? (
        <ArtifactIcon id={artifactId} size="large" x={6} y={6} />
      ) : (
        <PositionedComponent as="img" src={assets.empty} x={6} y={6} />
      )}
    </Root>
  );
};

ArtifactSlot.width = 76;
ArtifactSlot.height = 76;

const Root = styled(PositionedComponent)<Pick<Props, 'isUltimate'>>(({isUltimate}) => ({
  backgroundImage: `url(${isUltimate ? assets.borderUltimate : assets.border})`,
  height: ArtifactSlot.height,
  width: ArtifactSlot.width,
}));
