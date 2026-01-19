import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionedComponent, type PositionProps } from '../PositionedComponent';

interface WindowProps extends PositionProps {
  readonly background: string;
  readonly height: number;
  readonly label: string;
  readonly open: boolean;
  readonly width: number;
}

export function Window({ background, children, height, label, open, width, x, y }: PropsWithChildren<WindowProps>) {
  if (!open) {
    return null;
  }

  return (
    <Root aria-label={label} background={background} height={height} role="region" width={width} x={x} y={y}>
      {children}
    </Root>
  );
}

const Root = styled(PositionedComponent)<Pick<WindowProps, 'background' | 'height' | 'width'>>(
  ({ background, height, width }) => ({
    background: `url(${background})`,
    height,
    width,
  })
);
