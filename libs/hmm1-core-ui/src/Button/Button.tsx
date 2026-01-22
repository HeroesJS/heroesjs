import { type MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { PositionedComponent } from '../PositionedComponent';

export interface ButtonAssets {
  readonly active: string;
  readonly pressed: string;
}

interface ButtonProps {
  readonly assets: ButtonAssets;
  readonly disabled?: boolean;
  readonly label?: string;
  readonly onClick?: () => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly x?: number;
  readonly y?: number;
}

export function Button({ assets, disabled, label, onClick, onMouseDown, x, y }: ButtonProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => setIsMouseOver(true);

  const handleMouseOut = () => setIsMouseOver(false);

  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 0) {
      setIsPressed(true);
    }

    onMouseDown?.(e);
  };

  const handleMouseUp = () => setIsPressed(false);

  return (
    <Root
      aria-label={label}
      as="button"
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onMouseUp={handleMouseUp}
      x={x}
      y={y}
    >
      <img
        alt={label}
        draggable={false}
        src={(isPressed && isMouseOver) || disabled ? assets.pressed : assets.active}
      />
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: 0,
  padding: 0,
});
