import styled from 'styled-components';

import { PositionedComponent, type PositionProps, Text } from '@heroesjs/hmm1-base-ui';
import { opponentDifficulties, OpponentDifficulty } from '@heroesjs/hmm1-core';

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
    <Root x={x} y={y}>
      <span aria-label={`Opponent ${index + 1} Setting`} role="radiogroup">
        {opponentDifficulties.map((difficulty) => (
          <span aria-checked={difficulty === value} key={difficulty} role="radio">
            {labels[difficulty]}
          </span>
        ))}
      </span>
      <button aria-label={`Change Opponent ${index + 1} Setting`} onClick={handleClick}>
        <img alt="" src={assets[value]} />
        <Text align="center" size="small" width={66} x={0} y={64}>
          {labels[value]}
        </Text>
      </button>
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
