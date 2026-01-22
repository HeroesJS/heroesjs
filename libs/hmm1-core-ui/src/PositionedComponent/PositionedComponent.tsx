import styled from 'styled-components';

interface PositionedComponentProps {
  readonly x?: number;
  readonly y?: number;
}

export const PositionedComponent = styled('div')<PositionedComponentProps>(({ x, y }) => ({
  left: x,
  position: x !== undefined && y !== undefined ? 'absolute' : 'relative',
  top: y,
}));
