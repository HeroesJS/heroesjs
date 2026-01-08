import { useState } from 'react';

import { defaultGameDifficulty, getDefaultOpponentSettings } from '../core';
import { MainScreen } from '../MainScreen';
import { NewStandardGameWindow } from '../NewStandardGameWindow';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  const [gameDifficulty, setGameDifficulty] = useState(defaultGameDifficulty);
  const [opponentSettings, setOpponentSettings] = useState(getDefaultOpponentSettings(0));

  return (
    <MainScreen label="New Standard Game">
      <NewStandardGameWindow
        gameDifficulty={gameDifficulty}
        onCancelClick={onCancelClick}
        onGameDifficultyChange={setGameDifficulty}
        onOpponentSettingsChange={setOpponentSettings}
        opponentSettings={opponentSettings}
        x={310}
        y={14}
      />
    </MainScreen>
  );
}
