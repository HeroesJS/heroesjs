import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { PositionProps } from '../../core';

import background from './assets/background.jpg';

interface Props extends PositionProps {
  readonly label: string;
}

export const Menu = ({ label, children, x, y }: PropsWithChildren<Props>) => (
  <Root aria-label={label} role="menu" x={x} y={y}>
    {children}
  </Root>
);

const Root = styled.div<Pick<Props, 'x' | 'y'>>(({ x, y }) => ({
  backgroundImage: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%), 1px 0 black',
  boxSizing: 'border-box',
  fontSize: 0,
  height: 410,
  left: x,
  padding: '45px 33px',
  position: 'relative',
  top: y,
  width: 193,
}));

export const MenuItem = (props: PropsWithChildren) => <ItemRoot {...props} />;

const ItemRoot = styled.div({
  height: 63,
  marginBottom: 3,
  width: 127,
});
