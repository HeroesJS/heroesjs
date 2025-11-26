import { createGlobalStyle } from 'styled-components';

import { MainScreen } from './MainScreen';
import { MainMenu } from './MainMenu';

const GlobalStyle = createGlobalStyle({
  body: {
    imageRendering: 'pixelated',
    margin: 0,
  },
});

export function App() {
  return (
    <>
      <GlobalStyle />
      <MainScreen>
        <MainMenu x={400} y={35} />
      </MainScreen>
    </>
  );
}
