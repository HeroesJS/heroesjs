import type { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import font from './heroes1.ttf';

export type TextSize = 'small' | 'normal' | 'large';

interface Props {
  readonly size?: TextSize;
  readonly x?: number;
  readonly y?: number;
}

export const Text = ({ children, size, x, y }: PropsWithChildren<Props>) => (
  <>
    <FontStyles />
    <Root size={size} x={x} y={y}>
      {children}
    </Root>
  </>
);

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Heroes 1';
    src: url(${font}) format('truetype');
  }
`;

const fontSizes: Record<TextSize, number> = {
  large: 13,
  normal: 12,
  small: 10,
};

const Root = styled.span<Pick<Props, 'size' | 'x' | 'y'>>(({ size = 'normal', x, y }) => ({
  color: '#fff',
  fontFamily: "'Heroes 1'",
  fontSize: fontSizes[size],
  left: x,
  position: 'absolute',
  top: y,
}));
