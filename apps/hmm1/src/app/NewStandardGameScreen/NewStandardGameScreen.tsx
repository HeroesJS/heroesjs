import { useState } from 'react';

import { defaultGameDifficulty } from '../core';
import { MainScreen } from '../MainScreen';
import { NewStandardGameWindow } from '../NewStandardGameWindow';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  const [gameDifficulty, setGameDifficulty] = useState(defaultGameDifficulty);

  return (
    <MainScreen label="New Standard Game">
      <NewStandardGameWindow
        gameDifficulty={gameDifficulty}
        onCancelClick={onCancelClick}
        onGameDifficultyChange={setGameDifficulty}
        x={310}
        y={14}
      />
    </MainScreen>
  );
}
