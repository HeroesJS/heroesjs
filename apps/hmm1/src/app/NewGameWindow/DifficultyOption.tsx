import type {MouseEvent} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {PositionedComponent, type PositionProps, Text} from '@heroesjs/hmm1-base-ui';
import {GameDifficulty} from '@heroesjs/hmm1-core';

import * as assets from './assets';

const shiftedLabels = [GameDifficulty.Hard, GameDifficulty.Expert];

interface DifficultyOptionProps extends PositionProps {
  readonly onClick?: (value: GameDifficulty) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly selected?: boolean;
  readonly value: GameDifficulty;
}

export const DifficultyOption = ({onClick, onMouseDown, selected, value, x, y}: DifficultyOptionProps) => {
  const {t} = useTranslation('core', {keyPrefix: 'gameDifficulty'});

  const handleClick = () => onClick?.(value);

  return (
    <Root x={x} y={y}>
      {selected && <Selection src={assets.gameDifficultySelection} />}
      <Image
        aria-label={t(value)}
        aria-selected={selected}
        onClick={handleClick}
        onMouseDown={onMouseDown}
        role="option"
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
