import { Route, Routes, useNavigate } from 'react-router';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureScreen as AdventureScreenBase,
  GameOptionsWindow,
  ScenarioInfoWindow,
} from '@heroesjs/hmm1-adventure-ui';

import { selectGameSettings, updateGameSettings } from '../gameSettingsSlice';
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
              autoSave={gameSettings.autoSave}
              effectsVolume={gameSettings.effectsVolume}
              movementSpeed={gameSettings.movementSpeed}
              musicVolume={gameSettings.musicVolume}
              onAutoSaveChange={(autoSave) =>
                dispatch(
                  updateGameSettings({
                    autoSave,
                  })
                )
              }
              onEffectsVolumeChange={(effectsVolume) =>
                dispatch(
                  updateGameSettings({
                    effectsVolume,
                  })
                )
              }
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/load-game')}
              onMovementSpeedChange={(movementSpeed) =>
                dispatch(
                  updateGameSettings({
                    movementSpeed,
                  })
                )
              }
              onMusicVolumeChange={(musicVolume) =>
                dispatch(
                  updateGameSettings({
                    musicVolume,
                  })
                )
              }
              onNewGameClick={() => navigate('/new-game')}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              onQuitClick={() => navigate('/')}
              onShowPathChange={(showPath) =>
                dispatch(
                  updateGameSettings({
                    showPath,
                  })
                )
              }
              onViewEnemyMovementChange={(viewEnemyMovement) =>
                dispatch(
                  updateGameSettings({
                    viewEnemyMovement,
                  })
                )
              }
              open
              showPath={gameSettings.showPath}
              viewEnemyMovement={gameSettings.viewEnemyMovement}
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
