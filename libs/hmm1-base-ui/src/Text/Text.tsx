import type { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import fontSmall from './heroes1-small.ttf';
import font from './heroes1.ttf';

export type TextSize = 'small' | 'normal' | 'large';

interface Props {
  readonly align?: 'left' | 'center' | 'right';
  readonly component?: 'span' | 'h1' | 'h2';
  readonly heading?: boolean;
  readonly hidden?: boolean;
  readonly label?: string;
  readonly onClick?: () => void;
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
  component,
  heading,
  hidden,
  label,
  onClick,
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
      hidden={hidden}
      onClick={onClick}
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

const Root = styled.span<Pick<Props, 'align' | 'selected' | 'shadow' | 'size' | 'width' | 'x' | 'y'>>(
  ({ align, selected, shadow, size = 'normal', width, x, y }) => ({
    color: selected ? '#beeb00' : '#fff',
    fontFamily: size === 'small' ? "'Heroes 1 Small'" : "'Heroes 1'",
    fontSize: fontSizes[size],
    left: x,
    lineHeight: '16px',
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
