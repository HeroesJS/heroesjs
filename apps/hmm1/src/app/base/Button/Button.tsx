import { useState } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

export interface ButtonAssets {
  readonly disabled: string;
  readonly enabled: string;
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
  const [over, setOver] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleMouseEnter = () => setOver(true);

  const handleMouseOut = () => setOver(false);

  const handleDocumentMouseUp = () => {
    document.removeEventListener('mouseup', handleDocumentMouseUp);

    setPressed(false);
  };

  const handleMouseDown = () => {
    document.addEventListener('mouseup', handleDocumentMouseUp);

    setPressed(true);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleDocumentMouseUp);

    setPressed(false);
  };

  return (
    <Root
      aria-label={label}
      as="button"
      disabled={disabled}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOut={handleMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={handleMouseUp}
      x={x}
      y={y}
    >
      <Image src={(over && pressed) || disabled ? assets.disabled : assets.enabled} />
    </Root>
  );
};

const Root = styled(PositionedComponent)({
  backgroundColor: 'transparent',
  border: 0,
  fontSize: 0,
  padding: 0,
});

const Image = styled.img({
  userDrag: 'none',
});
