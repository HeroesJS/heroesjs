import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { background } from './assets';
import { PositionedComponent } from '../PositionedComponent';

interface MenuProps {
  readonly label: string;
  readonly x?: number;
  readonly y?: number;
}

export function Menu({ label, children, x, y }: PropsWithChildren<MenuProps>) {
  return (
    <Root aria-label={label} role="menu" x={x} y={y}>
      {children}
    </Root>
  );
}

const Root = styled(PositionedComponent)({
  background: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%)',
  boxSizing: 'border-box',
  height: 410,
  padding: '45px 33px',
  width: 194,
  '> *': {
    marginBottom: 3,
  },
});

export const MenuItem = styled('div')({
  height: 63,
  width: 127,
});
