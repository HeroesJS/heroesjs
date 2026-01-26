import type { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

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
  readonly reverse?: boolean;
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
  reverse,
  value,
  x,
  y,
}: CycleToggleProps<T>) {
  return (
    <Root
      aria-label={label}
      aria-labelledby={labelId}
      className={className}
      onClick={() => onChange?.(nextOption(reverse ? Array.from(options).reverse() : options, value))}
      onMouseDown={onMouseDown}
      role="radiogroup"
      x={x}
      y={y}
    >
      <div aria-checked role="radio">
        {children(value)}
      </div>
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  fontSize: 0,
});
