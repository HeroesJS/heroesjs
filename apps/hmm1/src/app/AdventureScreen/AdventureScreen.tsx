import { Route, Routes, useNavigate } from 'react-router';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureScreen as AdventureScreenBase,
  GameOptionsWindow,
  ScenarioInfoWindow,
} from '@heroesjs/hmm1-adventure-ui';

import { changeGameSettings, selectGameSettings } from '../gameSettingsSlice';
import { selectScenarioInfo } from '../gameSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export function AdventureScreen() {
  const navigate = useNavigate();

  const gameSettings = useAppSelector(selectGameSettings);
  const scenarioInfo = useAppSelector(selectScenarioInfo);

  const dispatch = useAppDispatch();

  return (
    <AdventureScreenBase>
      <AdventureButtons
        onAdventureOptionsClick={() => navigate('adventure-options')}
        onGameOptionsClick={() => navigate('game-options')}
        x={480}
        y={320}
      />
      <Routes>
        <Route
          element={
            <AdventureOptionsWindow onOkayClick={() => navigate('..', { relative: 'path' })} open x={160} y={40} />
          }
          path="adventure-options"
        />
        <Route
          element={
            <GameOptionsWindow
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/load-game')}
              onNewGameClick={() => navigate('/new-game')}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              onQuitClick={() => navigate('/')}
              onSettingsChange={(value) => dispatch(changeGameSettings(value))}
              open
              settings={gameSettings}
              x={160}
              y={10}
            />
          }
          path="game-options"
        />
        <Route
          element={
            <ScenarioInfoWindow
              difficultyRating={scenarioInfo.difficultyRating}
              gameDifficulty={scenarioInfo.gameDifficulty}
              humanOpponentsCount={scenarioInfo.humanPlayersCount}
              kingOfTheHill={scenarioInfo.kingOfTheHill}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              open
              opponents={scenarioInfo.opponents}
              playerColor={scenarioInfo.playerColor}
              scenario={scenarioInfo.map}
              x={159}
              y={14}
            />
          }
          path="scenario-info"
        />
      </Routes>
    </AdventureScreenBase>
  );
}
