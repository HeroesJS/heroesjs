import type { PropsWithChildren } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { font, fontSmall } from './assets';
import { PositionedComponent, PositionProps } from '../PositionedComponent';

type TextSize = 'large' | 'medium' | 'small';

type TextAlign = 'left' | 'center' | 'right';

interface TextProps extends PositionProps {
  readonly align?: TextAlign;
  readonly className?: string;
  readonly fullWidth?: boolean;
  readonly hidden?: boolean;
  readonly highlighted?: boolean;
  readonly id?: string;
  readonly invisible?: boolean;
  readonly label?: string;
  readonly labelId?: string;
  readonly size?: TextSize;
  readonly width?: number;
}

export function Text({
  align,
  children,
  className,
  fullWidth,
  hidden,
  highlighted,
  id,
  invisible,
  label,
  labelId,
  size,
  width,
  x,
  y,
}: PropsWithChildren<TextProps>) {
  return (
    <>
      <FontStyles />
      <Root
        align={align}
        aria-hidden={hidden}
        aria-label={label}
        aria-labelledby={labelId}
        as="span"
        className={className}
        fullWidth={fullWidth}
        highlighted={highlighted}
        id={id}
        invisible={invisible}
        size={size}
        width={width}
        x={x}
        y={y}
      >
        {children}
      </Root>
    </>
  );
}

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
  medium: 12,
  small: 9,
};

const lineHeights: Record<TextSize, number> = {
  large: 16,
  medium: 13,
  small: 12,
};

const Root = styled(PositionedComponent)<
  Pick<TextProps, 'align' | 'fullWidth' | 'highlighted' | 'invisible' | 'size' | 'width'>
>(({ align = 'left', fullWidth, highlighted, invisible, size = 'medium', width }) => ({
  color: invisible ? 'transparent' : highlighted ? '#beeb00' : '#fff',
  fontFamily: size === 'small' ? "'Heroes 1 Small'" : "'Heroes 1'",
  fontSize: fontSizes[size],
  fontWeight: 'normal',
  lineHeight: `${lineHeights[size]}px`,
  textAlign: align,
  whiteSpace: 'pre-wrap',
  width: fullWidth ? '100%' : width,
  '-webkit-font-smoothing': 'none',
}));
