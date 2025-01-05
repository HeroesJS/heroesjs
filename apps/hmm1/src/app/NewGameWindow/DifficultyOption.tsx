import styled from 'styled-components';

import { Text } from '../base';
import type { PositionProps } from '../core';

import easyDifficulty from './assets/gameDifficulty/easy.jpg';
import expertDifficulty from './assets/gameDifficulty/expert.jpg';
import hardDifficulty from './assets/gameDifficulty/hard.jpg';
import normalDifficulty from './assets/gameDifficulty/normal.jpg';
import selection from './assets/gameDifficulty/selection.png';

export enum GameDifficulty {
  Easy = 'easy',
  Expert = 'expert',
  Hard = 'hard',
  Normal = 'normal',
}

export const difficultyOptions: readonly GameDifficulty[] = [
  GameDifficulty.Easy,
  GameDifficulty.Normal,
  GameDifficulty.Hard,
  GameDifficulty.Expert,
];

const difficultyAssets: Record<GameDifficulty, string> = {
  [GameDifficulty.Easy]: easyDifficulty,
  [GameDifficulty.Expert]: expertDifficulty,
  [GameDifficulty.Hard]: hardDifficulty,
  [GameDifficulty.Normal]: normalDifficulty,
};

const difficultyLabels: Record<GameDifficulty, string> = {
  [GameDifficulty.Easy]: 'Easy',
  [GameDifficulty.Expert]: 'Expert',
  [GameDifficulty.Hard]: 'Hard',
  [GameDifficulty.Normal]: 'Normal',
};

interface DifficultyOptionProps extends PositionProps {
  readonly onClick?: (value: GameDifficulty) => void;
  readonly selected?: boolean;
  readonly value: GameDifficulty;
}

export const DifficultyOption = ({ onClick, selected, value, x, y }: DifficultyOptionProps) => {
  const handleClick = () => onClick?.(value);

  return (
    <Root onClick={handleClick} x={x} y={y}>
      <Image src={difficultyAssets[value]} />
      <Text align="center" size="small" width={71} x={0} y={69}>
        {difficultyLabels[value]}
      </Text>
      {selected && <Selection src={selection} />}
    </Root>
  );
};

const Root = styled.div<Pick<DifficultyOptionProps, 'x' | 'y'>>(({ x, y }) => ({
  left: x,
  position: 'absolute',
  top: y,
  width: 71,
}));

const Image = styled.img({
  top: 3,
  left: 3,
  position: 'absolute',
});

const Selection = styled.img({
  position: 'absolute',
});
