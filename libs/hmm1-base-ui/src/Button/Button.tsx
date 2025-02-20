import { type MouseEvent, useCallback, useState } from 'react';
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
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly onMouseLeave?: () => void;
  readonly onMouseOver?: () => void;
  readonly onMouseUp?: (e: MouseEvent) => void;
}

export const Button = ({
  assets,
  className,
  disabled,
  label,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseOver,
  onMouseUp,
  x,
  y,
}: Props) => {
  const [over, setOver] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleMouseEnter = () => setOver(true);

  const handleMouseOut = () => setOver(false);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (e.button === 0) {
        setPressed(true);
      }

      onMouseDown?.(e);
    },
    [onMouseDown],
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (e.button === 0) {
        setPressed(false);
      }

      onMouseUp?.(e);
    },
    [onMouseUp],
  );

  return (
    <Root
      aria-disabled={disabled}
      aria-label={label}
      as="button"
      className={className}
      onClick={!disabled ? onClick : undefined}
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
