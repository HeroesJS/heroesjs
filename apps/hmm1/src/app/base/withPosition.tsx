import type { ComponentType } from 'react';
import styled from 'styled-components';

interface RequiredProps {
  readonly className?: string;
}

export interface PositionProps {
  readonly x?: number;
  readonly y?: number;
}

export const withPosition = <T extends RequiredProps>(Component: ComponentType<T>) =>
  styled(Component)<PositionProps>(({ x, y }) => ({
    left: x,
    position: 'absolute',
    top: y,
  }));
