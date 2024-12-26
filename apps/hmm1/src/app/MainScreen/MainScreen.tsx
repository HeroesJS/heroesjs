import type { PropsWithChildren } from 'react';
import background from './assets/background.jpg';
import styled from 'styled-components';
import { ScreenHeight, ScreenWidth } from '../core';

export const MainScreen = ({ children }: PropsWithChildren) => <Root>{children}</Root>;

const Root = styled.div({
  backgroundImage: `url(${background})`,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
});
