import background from './assets/background.jpg';
import styled from 'styled-components';
import { ScreenHeight, ScreenWidth } from '../core';
import { MainMenu } from '../MainMenu';

export const MainScreen = () => (
  <Root>
    <MainMenu x={400} y={35} />
  </Root>
);

const Root = styled.div({
  backgroundImage: `url(${background})`,
  height: ScreenHeight,
  position: 'relative',
  width: ScreenWidth,
});
