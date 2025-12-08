import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { GameTypeMenu } from './GameTypeMenu';
import { MainMenu } from './MainMenu';
import { MainScreen } from './MainScreen';

const GlobalStyle = createGlobalStyle({
  body: {
    imageRendering: 'pixelated',
    margin: 0,
  },
});

export function App() {
  const navigate = useNavigate();

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
        <Routes>
          <Route element={<MainMenu onNewGameClick={() => navigate('new-game')} x={400} y={35} />} index />
          <Route
            element={<GameTypeMenu label="New Game Menu" onCancelClick={() => navigate('/')} x={400} y={35} />}
            path="new-game"
          />
        </Routes>
      </MainScreen>
    </>
  );
}
