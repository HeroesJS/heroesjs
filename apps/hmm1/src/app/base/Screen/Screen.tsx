import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { ScreenHeight, ScreenWidth } from '../../core';

interface Props {
  readonly background: string;
  readonly label?: string;
  readonly onClick?: () => void;
}

export const Screen = ({ background, children, label, onClick }: PropsWithChildren<Props>) => (
  <Root aria-label={label} background={background} onClick={onClick}>
    {children}
  </Root>
);

const Root = styled.div<Pick<Props, 'background'>>(({ background }) => ({
  backgroundImage: `url(${background})`,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
}));
