import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ScreenHeight, ScreenWidth } from '../core';

interface Props {
  readonly background: string;
  readonly onClick?: () => void;
}

export const Screen = ({ background, children, onClick }: PropsWithChildren<Props>) => (
  <Root background={background} onClick={onClick}>
    {children}
  </Root>
);

const Root = styled.div<Pick<Props, 'background'>>(({ background }) => ({
  backgroundImage: `url(${background})`,
  fontSize: 0,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
}));
