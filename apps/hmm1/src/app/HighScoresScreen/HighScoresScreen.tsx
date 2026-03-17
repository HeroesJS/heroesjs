import { HighScoresGameType } from '@heroesjs/hmm1-core';
import { HighScoresScreen as ScreenBase } from '@heroesjs/hmm1-main-ui';

import { selectHighScores, setGameType } from '../highScoresSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

interface HighScoresScreenProps {
  readonly onExitClick?: () => void;
}

export function HighScoresScreen({ onExitClick }: HighScoresScreenProps) {
  const dispatch = useAppDispatch();

  const highScores = useAppSelector(selectHighScores);

  const handleGameTypeChange = (value: HighScoresGameType) => dispatch(setGameType(value));

  return (
    <ScreenBase
      entries={highScores.scores}
      gameType={highScores.gameType}
      onExitClick={onExitClick}
      onGameTypeChange={handleGameTypeChange}
    />
  );
}
