import type { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import fontSmall from './heroes1-small.ttf';
import font from './heroes1.ttf';

export type TextSize = 'small' | 'normal' | 'large';

interface Props {
  readonly align?: 'left' | 'center' | 'right';
  readonly size?: TextSize;
  readonly width?: number;
  readonly x?: number;
  readonly y?: number;
}

export const Text = ({ align, children, size, width, x, y }: PropsWithChildren<Props>) => (
  <>
    <FontStyles />
    <Root align={align} size={size} width={width} x={x} y={y}>
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

const Root = styled.span<Pick<Props, 'align' | 'size' | 'width' | 'x' | 'y'>>(
  ({ align, size = 'normal', width, x, y }) => ({
    color: '#fff',
    fontFamily: size === 'small' ? "'Heroes 1 Small'" : "'Heroes 1'",
    fontSize: fontSizes[size],
    left: x,
    position: 'absolute',
    textAlign: align,
    top: y,
    width,
  }),
);
