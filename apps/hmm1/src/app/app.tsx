import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import { MainMenu } from './MainMenu';
import { MainScreen } from './MainScreen';

const GlobalStyle = createGlobalStyle({
  body: {
    imageRendering: 'pixelated',
    margin: 0,
  },
});

export function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainScreen>
        <MainMenu x={400} y={35} />
      </MainScreen>
    </>
  );
}
