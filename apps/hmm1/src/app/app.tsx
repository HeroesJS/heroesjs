import { type ComponentProps, PropsWithChildren, useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useNavigate, useParams } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import { defaultHighScores, defaultHighScoresGameType, MaxPlayerCount } from '@heroesjs/hmm1-core';
import { GlobalFontStyles, Modal } from '@heroesjs/hmm1-core-ui';

import { AdventureScreen } from './AdventureScreen';
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
                  onCancelClick={() => navigate('/')}
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
                <NewStandardGameScreen onCancelClick={() => navigate('/')} onOkayClick={() => navigate('/adventure')} />
              </PlayerCountProtectedRoute>
            }
            path="standard/:playerCount?"
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
                  <PlayerCountMenu
                    onCancelClick={() => navigate('/')}
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
                  <NetworkGameMenu onCancelClick={() => navigate('/')} x={400} y={35} />
                </MainScreen>
              }
              path="network"
            />
            <Route path="modem">
              <Route
                element={
                  <MainScreen label="New Modem Game Screen">
                    <ModemGameMenu
                      onCancelClick={() => navigate('/')}
                      onGuestClick={() => navigate('/new-game/multi-player/modem/join')}
                      onHostClick={() => navigate('/new-game/multi-player/modem/host')}
                      x={400}
                      y={35}
                    />
                  </MainScreen>
                }
                index
              />
              <Route element={<HostModemGameScreen />} path="host" />
              <Route
                element={
                  <MainScreen label="Join Modem Game Screen">
                    <Modal open size={1} type="cancel" onCancelClick={() => navigate('/')} x={177} y={29}>
                      Waiting for ring...
                    </Modal>
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
                  <MainScreen label="Host Direct Connect Game Screen">
                    <WaitingForConnectionModal onCancelClick={() => navigate('/')} open x={177} y={29} />
                  </MainScreen>
                }
                path="host"
              />
              <Route
                element={
                  <MainScreen label="Join Direct Connect Game Screen">
                    <WaitingForConnectionModal onCancelClick={() => navigate('/')} open x={177} y={29} />
                  </MainScreen>
                }
                path="join"
              />
            </Route>
          </Route>
        </Route>
        <Route element={<AdventureScreen />} path="adventure" />
        <Route element={<HighScoresScreen />} path="high-scores" />
        <Route element={<CreditsScreen onClick={() => navigate('/')} />} path="credits" />
      </Routes>
    </>
  );
}

function HostModemGameScreen() {
  const navigate = useNavigate();

  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [dialing, setDialing] = useState(false);

  return (
    <MainScreen label="Host Modem Game Screen">
      {dialing ? (
        <Modal onCancelClick={() => navigate('/')} open size={1} type="cancel" x={177} y={29}>
          Dialing... {telephoneNumber}
        </Modal>
      ) : (
        <Modal
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
          x={177}
          y={21}
        >
          Please enter the telephone number.
        </Modal>
      )}
    </MainScreen>
  );
}

type WaitingForConnectionModalProps = Pick<ComponentProps<typeof Modal>, 'onCancelClick' | 'open' | 'x' | 'y'>;

function WaitingForConnectionModal(props: WaitingForConnectionModalProps) {
  return (
    <Modal {...props} size={2} type="cancel">
      Waiting for other computer to log in to direct connection.
      <br />
      <br />
      Press 'CANCEL' to abort.
    </Modal>
  );
}

let lastViewedHighScores = defaultHighScoresGameType;

function HighScoresScreen() {
  const navigate = useNavigate();

  const [gameType, setGameType] = useState(lastViewedHighScores);

  useEffect(() => {
    lastViewedHighScores = gameType;
  }, [gameType]);

  return (
    <HighScoresScreenBase
      entries={defaultHighScores}
      gameType={gameType}
      onExitClick={() => navigate('/')}
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
