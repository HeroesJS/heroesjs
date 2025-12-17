import { expect, type Locator, test as testBase } from '@playwright/test';

import { HostDirectConnectGameScreen } from './hostDirectConnectGameScreen';
import { HostModemGameScreen } from './hostModemGameScreen';
import { JoinDirectConnectGameScreen } from './joinDirectConnectGameScreen';
import { JoinModemGameScreen } from './joinModemGameScreen';
import { MainScreen } from './mainScreen';
import { NewCampaignGameScreen } from './newCampaignGameScreen';
import { NewDirectConnectGameScreen } from './newDirectConnectGameScreen';
import { NewGameScreen } from './newGameScreen';
import { NewHotSeatGameScreen } from './newHotSeatGameScreen';
import { NewModemGameScreen } from './newModemGameScreen';
import { NewMultiPlayerGameScreen } from './newMultiPlayerGameScreen';
import { NewNetworkGameScreen } from './newNetworkGameScreen';

export { expect };

interface Fixtures {
  readonly hostDirectConnectGameScreen: HostDirectConnectGameScreen;
  readonly hostModemGameScreen: HostModemGameScreen;
  readonly joinDirectConnectGameScreen: JoinDirectConnectGameScreen;
  readonly joinModemGameScreen: JoinModemGameScreen;
  readonly mainScreen: MainScreen;
  readonly mouseRightDown: (locator: Locator) => Promise<void>;
  readonly newCampaignGameScreen: NewCampaignGameScreen;
  readonly newDirectConnectGameScreen: NewDirectConnectGameScreen;
  readonly newGameScreen: NewGameScreen;
  readonly newHotSeatGameScreen: NewHotSeatGameScreen;
  readonly newModemGameScreen: NewModemGameScreen;
  readonly newMultiPlayerGameScreen: NewMultiPlayerGameScreen;
  readonly newNetworkGameScreen: NewNetworkGameScreen;
}

export const test = testBase.extend<Fixtures>({
  hostDirectConnectGameScreen: async ({ page }, use) => await use(new HostDirectConnectGameScreen(page)),
  hostModemGameScreen: async ({ page }, use) => await use(new HostModemGameScreen(page)),
  joinDirectConnectGameScreen: async ({ page }, use) => await use(new JoinDirectConnectGameScreen(page)),
  joinModemGameScreen: async ({ page }, use) => await use(new JoinModemGameScreen(page)),
  mainScreen: async ({ page }, use) => await use(new MainScreen(page)),
  mouseRightDown: async ({ page }, use) =>
    await use(async (locator: Locator) => {
      const button = (await locator.boundingBox())!;

      await page.mouse.move(button.x, button.y);
      await page.mouse.down({ button: 'right' });
    }),
  newCampaignGameScreen: async ({ page }, use) => await use(new NewCampaignGameScreen(page)),
  newDirectConnectGameScreen: async ({ page }, use) => await use(new NewDirectConnectGameScreen(page)),
  newGameScreen: async ({ page }, use) => await use(new NewGameScreen(page)),
  newHotSeatGameScreen: async ({ page }, use) => await use(new NewHotSeatGameScreen(page)),
  newModemGameScreen: async ({ page }, use) => await use(new NewModemGameScreen(page)),
  newMultiPlayerGameScreen: async ({ page }, use) => await use(new NewMultiPlayerGameScreen(page)),
  newNetworkGameScreen: async ({ page }, use) => await use(new NewNetworkGameScreen(page)),
});
