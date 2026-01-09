import { PlayerColor, playerColorLabel, playerColors } from '../core';
import { PositionedComponent, PositionProps } from '../PositionedComponent';
import { nextOption } from '../util';
import { playerColor } from './assets';

interface PlayerColorSelectorProps extends PositionProps {
  readonly label: string;
  readonly onChange?: (value: PlayerColor) => void;
  readonly value: PlayerColor;
}

export function PlayerColorSelector({ label, onChange, value, x, y }: PlayerColorSelectorProps) {
  return (
    <PositionedComponent
      aria-label={label}
      aria-required
      onClick={() => onChange?.(nextOption(playerColors, value))}
      role="radiogroup"
      x={x}
      y={y}
    >
      <img alt={playerColorLabel[value]} aria-checked src={playerColor[value]} role="radio" />
    </PositionedComponent>
  );
}
