import { Text, withPosition } from '../base';
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

interface Props {
  readonly className?: string;
  readonly index: number;
  readonly onClick?: (index: number, value: OpponentDifficulty) => void;
  readonly value: OpponentDifficulty;
}

export const OpponentSetting = withPosition(({ className, index, onClick, value }: Props) => {
  const handleClick = () => onClick?.(index, value);

  return (
    <div className={className} onClick={handleClick}>
      <img src={assets[value]} />
      <Text align="center" size="small" width={66} x={0} y={66}>
        {labels[value]}
      </Text>
    </div>
  );
});
