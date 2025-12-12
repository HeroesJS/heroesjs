import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { CampaignMenu } from './CampaignMenu';
import { GameTypeMenu } from './GameTypeMenu';
import { MainMenu } from './MainMenu';
import { MainScreen } from './MainScreen';
import { ModemGameMenu } from './ModemGameMenu';
import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';
import { NetworkGameMenu } from './NetworkGameMenu';
import { PlayerCountMenu } from './PlayerCountMenu';

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
                  onMultiPlayerGameClick={() => navigate('new-game/multi-player')}
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
          <Route path="multi-player">
            <Route
              element={
                <MainScreen label="New Multi-Player Game Screen">
                  <MultiPlayerGameTypeMenu
                    onCancelClick={() => navigate('/')}
                    onDirectConnectClick={() => navigate('/new-game/multi-player/direct-connect')}
                    onHotSeatClick={() => navigate('/new-game/multi-player/hot-seat')}
                    onModemClick={() => navigate('/new-game/multi-player/modem')}
                    onNetworkClick={() => navigate('/new-game/multi-player/network')}
                    x={400}
                    y={35}
                  />
                </MainScreen>
              }
              index
            />
            <Route
              element={
                <MainScreen label="New Hot Seat Game Screen">
                  <PlayerCountMenu onCancelClick={() => navigate('/')} x={400} y={35} />
                </MainScreen>
              }
              path="hot-seat"
            />
            <Route
              element={
                <MainScreen label="New Network Game Screen">
                  <NetworkGameMenu onCancelClick={() => navigate('/')} x={400} y={35} />
                </MainScreen>
              }
              path="network"
            />
            <Route
              element={
                <MainScreen label="New Modem Game Screen">
                  <ModemGameMenu onCancelClick={() => navigate('/')} x={400} y={35} />
                </MainScreen>
              }
              path="modem"
            />
            <Route element={<MainScreen label="New Direct Connect Game Screen" />} path="direct-connect" />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
