import { useState } from 'react';

import { defaultGameDifficulty, defaultPlayerColor, getDefaultOpponentSettings } from '../core';
import { MainScreen } from '../MainScreen';
import { NewStandardGameWindow } from '../NewStandardGameWindow';

interface NewStandardGameScreenProps {
  readonly onCancelClick?: () => void;
}

export function NewStandardGameScreen({ onCancelClick }: NewStandardGameScreenProps) {
  const [gameDifficulty, setGameDifficulty] = useState(defaultGameDifficulty);
  const [opponentSettings, setOpponentSettings] = useState(getDefaultOpponentSettings(0));
  const [playerColor, setPlayerColor] = useState(defaultPlayerColor);
  const [kingOfTheHill, setKingOfTheHill] = useState(false);

  return (
    <MainScreen label="New Standard Game">
      <NewStandardGameWindow
        gameDifficulty={gameDifficulty}
        kingOfTheHill={kingOfTheHill}
        onCancelClick={onCancelClick}
        onGameDifficultyChange={setGameDifficulty}
        onKingOfTheHillChange={setKingOfTheHill}
        onOpponentSettingsChange={setOpponentSettings}
        onPlayerColorChange={setPlayerColor}
        opponentSettings={opponentSettings}
        playerColor={playerColor}
        x={310}
        y={14}
      />
    </MainScreen>
  );
}
