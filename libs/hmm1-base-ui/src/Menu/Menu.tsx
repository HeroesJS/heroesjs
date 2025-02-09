import type { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import { Backdrop } from '../Backdrop';
import { PositionedComponent, type PositionProps } from '../PositionedComponent';

import * as assets from './assets';

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
  backgroundColor: '#000',
  backgroundImage: `url(${assets.background})`,
  backgroundRepeat: 'no-repeat',
  boxShadow: '17px 16px rgba(0 0 0 / 30%)',
  boxSizing: 'border-box',
  fontSize: 0,
  height: 410,
  padding: '45px 33px',
  width: 194,
});

export const menuItemStyle = css({
  height: 63,
  marginBottom: 3,
  width: 127,
});
