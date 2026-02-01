import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export abstract class Screen {
  protected readonly locator: Locator;

  constructor(protected readonly page: Page, name: RegExp) {
    this.locator = page.getByRole('main', { name });
  }

  public async verifyIsCurrentScreen() {
    await expect(this.locator).toBeVisible();
  }

  public async mouseRightDown(locator: Locator) {
    await mouseRightDown(this.page, locator);
  }
}
