import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { ScreenHeight, ScreenWidth } from '@heroesjs/hmm1-core';

interface Props {
  readonly background: string;
  readonly label?: string;
  readonly onClick?: () => void;
}

export const Screen = ({ background, children, label, onClick }: PropsWithChildren<Props>) => (
  <Root background={background} onClick={onClick}>
    {label && <h1>{label}</h1>}
    {children}
  </Root>
);

const Root = styled.div<Pick<Props, 'background'>>(({ background }) => ({
  backgroundImage: `url(${background})`,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
}));
