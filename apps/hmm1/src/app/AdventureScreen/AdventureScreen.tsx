import { AdventureButtons, Locator, TownLocator } from '@heroesjs/hmm1-adventure-ui';
import { Town } from '@heroesjs/hmm1-core';

import { AdventureWindow } from '../AdventureWindow';

export const AdventureScreen = () => (
  <AdventureWindow
    renderActionButtons={() => <AdventureButtons moveDisabled />}
    renderTownLocators={() => (
      <Locator>
        <TownLocator castle town={Town.Farm} />
      </Locator>
    )}
  />
);
