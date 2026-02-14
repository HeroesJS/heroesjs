import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureScreen as AdventureScreenBase,
  GameOptionsWindow,
  ScenarioInfoWindow,
} from '@heroesjs/hmm1-adventure-ui';
import {
  GameDifficulty,
  MapDifficulty,
  MapSize,
  MovementSpeed,
  OpponentDifficulty,
  OpponentSettings,
  Scenario,
  SoundVolume,
} from '@heroesjs/hmm1-core';

export function AdventureScreen() {
  const navigate = useNavigate();

  const {
    autoSave,
    effectsVolume,
    movementSpeed,
    musicVolume,
    setAutoSave,
    setEffectsVolume,
    setMovementSpeed,
    setMusicVolume,
    setShowPath,
    setViewEnemyMovement,
    showPath,
    viewEnemyMovement,
  } = useGameSettings();

  const { difficultyRating, gameDifficulty, humanOpponentsCount, kingOfTheHill, opponents, scenario } =
    useScenarioInfo();

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
              autoSave={autoSave}
              effectsVolume={effectsVolume}
              movementSpeed={movementSpeed}
              musicVolume={musicVolume}
              onAutoSaveChange={setAutoSave}
              onEffectsVolumeChange={setEffectsVolume}
              onInfoClick={() => navigate('../scenario-info', { relative: 'path' })}
              onLoadGameClick={() => navigate('/load-game')}
              onMovementSpeedChange={setMovementSpeed}
              onMusicVolumeChange={setMusicVolume}
              onNewGameClick={() => navigate('/new-game')}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              onQuitClick={() => navigate('/')}
              onShowPathChange={setShowPath}
              onViewEnemyMovementChange={setViewEnemyMovement}
              open
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
            <ScenarioInfoWindow
              difficultyRating={difficultyRating}
              gameDifficulty={gameDifficulty}
              humanOpponentsCount={humanOpponentsCount}
              kingOfTheHill={kingOfTheHill}
              onOkayClick={() => navigate('..', { relative: 'path' })}
              open
              opponents={opponents}
              scenario={scenario}
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

interface UseGameSettingsResult {
  readonly autoSave: boolean;
  readonly effectsVolume: SoundVolume;
  readonly movementSpeed: MovementSpeed;
  readonly musicVolume: SoundVolume;
  readonly setAutoSave: (value: boolean) => void;
  readonly setEffectsVolume: (value: SoundVolume) => void;
  readonly setMovementSpeed: (value: MovementSpeed) => void;
  readonly setMusicVolume: (value: SoundVolume) => void;
  readonly setShowPath: (value: boolean) => void;
  readonly setViewEnemyMovement: (value: boolean) => void;
  readonly showPath: boolean;
  readonly viewEnemyMovement: boolean;
}

function useGameSettings(): UseGameSettingsResult {
  const [musicVolume, setMusicVolume] = useState(SoundVolume.On);
  const [effectsVolume, setEffectsVolume] = useState(SoundVolume.On);
  const [movementSpeed, setMovementSpeed] = useState(MovementSpeed.Gallop);
  const [autoSave, setAutoSave] = useState(true);
  const [showPath, setShowPath] = useState(true);
  const [viewEnemyMovement, setViewEnemyMovement] = useState(true);

  return {
    autoSave,
    effectsVolume,
    movementSpeed,
    musicVolume,
    setAutoSave,
    setEffectsVolume,
    setMovementSpeed,
    setMusicVolume,
    setShowPath,
    setViewEnemyMovement,
    showPath,
    viewEnemyMovement,
  };
}

interface UseScenarioInfoResult {
  readonly difficultyRating: number;
  readonly gameDifficulty: GameDifficulty;
  readonly humanOpponentsCount: number;
  readonly kingOfTheHill: boolean;
  readonly opponents: OpponentSettings;
  readonly scenario: Pick<Scenario, 'description' | 'difficulty' | 'name' | 'size'>;
}

function useScenarioInfo(): UseScenarioInfoResult {
  return {
    difficultyRating: 60,
    gameDifficulty: GameDifficulty.Normal,
    humanOpponentsCount: 0,
    kingOfTheHill: false,
    opponents: [OpponentDifficulty.Average, OpponentDifficulty.Average, OpponentDifficulty.Average],
    scenario: {
      description: 'The Griffons will protect you until you are ready to make your move.',
      difficulty: MapDifficulty.Easy,
      name: 'Claw ( Easy )',
      size: MapSize.Small,
    },
  };
}
