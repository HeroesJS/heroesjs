import type { Locator, Page } from '@playwright/test';

import { expect } from './utils';

export abstract class Window {
  private readonly locator: Locator;

  constructor(page: Page, name: RegExp) {
    this.locator = page.getByRole('region', { name });
  }

  public async verifyIsOpen() {
    await expect(this.locator).toBeVisible();
  }

  public async verifyIsClosed() {
    await expect(this.locator).toBeHidden();
  }
}
