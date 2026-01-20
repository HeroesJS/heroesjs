import type { MouseEvent } from 'react';
import styled from 'styled-components';

import { gameDifficulties, GameDifficulty, gameDifficultyLabel } from '@heroesjs/hmm1-core';
import type { PositionProps } from '@heroesjs/hmm1-core-ui';
import { PositionedComponent, Text } from '@heroesjs/hmm1-core-ui';

import { gameDifficulty } from './assets';

interface GameDifficultySelectorProps extends PositionProps {
  readonly label: string;
  readonly onChange?: (value: GameDifficulty) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly value: GameDifficulty;
}

export function GameDifficultySelector({ label, onChange, onMouseDown, value, x, y }: GameDifficultySelectorProps) {
  return (
    <Root aria-label={label} role="radiogroup" x={x} y={y}>
      {gameDifficulties.map((difficulty) => (
        <Item
          key={difficulty}
          onClick={() => onChange?.(difficulty)}
          onMouseDown={onMouseDown}
          selected={difficulty === value}
          value={difficulty}
        />
      ))}
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  display: 'flex',
  flexDirection: 'row',
});

interface ItemProps {
  readonly onClick?: () => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly selected?: boolean;
  readonly value: GameDifficulty;
}

function Item({ onClick, onMouseDown, selected, value }: ItemProps) {
  const labelShift = [GameDifficulty.Hard, GameDifficulty.Expert].includes(value) ? -1 : 0;

  return (
    <ItemRoot aria-checked={selected} onClick={onClick} onMouseDown={onMouseDown} role="radio">
      {selected && <img alt="" src={gameDifficulty.selection} />}
      <PositionedComponent alt="" as="img" src={gameDifficulty.icon[value]} x={3} y={3} />
      <Text align="center" size="small" width={Item.width + labelShift} x={0} y={69}>
        {gameDifficultyLabel[value]}
      </Text>
    </ItemRoot>
  );
}

Item.width = 71;
Item.height = 81;

const ItemRoot = styled(PositionedComponent)({
  height: Item.height,
  width: Item.width,
});
