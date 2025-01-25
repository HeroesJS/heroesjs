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
import { HeroId, Town } from '@heroesjs/hmm1-core';

export const AdventureScreen = () => {
  const navigate = useNavigate();

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
        <Route element={<StandardScenarioInfoWindow x={159} y={14} />} path="scenario-info" />
      </Routes>
    </AdventureWindow>
  );
};
