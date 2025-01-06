import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { withPosition } from '../withPosition';

import background from './assets/background.jpg';

interface Props {
  readonly className?: string;
  readonly label: string;
}

export const Menu = withPosition(({ children, className, label }: PropsWithChildren<Props>) => (
  <Root aria-label={label} className={className} role="menu">
    {children}
  </Root>
));

const Root = styled.div({
  backgroundImage: `url(${background})`,
  boxShadow: '17px 16px rgba(0 0 0 / 30%), 1px 0 black',
  boxSizing: 'border-box',
  fontSize: 0,
  height: 410,
  padding: '45px 33px',
  width: 193,
});

export const MenuItem = (props: PropsWithChildren) => <ItemRoot {...props} />;

const ItemRoot = styled.div({
  height: 63,
  marginBottom: 3,
  width: 127,
});
