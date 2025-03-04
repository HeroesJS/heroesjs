import { type MouseEvent, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { creatureById, type CreatureId } from '@heroesjs/hmm1-core';

import { CreatureIcon } from '../CreatureIcon';

import * as assets from './assets';

interface Props extends PositionProps {
  readonly count?: number;
  readonly creatureId?: CreatureId;
  readonly index: number;
  readonly onClick?: (index: number) => void;
  readonly onMouseDown?: (e: MouseEvent, index: number) => void;
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: (index: number) => void;
  readonly selected?: boolean;
}

export const TroopSlot = ({
  count = 0,
  creatureId,
  index,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseOver,
  selected = false,
  x,
  y,
}: Props) => {
  const { t } = useTranslation(['adventure', 'core'], { keyPrefix: 'component.troopSlot' });

  const handleMouseOver = useCallback(() => onMouseOver?.(index), [index, onMouseOver]);

  const handleMouseDown = useCallback((e: MouseEvent) => onMouseDown?.(e, index), [index, onMouseDown]);

  const handleClick = useCallback(() => onClick?.(index), [index, onClick]);

  const creature = creatureId !== undefined ? creatureById[creatureId] : undefined;

  return (
    <Root
      aria-label={t('title', { index, troop: creature ? t(`core:creatures.${creature.id}`) : t('empty') })}
      aria-selected={selected}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseOver={handleMouseOver}
      x={x}
      y={y}
    >
      {creature !== undefined ? (
        <>
          <img alt="" src={creature.origin ? assets.background.town[creature.origin] : assets.background.generic} />
          <CreatureIcon creature={creature.id} size="medium" x={7} y={13} />
          <Text align="right" label={t('count')} size="small" width={TroopSlot.width - 10} x={5} y={80}>
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
