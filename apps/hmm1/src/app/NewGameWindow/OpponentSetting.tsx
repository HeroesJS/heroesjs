import styled from 'styled-components';

import { Text } from '../base';
import type { PositionProps } from '../core';

import average from './assets/opponentSetting/average.jpg';
import dumb from './assets/opponentSetting/dumb.jpg';
import genius from './assets/opponentSetting/genius.jpg';
import none from './assets/opponentSetting/none.jpg';
import smart from './assets/opponentSetting/smart.jpg';

export enum OpponentDifficulty {
  Average = 'average',
  Dumb = 'dumb',
  Genius = 'genius',
  None = 'none',
  Smart = 'smart',
}

export const opponentDifficulties: readonly OpponentDifficulty[] = [
  OpponentDifficulty.None,
  OpponentDifficulty.Dumb,
  OpponentDifficulty.Average,
  OpponentDifficulty.Smart,
  OpponentDifficulty.Genius,
];

const assets: Record<OpponentDifficulty, string> = {
  [OpponentDifficulty.Average]: average,
  [OpponentDifficulty.Dumb]: dumb,
  [OpponentDifficulty.Genius]: genius,
  [OpponentDifficulty.None]: none,
  [OpponentDifficulty.Smart]: smart,
};

const labels: Record<OpponentDifficulty, string> = {
  [OpponentDifficulty.Average]: 'Average',
  [OpponentDifficulty.Dumb]: 'Dumb',
  [OpponentDifficulty.Genius]: 'Genius',
  [OpponentDifficulty.None]: 'None',
  [OpponentDifficulty.Smart]: 'Smart',
};

interface Props extends PositionProps {
  readonly index: number;
  readonly onClick?: (index: number, value: OpponentDifficulty) => void;
  readonly value: OpponentDifficulty;
}

export const OpponentSetting = ({ index, onClick, value, x, y }: Props) => {
  const handleClick = () => onClick?.(index, value);

  return (
    <Root onClick={handleClick} x={x} y={y}>
      <img src={assets[value]} />
      <Text align="center" size="small" width={66} x={0} y={66}>
        {labels[value]}
      </Text>
    </Root>
  );
};

const Root = styled.div<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  left: x,
  position: 'absolute',
  top: y,
}));
