import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

interface WindowProps extends PositionProps {
  readonly background: string;
  readonly height: number;
  readonly label: string;
  readonly width: number;
}

export function Window({ background, children, height, label, width, x, y }: PropsWithChildren<WindowProps>) {
  return (
    <Root aria-label={label} background={background} height={height} role="dialog" width={width} x={x} y={y}>
      {children}
    </Root>
  );
}

const Root = styled(PositionedComponent)<Pick<WindowProps, 'background' | 'height' | 'width'>>(
  ({ background, height, width }) => ({
    backgroundImage: `url(${background})`,
    height,
    width,
  })
);
