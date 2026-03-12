import { PropsWithChildren, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { MaxPlayerCount } from '@heroesjs/hmm1-core';
import { GlobalFontStyles } from '@heroesjs/hmm1-core-ui';
import {
  CampaignMenu,
  CreditsScreen,
  DialingTelephoneNumberModal,
  EnterTelephoneNumberModal,
  GameTypeMenu,
  MainMenu,
  MainScreen,
  ModemGameMenu,
  MultiPlayerGameTypeMenu,
  NetworkGameMenu,
  PlayerCountMenu,
  WaitingForDirectConnectionModal,
  WaitingForRingModal,
} from '@heroesjs/hmm1-main-ui';

import { AdventureScreen } from './AdventureScreen';
import { HighScoresScreen } from './HighScoresScreen';
import { NewStandardGameScreen } from './NewStandardGameScreen';

const GlobalStyle = createGlobalStyle({
  body: {
    imageRendering: 'pixelated',
    margin: 0,
  },
});

export function App() {
  const navigate = useNavigate();
  const { t } = useTranslation('app', { keyPrefix: 'component' });

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const navigateToMainScreen = () => navigate('/');

  return (
    <>
      <GlobalStyle />
      <GlobalFontStyles />
      <Routes>
        <Route
          element={
            <MainScreen>
              <MainMenu
                onLoadGameClick={() => navigate('load-game')}
                onNewGameClick={() => navigate('new-game')}
                onViewCreditsClick={() => navigate('credits')}
                onViewHighScoresClick={() => navigate('high-scores')}
                x={400}
                y={35}
              />
            </MainScreen>
          }
          index
        />
        <Route path="new-game">
          <Route
            element={
              <MainScreen label={t(($) => $.newGameScreen.title)}>
                <GameTypeMenu
                  onCampaignGameClick={() => navigate('new-game/campaign')}
                  onCancelClick={navigateToMainScreen}
                  onMultiPlayerGameClick={() => navigate('new-game/multi-player')}
                  onStandardGameClick={() => navigate('new-game/standard')}
                  x={400}
                  y={35}
                />
              </MainScreen>
            }
            index
          />
          <Route
            element={
              <PlayerCountProtectedRoute navigateTo="/">
                <NewStandardGameScreen
                  onCancelClick={navigateToMainScreen}
                  onOkayClick={() => navigate('/adventure')}
                />
              </PlayerCountProtectedRoute>
            }
            path="standard/:playerCount?"
          />
          <Route
            element={
              <MainScreen label={t(($) => $.newCampaignGameScreen.title)}>
                <CampaignMenu onCancelClick={navigateToMainScreen} x={400} y={35} />
              </MainScreen>
            }
            path="campaign"
          />
          <Route path="multi-player">
            <Route
              element={
                <MainScreen label={t(($) => $.newMultiPlayerGameScreen.title)}>
                  <MultiPlayerGameTypeMenu
                    onCancelClick={navigateToMainScreen}
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
                <MainScreen label={t(($) => $.newHotSeatGameScreen.title)}>
                  <PlayerCountMenu
                    onCancelClick={navigateToMainScreen}
                    onValueClick={(count) => navigate(`/new-game/standard/${count}`)}
                    x={400}
                    y={35}
                  />
                </MainScreen>
              }
              path="hot-seat"
            />
            <Route
              element={
                <MainScreen label={t(($) => $.newNetworkGameScreen.title)}>
                  <NetworkGameMenu onCancelClick={navigateToMainScreen} x={400} y={35} />
                </MainScreen>
              }
              path="network"
            />
            <Route path="modem">
              <Route
                element={
                  <MainScreen label={t(($) => $.newModemGameScreen.title)}>
                    <ModemGameMenu
                      onCancelClick={navigateToMainScreen}
                      onGuestClick={() => navigate('/new-game/multi-player/modem/join')}
                      onHostClick={() => navigate('/new-game/multi-player/modem/host')}
                      x={400}
                      y={35}
                    />
                  </MainScreen>
                }
                index
              />
              <Route element={<HostModemGameScreen onCancelClick={navigateToMainScreen} />} path="host" />
              <Route
                element={
                  <MainScreen label={t(($) => $.joinModemGameScreen.title)}>
                    <WaitingForRingModal onCancelClick={navigateToMainScreen} open x={177} y={29} />
                  </MainScreen>
                }
                path="join"
              />
            </Route>
            <Route path="direct-connect">
              <Route
                element={
                  <MainScreen label={t(($) => $.newDirectConnectGameScreen.title)}>
                    <ModemGameMenu
                      onCancelClick={navigateToMainScreen}
                      onGuestClick={() => navigate('/new-game/multi-player/direct-connect/join')}
                      onHostClick={() => navigate('/new-game/multi-player/direct-connect/host')}
                      x={400}
                      y={35}
                    />
                  </MainScreen>
                }
                index
              />
              <Route
                element={
                  <MainScreen label={t(($) => $.hostDirectConnectGameScreen.title)}>
                    <WaitingForDirectConnectionModal onCancelClick={navigateToMainScreen} open x={177} y={29} />
                  </MainScreen>
                }
                path="host"
              />
              <Route
                element={
                  <MainScreen label={t(($) => $.joinDirectConnectGameScreen.title)}>
                    <WaitingForDirectConnectionModal onCancelClick={navigateToMainScreen} open x={177} y={29} />
                  </MainScreen>
                }
                path="join"
              />
            </Route>
          </Route>
        </Route>
        <Route
          element={
            <MainScreen label={t(($) => $.loadGameScreen.title)}>
              <GameTypeMenu onCancelClick={navigateToMainScreen} x={400} y={35} />
            </MainScreen>
          }
          path="load-game"
        />
        <Route element={<AdventureScreen />} path="adventure/*" />
        <Route element={<HighScoresScreen onExitClick={navigateToMainScreen} />} path="high-scores" />
        <Route element={<CreditsScreen onClick={navigateToMainScreen} />} path="credits" />
      </Routes>
    </>
  );
}

interface HostModemGameScreenProps {
  readonly onCancelClick?: () => void;
}

function HostModemGameScreen({ onCancelClick }: HostModemGameScreenProps) {
  const { t } = useTranslation('app', { keyPrefix: 'component.hostModemGameScreen' });

  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [dialing, setDialing] = useState(false);

  return (
    <MainScreen label={t(($) => $.title)}>
      {dialing ? (
        <DialingTelephoneNumberModal onCancelClick={onCancelClick} open value={telephoneNumber} x={177} y={29} />
      ) : (
        <EnterTelephoneNumberModal
          onChange={(value) => {
            setTelephoneNumber(value);

            setDialing(true);
          }}
          onConfirmClick={() => setDialing(true)}
          open
          value={telephoneNumber}
          x={177}
          y={21}
        />
      )}
    </MainScreen>
  );
}

interface PlayerCountProtectedRouteProps {
  readonly navigateTo: string;
}

function PlayerCountProtectedRoute({ children, navigateTo }: PropsWithChildren<PlayerCountProtectedRouteProps>) {
  const params = useParams<'playerCount'>();

  const playerCount = Number(params.playerCount ?? 1);

  if (isNaN(playerCount) || playerCount < 1 || playerCount > MaxPlayerCount) {
    return <Navigate to={navigateTo} />;
  }

  return children ? children : <Outlet />;
}
