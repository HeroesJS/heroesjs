import { gameDifficulties, type GameDifficulty } from '@heroesjs/hmm1-core';

import { PositionedComponent, type PositionProps } from '../base';

import { DifficultyOption } from './DifficultyOption';

interface Props extends PositionProps {
  readonly onChange?: (value: GameDifficulty) => void;
  readonly selectedOption?: GameDifficulty;
}

export const DifficultyMenu = ({ onChange, selectedOption, x, y }: Props) => {
  return (
    <PositionedComponent aria-label="Game Difficulty" role="menu" x={x} y={y}>
      {gameDifficulties.map((difficulty, i) => (
        <DifficultyOption
          key={difficulty}
          onClick={onChange}
          selected={difficulty === selectedOption}
          value={difficulty}
          x={i * 71}
        />
      ))}
    </PositionedComponent>
  );
};
