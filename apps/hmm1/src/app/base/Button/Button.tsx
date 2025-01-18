import { useState } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

export interface ButtonAssets {
  readonly disabled: string;
  readonly enabled: string;
}

interface Props extends PositionProps {
  readonly assets: ButtonAssets;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly label: string;
  readonly onClick?: () => void;
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: () => void;
}

export const Button = ({ assets, className, disabled, label, onClick, onMouseLeave, onMouseOver, x, y }: Props) => {
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
      className={className}
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
  fontSize: 0,
});

const Image = styled.img({
  userDrag: 'none',
});
