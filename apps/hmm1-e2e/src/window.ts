import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export abstract class Window {
  private readonly locator: Locator;

  constructor(private readonly page: Page, name: RegExp) {
    this.locator = page.getByRole('region', { name });
  }

  public async verifyIsOpen() {
    await expect(this.locator).toBeVisible();
  }

  public async verifyIsClosed() {
    await expect(this.locator).toBeHidden();
  }

  protected async mouseRightDown(locator: Locator) {
    await mouseRightDown(this.page, locator);
  }
}
