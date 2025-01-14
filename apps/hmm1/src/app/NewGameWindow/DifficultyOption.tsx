import styled from 'styled-components';

import { Text, withPosition } from '../base';
import { GameDifficulty } from '../core';

import easyDifficulty from './assets/gameDifficulty/easy.jpg';
import expertDifficulty from './assets/gameDifficulty/expert.jpg';
import hardDifficulty from './assets/gameDifficulty/hard.jpg';
import normalDifficulty from './assets/gameDifficulty/normal.jpg';
import selection from './assets/gameDifficulty/selection.png';

const assets: Record<GameDifficulty, string> = {
  [GameDifficulty.Easy]: easyDifficulty,
  [GameDifficulty.Expert]: expertDifficulty,
  [GameDifficulty.Hard]: hardDifficulty,
  [GameDifficulty.Normal]: normalDifficulty,
};

const labels: Record<GameDifficulty, string> = {
  [GameDifficulty.Easy]: 'Easy',
  [GameDifficulty.Expert]: 'Expert',
  [GameDifficulty.Hard]: 'Hard',
  [GameDifficulty.Normal]: 'Normal',
};

const shiftedLabels = [GameDifficulty.Hard, GameDifficulty.Expert];

interface DifficultyOptionProps {
  readonly className?: string;
  readonly onClick?: (value: GameDifficulty) => void;
  readonly selected?: boolean;
  readonly value: GameDifficulty;
}

export const DifficultyOption = withPosition(({ className, onClick, selected, value }: DifficultyOptionProps) => {
  const handleClick = () => onClick?.(value);

  return (
    <Root className={className} onClick={handleClick}>
      <Image src={assets[value]} />
      <Text align="center" size="small" width={71 + (shiftedLabels.includes(value) ? -1 : 0)} x={0} y={67}>
        {labels[value]}
      </Text>
      {selected && <Selection src={selection} />}
    </Root>
  );
});

const Root = styled.div({
  width: 71,
});

const Image = styled.img({
  top: 3,
  left: 3,
  position: 'absolute',
});

const Selection = styled.img({
  position: 'absolute',
});
