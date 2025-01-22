import { AdventureButtons, HeroLocator, Locator, TownLocator } from '@heroesjs/hmm1-adventure-ui';
import { HeroId, Town } from '@heroesjs/hmm1-core';

import { AdventureWindow } from '../AdventureWindow';

export const AdventureScreen = () => (
  <AdventureWindow
    renderActionButtons={() => <AdventureButtons moveDisabled />}
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
  />
);
