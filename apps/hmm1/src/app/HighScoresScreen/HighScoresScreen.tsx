import { useEffect, useState } from 'react';

import { defaultHighScores, defaultHighScoresGameType } from '@heroesjs/hmm1-core';
import { HighScoresScreen as ScreenBase } from '@heroesjs/hmm1-main-ui';

let lastViewedHighScores = defaultHighScoresGameType;

interface HighScoresScreenProps {
  readonly onExitClick?: () => void;
}

export function HighScoresScreen({ onExitClick }: HighScoresScreenProps) {
  const [gameType, setGameType] = useState(lastViewedHighScores);

  useEffect(() => {
    lastViewedHighScores = gameType;
  }, [gameType]);

  return (
    <ScreenBase
      entries={defaultHighScores}
      gameType={gameType}
      onExitClick={onExitClick}
      onGameTypeChange={setGameType}
    />
  );
}
