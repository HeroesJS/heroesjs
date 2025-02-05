import type { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { Backdrop } from '../Backdrop';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';

import background from './assets/background.jpg';

interface Props extends PositionProps {
  readonly label: string;
}

export const Menu = ({ children, label, x, y }: PropsWithChildren<Props>) => (
  <Backdrop>
    <Root aria-label={label} role="menu" x={x} y={y}>
      {children}
    </Root>
  </Backdrop>
);

const Root = styled(PositionedComponent)({
  backgroundImage: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%), 1px 0 #000',
  boxSizing: 'border-box',
  fontSize: 0,
  height: 410,
  padding: '45px 33px',
  width: 193,
});

export const menuItemStyle = css({
  height: 63,
  marginBottom: 3,
  width: 127,
});
