import { useCallback } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import type { CreatureId, Town } from '@heroesjs/hmm1-core';

import { CreatureIcon } from '../CreatureIcon';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly count?: number;
  readonly creature?: CreatureId;
  readonly index: number;
  readonly onClick?: (index: number) => void;
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: (index: number) => void;
  readonly origin?: Town;
  readonly selected?: boolean;
}

export const TroopSlot = ({
  count = 0,
  creature,
  index,
  onClick,
  onMouseLeave,
  onMouseOver,
  origin,
  selected,
  x,
  y,
}: Props) => {
  const handleMouseOver = useCallback(() => onMouseOver?.(index), [index, onMouseOver]);

  const handleClick = useCallback(() => onClick?.(index), [index, onClick]);

  return (
    <Root onClick={handleClick} onMouseLeave={onMouseLeave} onMouseOver={handleMouseOver} x={x} y={y}>
      {creature !== undefined ? (
        <>
          <img alt="" src={origin ? assets.background.town[origin] : assets.background.generic} />
          <CreatureIcon creature={creature} size="medium" x={7} y={13} />
          <Text align="right" size="small" width={TroopSlot.width - 10} x={5} y={80}>
            {count}
          </Text>
        </>
      ) : (
        <img alt="" src={assets.empty} />
      )}
      {selected && <PositionedComponent as="img" src={assets.selection} x={0} y={0} />}
    </Root>
  );
};

TroopSlot.width = 82;
TroopSlot.height = 93;

const Root = styled(PositionedComponent)({
  height: TroopSlot.height,
  width: TroopSlot.width,
});
