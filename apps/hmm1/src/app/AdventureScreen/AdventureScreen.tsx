import { Route, Routes, useNavigate } from 'react-router';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureScreen as AdventureScreenBase,
  GameOptionsWindow,
} from '@heroesjs/hmm1-adventure-ui';
import { MovementSpeed, SoundVolume } from '@heroesjs/hmm1-core';
import { useState } from 'react';

export function AdventureScreen() {
  const navigate = useNavigate();

  const [musicVolume, setMusicVolume] = useState(SoundVolume.On);
  const [effectsVolume, setEffectsVolume] = useState(SoundVolume.On);
  const [movementSpeed, setMovementSpeed] = useState(MovementSpeed.Gallop);
  const [autoSave, setAutoSave] = useState(true);
  const [showPath, setShowPath] = useState(true);
  const [viewEnemyMovement, setViewEnemyMovement] = useState(true);

  return (
    <AdventureScreenBase>
      <AdventureButtons
        onAdventureOptionsClick={() => navigate('adventure-options')}
        onGameOptionsClick={() => navigate('game-options')}
        x={480}
        y={320}
      />
      <Routes>
        <Route element={<AdventureOptionsWindow open x={160} y={40} />} path="adventure-options" />
        <Route
          element={
            <GameOptionsWindow
              autoSave={autoSave}
              effectsVolume={effectsVolume}
              movementSpeed={movementSpeed}
              musicVolume={musicVolume}
              onAutoSaveChange={setAutoSave}
              onEffectsVolumeChange={setEffectsVolume}
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
      </Routes>
    </AdventureScreenBase>
  );
}
