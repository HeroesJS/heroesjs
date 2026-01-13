import type { MouseEvent } from 'react';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';

export interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface CheckboxProps extends PositionProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly label?: string;
  readonly onChange?: (value: boolean) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
}

export function Checkbox({ assets, checked, label, onChange, onMouseDown, x, y }: CheckboxProps) {
  return (
    <PositionedComponent
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange?.(!checked)}
      onMouseDown={onMouseDown}
      role="checkbox"
      x={x}
      y={y}
    >
      <img alt={label} src={checked ? assets.checked : assets.unchecked} />
    </PositionedComponent>
  );
}
