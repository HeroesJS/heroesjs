import type { MouseEvent } from 'react';
import { PositionedComponent } from '../PositionedComponent';

export interface CheckboxAssets {
  readonly checked: string;
  readonly unchecked: string;
}

interface CheckboxProps {
  readonly assets: CheckboxAssets;
  readonly checked?: boolean;
  readonly label?: string;
  readonly labelId?: string;
  readonly onChange?: (value: boolean) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly x?: number;
  readonly y?: number;
}

export function Checkbox({ assets, checked, label, labelId, onChange, onMouseDown, x, y }: CheckboxProps) {
  return (
    <PositionedComponent
      aria-checked={checked}
      aria-label={label}
      aria-labelledby={labelId}
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
