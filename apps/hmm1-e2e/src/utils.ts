import { expect, type Locator, test as testBase } from '@playwright/test';
import { MainScreen, NewCampaignGameScreen, NewGameScreen } from './mainScreen';

export { expect };

interface Fixtures {
  readonly mainScreen: MainScreen;
  readonly newCampaignGameScreen: NewCampaignGameScreen;
  readonly newGameScreen: NewGameScreen;
  readonly mouseRightDown: (locator: Locator) => Promise<void>;
}

export const test = testBase.extend<Fixtures>({
  mainScreen: async ({ page }, use) => await use(new MainScreen(page)),
  mouseRightDown: async ({ page }, use) =>
    await use(async (locator: Locator) => {
      const element = (await locator.boundingBox())!;

      await page.mouse.move(element.x, element.y);
      await page.mouse.down({ button: 'right' });
    }),
  newCampaignGameScreen: async ({ page }, use) => await use(new NewCampaignGameScreen(page)),
  newGameScreen: async ({ page }, use) => await use(new NewGameScreen(page)),
});
