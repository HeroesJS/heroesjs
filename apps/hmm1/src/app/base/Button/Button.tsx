import { useState } from 'react';
import styled from 'styled-components';

import type { PositionProps } from '../../core';

export interface ButtonAssets {
  readonly enabled: string;
  readonly disabled: string;
}

interface Props extends PositionProps {
  readonly assets: ButtonAssets;
  readonly disabled?: boolean;
  readonly label: string;
  readonly onClick?: () => void;
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: () => void;
}

export const Button = ({ assets, disabled, label, onClick, onMouseLeave, onMouseOver, x, y }: Props) => {
  const [pressed, setPressed] = useState(false);

  const handleMouseDown = () => setPressed(true);

  const handleMouseUp = () => setPressed(false);

  return (
    <Root
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onMouseUp={handleMouseUp}
      x={x}
      y={y}
    >
      <Image src={pressed || disabled ? assets.disabled : assets.enabled} />
    </Root>
  );
};

const Root = styled.button<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  backgroundColor: 'transparent',
  border: 0,
  fontSize: 0,
  left: x,
  padding: 0,
  top: y,
}));

const Image = styled.img({
  userDrag: 'none',
});
