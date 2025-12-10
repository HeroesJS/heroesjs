import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { CampaignMenu } from './CampaignMenu';
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
      <Routes>
        <Route
          element={
            <MainScreen>
              <MainMenu onNewGameClick={() => navigate('new-game')} x={400} y={35} />
            </MainScreen>
          }
          index
        />
        <Route path="new-game">
          <Route
            element={
              <MainScreen label="New Game Screen">
                <GameTypeMenu
                  onCampaignGameClick={() => navigate('new-game/campaign')}
                  onCancelClick={() => navigate('/')}
                  x={400}
                  y={35}
                />
              </MainScreen>
            }
            index
          />
          <Route
            element={
              <MainScreen label="New Campaign Game Screen">
                <CampaignMenu x={400} y={35} onCancelClick={() => navigate('/')} />
              </MainScreen>
            }
            path="campaign"
          />
        </Route>
      </Routes>
    </>
  );
}
