import { expect, type Locator, test as testBase } from '@playwright/test';

export { expect };

interface Fixtures {
  readonly mouseRightDown: (locator: Locator) => Promise<void>;
}

export const test = testBase.extend<Fixtures>({
  mouseRightDown: async ({ page }, use) =>
    await use(async (locator: Locator) => {
      const button = (await locator.boundingBox())!;

      await page.mouse.move(button.x, button.y);
      await page.mouse.down({ button: 'right' });
    }),
});
