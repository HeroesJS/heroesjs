import { expect, type Locator, test as testBase } from '@playwright/test';

import { MainScreen } from './mainScreen';

export { expect };

interface Fixtures {
  readonly mainScreen: MainScreen;
  readonly mouseRightDown: (locator: Locator) => Promise<void>;
}

export const test = testBase.extend<Fixtures>({
  mainScreen: async ({ page }, use) => await use(new MainScreen(page)),
  mouseRightDown: async ({ page }, use) =>
    await use(async (locator: Locator) => {
      const button = (await locator.boundingBox())!;

      await page.mouse.move(button.x, button.y);
      await page.mouse.down({ button: 'right' });
    }),
});
