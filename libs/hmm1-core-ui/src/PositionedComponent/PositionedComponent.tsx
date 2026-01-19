import styled from 'styled-components';

export interface PositionProps {
  readonly x?: number;
  readonly y?: number;
}

export const PositionedComponent = styled('div')<PositionProps>(({ x, y }) => ({
  left: x,
  position: x !== undefined && y !== undefined ? 'absolute' : 'relative',
  top: y,
}));
