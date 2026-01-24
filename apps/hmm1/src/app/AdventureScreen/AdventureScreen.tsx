import { Route, Routes, useNavigate } from 'react-router';

import {
  AdventureButtons,
  AdventureScreen as AdventureScreenBase,
  GameOptionsWindow,
} from '@heroesjs/hmm1-adventure-ui';

export function AdventureScreen() {
  const navigate = useNavigate();

  return (
    <AdventureScreenBase>
      <AdventureButtons onGameOptionsClick={() => navigate('game-options')} x={480} y={320} />
      <Routes>
        <Route
          element={<GameOptionsWindow onNewGameClick={() => navigate('/new-game')} open x={160} y={10} />}
          path="game-options"
        />
      </Routes>
    </AdventureScreenBase>
  );
}
