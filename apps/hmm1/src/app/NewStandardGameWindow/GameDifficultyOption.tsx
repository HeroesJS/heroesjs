import styled from 'styled-components';

import { GameDifficulty } from '../core';
import { PositionedComponent, PositionProps } from '../PositionedComponent';
import { Text } from '../Text';
import { gameDifficulty } from './assets';

interface GameDifficultyOptionProps extends PositionProps {
  readonly label: string;
  readonly selected?: boolean;
  readonly onClick?: () => void;
  readonly value: GameDifficulty;
}

export function GameDifficultyOption({ label, onClick, selected, value, x, y }: GameDifficultyOptionProps) {
  return (
    <Root aria-checked={selected} aria-label={label} role="radio" x={x} y={y}>
      {selected && (
        <PositionedComponent as="img" alt="" role="presentation" src={gameDifficulty.selection} x={0} y={0} />
      )}
      <PositionedComponent as="img" alt={label} onClick={onClick} src={gameDifficulty.option[value]} x={3} y={3} />
      <Text
        align="center"
        size="small"
        width={GameDifficultyOption.width + ([GameDifficulty.Hard, GameDifficulty.Expert].includes(value) ? -1 : 0)}
        x={0}
        y={69}
      >
        {label}
      </Text>
    </Root>
  );
}

GameDifficultyOption.width = 71;
GameDifficultyOption.height = 81;

const Root = styled(PositionedComponent)({
  height: GameDifficultyOption.height,
  position: 'relative',
  width: GameDifficultyOption.width,
});
