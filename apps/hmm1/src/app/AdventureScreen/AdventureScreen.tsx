import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureWindow,
  CampaignScenarioInfoWindow,
  GameOptionsWindow,
  HeroLocator,
  HeroWindow,
  Locator,
  StandardScenarioInfoWindow,
  TownLocator,
} from '@heroesjs/hmm1-adventure-ui';
import {
  campaignScenarios,
  GameDifficulty,
  HeroId,
  MovementSpeed,
  OpponentDifficulty,
  PlayerColor,
  scenarios,
  type SoundVolume,
  Town,
} from '@heroesjs/hmm1-core';

import { FileSelectorWindow } from '../FileSelectorWindow';

export const AdventureScreen = () => {
  const [musicVolume, setMusicVolume] = useState<SoundVolume>(10);
  const [effectsVolume, setEffectsVolume] = useState<SoundVolume>(10);
  const [movementSpeed, setMovementSpeed] = useState(MovementSpeed.Trot);
  const [autoSave, setAutoSave] = useState(true);
  const [showPath, setShowPath] = useState(true);
  const [viewEnemyMovement, setViewEnemyMovement] = useState(true);

  const navigate = useNavigate();

  const scenario = scenarios[0];

  return (
    <AdventureWindow
      renderActionButtons={() => (
        <AdventureButtons
          moveDisabled
          onAdventureOptionsClick={() => navigate('adventure-options')}
          onGameOptionsClick={() => navigate('game-options')}
        />
      )}
      renderHeroLocators={() => (
        <Locator onClick={() => navigate('hero')} selected>
          <HeroLocator hero={HeroId.Dimitri} mobility={14} x={5} y={5} />
        </Locator>
      )}
      renderTownLocators={() => (
        <Locator>
          <TownLocator castle town={Town.Farm} />
        </Locator>
      )}
    >
      <Routes>
        <Route element={<HeroWindow onExitClick={() => navigate('..', { relative: 'path' })} />} path="hero" />
        <Route
          element={
            <AdventureOptionsWindow onConfirmClick={() => navigate('..', { relative: 'path' })} x={160} y={40} />
          }
          path="adventure-options"
        />
        <Route
          element={
            <GameOptionsWindow
              autoSave={autoSave}
              effectsVolume={effectsVolume}
              movementSpeed={movementSpeed}
              musicVolume={musicVolume}
              onAutoSaveChange={setAutoSave}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              onEffectsVolumeChange={setEffectsVolume}
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/game/load')}
              onMovementSpeedChange={setMovementSpeed}
              onMusicVolumeChange={setMusicVolume}
              onNewGameClick={() => navigate('/game/new')}
              onQuitClick={() => navigate('/')}
              onSaveGameClick={() => navigate('../save-game', { relative: 'path' })}
              onShowPathChange={setShowPath}
              onViewEnemyMovementChange={setViewEnemyMovement}
              showPath={showPath}
              viewEnemyMovement={viewEnemyMovement}
              x={160}
              y={10}
            />
          }
          path="game-options"
        />
        <Route
          element={
            <FileSelectorWindow
              onCancelClick={() => navigate('..', { relative: 'path' })}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
            />
          }
          path="save-game"
        />
        <Route
          element={
            <StandardScenarioInfoWindow
              gameDifficulty={GameDifficulty.Normal}
              kingOfTheHill={false}
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              opponentSettings={[OpponentDifficulty.Average, OpponentDifficulty.Average, OpponentDifficulty.Average]}
              playerColor={PlayerColor.Blue}
              scenario={scenario}
              x={159}
              y={14}
            />
          }
          path="scenario-info"
        />
        <Route
          element={
            <CampaignScenarioInfoWindow
              allowRestart
              onConfirmClick={() => navigate('..', { relative: 'path' })}
              onRestartClick={() => navigate('/adventure')}
              scenario={campaignScenarios[0]}
              x={105}
              y={96}
            />
          }
          path="campaign-scenario-info"
        />
      </Routes>
    </AdventureWindow>
  );
};
