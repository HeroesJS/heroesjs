import type { MouseEvent, PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import fontSmall from './heroes1-small.ttf';
import font from './heroes1.ttf';

export type TextSize = 'small' | 'normal' | 'large';

interface Props {
  readonly align?: 'left' | 'center' | 'right';
  readonly className?: string;
  readonly component?: 'span' | 'h1' | 'h2';
  readonly heading?: boolean;
  readonly hidden?: boolean;
  readonly label?: string;
  readonly onClick?: () => void;
  readonly onMouseDown?: (e: MouseEvent) => void;
  readonly selected?: boolean;
  readonly shadow?: boolean;
  readonly size?: TextSize;
  readonly width?: number;
  readonly x?: number;
  readonly y?: number;
}

export const Text = ({
  align,
  children,
  className,
  component,
  heading,
  hidden,
  label,
  onClick,
  onMouseDown,
  selected,
  shadow,
  size,
  width,
  x,
  y,
}: PropsWithChildren<Props>) => (
  <>
    <FontStyles />
    <Root
      align={align}
      aria-label={label}
      as={component}
      className={className}
      hidden={hidden}
      onClick={onClick}
      onMouseDown={onMouseDown}
      role={heading ? 'heading' : undefined}
      selected={selected}
      shadow={shadow}
      size={size}
      width={width}
      x={x}
      y={y}
    >
      {children}
    </Root>
  </>
);

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Heroes 1';
    src: url(${font}) format('truetype');
  }

  @font-face {
    font-family: 'Heroes 1 Small';
    src: url(${fontSmall}) format('truetype');
  }
`;

const fontSizes: Record<TextSize, number> = {
  large: 13,
  normal: 12,
  small: 9,
};

const lineHeights: Record<TextSize, number> = {
  large: 16,
  normal: 13,
  small: 12,
};

const Root = styled.span<Pick<Props, 'align' | 'selected' | 'shadow' | 'size' | 'width' | 'x' | 'y'>>(
  ({ align, selected, shadow, size = 'normal', width, x, y }) => ({
    color: selected ? '#beeb00' : '#fff',
    fontFamily: size === 'small' ? "'Heroes 1 Small'" : "'Heroes 1'",
    fontSize: fontSizes[size],
    left: x,
    lineHeight: `${lineHeights[size]}px`,
    margin: 0,
    position: x !== undefined || y !== undefined ? 'absolute' : undefined,
    textAlign: align,
    textShadow: shadow
      ? '0 -1px 0 rgb(0, 0, 0), 1px 0 0 rgb(0, 0, 0), 0 1px 0 rgb(0, 0, 0), -1px 0 0 rgb(0, 0, 0)'
      : undefined,
    top: y,
    whiteSpace: 'pre-wrap',
    width,
  }),
);
