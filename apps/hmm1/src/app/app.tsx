import { PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { AdventureScreen } from '@heroesjs/hmm1-adventure-ui';
import { defaultHighScores, defaultHighScoresGameType, MaxPlayerCount } from '@heroesjs/hmm1-core';
import { GlobalFontStyles, useModal } from '@heroesjs/hmm1-core-ui';

import { CampaignMenu } from './CampaignMenu';
import { CreditsScreen } from './CreditsScreen';
import { GameTypeMenu } from './GameTypeMenu';
import { HighScoresScreen as HighScoresScreenBase } from './HighScoresScreen';
import { MainMenu } from './MainMenu';
import { MainScreen } from './MainScreen';
import { ModemGameMenu } from './ModemGameMenu';
import { MultiPlayerGameTypeMenu } from './MultiPlayerGameTypeMenu';
import { NetworkGameMenu } from './NetworkGameMenu';
import { NewStandardGameScreen } from './NewStandardGameScreen';
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

  const navigateToMainScreen = () => navigate('/');

  const [WaitingForRingModal] = useModal();

  const [WaitingForConnectionModal] = useModal({
    children: (
      <>
        Waiting for other computer to log in to direct connection.
        <br />
        <br />
        Press 'CANCEL' to abort.
      </>
    ),
    onCancelClick: navigateToMainScreen,
    size: 2,
    type: 'cancel',
  });

  return (
    <>
      <GlobalStyle />
      <GlobalFontStyles />
      <Routes>
        <Route
          element={
            <MainScreen>
              <MainMenu
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
              <MainScreen label="New Game Screen">
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
              <MainScreen label="New Campaign Game Screen">
                <CampaignMenu x={400} y={35} onCancelClick={navigateToMainScreen} />
              </MainScreen>
            }
            path="campaign"
          />
          <Route path="multi-player">
            <Route
              element={
                <MainScreen label="New Multi-Player Game Screen">
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
                <MainScreen label="New Hot Seat Game Screen">
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
                <MainScreen label="New Network Game Screen">
                  <NetworkGameMenu onCancelClick={navigateToMainScreen} x={400} y={35} />
                </MainScreen>
              }
              path="network"
            />
            <Route path="modem">
              <Route
                element={
                  <MainScreen label="New Modem Game Screen">
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
                  <MainScreen label="Join Modem Game Screen">
                    <WaitingForRingModal open size={1} type="cancel" onCancelClick={navigateToMainScreen}>
                      Waiting for ring...
                    </WaitingForRingModal>
                  </MainScreen>
                }
                path="join"
              />
            </Route>
            <Route path="direct-connect">
              <Route
                element={
                  <MainScreen label="New Direct Connect Game Screen">
                    <ModemGameMenu
                      onGuestClick={() => navigate('/new-game/multi-player/direct-connect/join')}
                      onHostClick={() => navigate('/new-game/multi-player/direct-connect/host')}
                      onCancelClick={navigateToMainScreen}
                      x={400}
                      y={35}
                    />
                  </MainScreen>
                }
                index
              />
              <Route
                element={
                  <MainScreen label="Host Direct Connect Game Screen">
                    <WaitingForConnectionModal open />
                  </MainScreen>
                }
                path="host"
              />
              <Route
                element={
                  <MainScreen label="Join Direct Connect Game Screen">
                    <WaitingForConnectionModal open />
                  </MainScreen>
                }
                path="join"
              />
            </Route>
          </Route>
        </Route>
        <Route element={<AdventureScreen />} path="adventure" />
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
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [dialing, setDialing] = useState(false);

  const [EnterTelephoneNumberModal] = useModal();
  const [DialingModal] = useModal();

  return (
    <MainScreen label="Host Modem Game Screen">
      {dialing ? (
        <DialingModal onCancelClick={onCancelClick} open size={1} type="cancel">
          Dialing... {telephoneNumber}
        </DialingModal>
      ) : (
        <EnterTelephoneNumberModal
          inputLabel="Telephone Number"
          inputValue={telephoneNumber}
          onConfirmClick={() => setDialing(true)}
          onInputValueChange={(value) => {
            setTelephoneNumber(value);

            setDialing(true);
          }}
          open
          showInput
          size={2}
          type="okay"
          y={21}
        >
          Please enter the telephone number.
        </EnterTelephoneNumberModal>
      )}
    </MainScreen>
  );
}

let lastViewedHighScores = defaultHighScoresGameType;

interface HighScoresScreenProps {
  readonly onExitClick?: () => void;
}

function HighScoresScreen({ onExitClick }: HighScoresScreenProps) {
  const [gameType, setGameType] = useState(lastViewedHighScores);

  useEffect(() => {
    lastViewedHighScores = gameType;
  }, [gameType]);

  return (
    <HighScoresScreenBase
      entries={defaultHighScores}
      gameType={gameType}
      onExitClick={onExitClick}
      onGameTypeChange={setGameType}
    />
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
