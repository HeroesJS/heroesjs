import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

interface Props extends PositionProps {
  readonly background: string;
  readonly className?: string;
  readonly height: number;
  readonly label: string;
  readonly shadow?: boolean;
  readonly width: number;
}

export const Window = ({
  background,
  children,
  className,
  height,
  label,
  shadow,
  width,
  x,
  y,
}: PropsWithChildren<Props>) => (
  <Root
    aria-label={label}
    background={background}
    className={className}
    height={height}
    role="dialog"
    shadow={shadow}
    width={width}
    x={x}
    y={y}
  >
    {children}
  </Root>
);

const Root = styled(PositionedComponent)<Pick<Props, 'background' | 'height' | 'shadow' | 'width'>>(
  ({ background, height, shadow, width }) => ({
    background: `url(${background})`,
    boxShadow: shadow ? '17px 16px rgba(0 0 0 / 30%), 1px 0 #000' : undefined,
    height,
    width,
  }),
);
