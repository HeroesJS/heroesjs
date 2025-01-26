import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  AdventureButtons,
  AdventureOptionsWindow,
  AdventureWindow,
  HeroLocator,
  Locator,
  StandardScenarioInfoWindow,
  TownLocator,
} from '@heroesjs/hmm1-adventure-ui';
import { GameDifficulty, HeroId, OpponentDifficulty, PlayerColor, scenarios, Town } from '@heroesjs/hmm1-core';

export const AdventureScreen = () => {
  const navigate = useNavigate();

  const scenario = scenarios[0];

  return (
    <AdventureWindow
      renderActionButtons={() => (
        <AdventureButtons moveDisabled onAdventureOptionsClick={() => navigate('adventure-options')} />
      )}
      renderHeroLocators={() => (
        <Locator selected>
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
        <Route
          element={<AdventureOptionsWindow onConfirmClick={() => navigate(-1)} x={160} y={40} />}
          path="adventure-options"
        />
        <Route
          element={
            <StandardScenarioInfoWindow
              gameDifficulty={GameDifficulty.Normal}
              kingOfTheHill={false}
              onConfirmClick={() => navigate(-1)}
              opponentSettings={[OpponentDifficulty.Average, OpponentDifficulty.Average, OpponentDifficulty.Average]}
              playerColor={PlayerColor.Blue}
              scenario={scenario}
              x={159}
              y={14}
            />
          }
          path="scenario-info"
        />
      </Routes>
    </AdventureWindow>
  );
};
