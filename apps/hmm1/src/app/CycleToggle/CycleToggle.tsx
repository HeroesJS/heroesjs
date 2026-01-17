import type { MouseEvent, ReactNode } from 'react';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';
import { nextOption } from '../util';

interface CycleToggleProps<T> extends PositionProps {
  readonly children: (value: T) => ReactNode;
  readonly className?: string;
  readonly label?: string;
  readonly labelId?: string;
  readonly onChange?: (value: T) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly options: readonly T[];
  readonly value: T;
}

export function CycleToggle<T>({
  children,
  className,
  label,
  labelId,
  onChange,
  onMouseDown,
  options,
  value,
  x,
  y,
}: CycleToggleProps<T>) {
  return (
    <PositionedComponent
      aria-label={label}
      aria-labelledby={labelId}
      className={className}
      onClick={() => onChange?.(nextOption(options, value))}
      onMouseDown={onMouseDown}
      role="radiogroup"
      x={x}
      y={y}
    >
      <div aria-checked role="radio">
        {children(value)}
      </div>
    </PositionedComponent>
  );
}
