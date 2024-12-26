import styled, { createGlobalStyle } from 'styled-components';
import { MainMenu } from './MainMenu';
import { MainScreen } from './MainScreen';
import { ScreenHeight, ScreenWidth } from './core';

export function App() {
  return (
    <>
      <AppStyle />
      <Root id="app">
        <MainScreen>
          <MainMenu x={400} y={35} />
        </MainScreen>
      </Root>
    </>
  );
}

const AppStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Root = styled.div({
  height: ScreenHeight,
  imageRendering: 'pixelated',
  width: ScreenWidth,
});
