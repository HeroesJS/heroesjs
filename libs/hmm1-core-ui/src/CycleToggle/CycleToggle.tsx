import type { MouseEvent, ReactNode } from 'react';

import { nextOption } from '@heroesjs/hmm1-core';

import { PositionedComponent } from '../PositionedComponent';

interface CycleToggleProps<T> {
  readonly children: (value: T) => ReactNode;
  readonly className?: string;
  readonly label?: string;
  readonly labelId?: string;
  readonly onChange?: (value: T) => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly options: readonly T[];
  readonly value: T;
  readonly x?: number;
  readonly y?: number;
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
