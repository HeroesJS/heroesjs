import type { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { GameDifficulty } from '@heroesjs/hmm1-core';

import * as assets from './assets';

const shiftedLabels = [GameDifficulty.Hard, GameDifficulty.Expert];

interface DifficultyOptionProps extends PositionProps {
  readonly onClick?: (value: GameDifficulty) => void;
  readonly onInfoClose?: () => void;
  readonly onInfoOpen?: () => void;
  readonly selected?: boolean;
  readonly value: GameDifficulty;
}

export const DifficultyOption = ({
  onClick,
  onInfoClose,
  onInfoOpen,
  selected,
  value,
  x,
  y,
}: DifficultyOptionProps) => {
  const { t } = useTranslation('core', { keyPrefix: 'gameDifficulty' });

  const handleClick = () => onClick?.(value);

  const handleImageMouseDown = (e: MouseEvent) => e.button === 2 && onInfoOpen?.();

  const handleImageMouseUp = () => onInfoClose?.();

  return (
    <Root aria-label={t(value)} aria-selected={selected} role="option" x={x} y={y}>
      {selected && <Selection src={assets.gameDifficultySelection} />}
      <Image
        onClick={handleClick}
        onMouseDown={handleImageMouseDown}
        onMouseUp={handleImageMouseUp}
        src={assets.gameDifficultyImages[value]}
      />
      <Text align="center" size="small" width={71 + (shiftedLabels.includes(value) ? -1 : 0)} x={0} y={67}>
        {t(value)}
      </Text>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  width: 71,
});

const Image = styled.img({
  left: 3,
  position: 'absolute',
  top: 3,
});

const Selection = styled.img({
  position: 'absolute',
});
