import { PositionedComponent, type PositionProps, Text } from '../base';
import { OpponentDifficulty } from '../core';

import average from './assets/opponentSetting/average.jpg';
import dumb from './assets/opponentSetting/dumb.jpg';
import genius from './assets/opponentSetting/genius.jpg';
import none from './assets/opponentSetting/none.jpg';
import smart from './assets/opponentSetting/smart.jpg';

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
    <PositionedComponent as="div" onClick={handleClick} x={x} y={y}>
      <img alt="" src={assets[value]} />
      <Text align="center" size="small" width={66} x={0} y={64}>
        {labels[value]}
      </Text>
    </PositionedComponent>
  );
};
