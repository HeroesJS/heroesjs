import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export class Button {
  private readonly locator: Locator;
  private readonly infoLocator?: Locator;

  public constructor(private readonly page: Page, name: RegExp, info?: RegExp) {
    this.locator = page.getByRole('button', { name });

    if (info) {
      this.infoLocator = page.getByRole('dialog', { name: info });
    }
  }

  public async showInfo() {
    await mouseRightDown(this.page, this.locator);
  }

  public async verifyInfoShown() {
    if (!this.infoLocator) {
      throw new Error('Info not available');
    }

    await expect(this.infoLocator).toBeVisible();
  }

  public async select() {
    await this.locator.click();
  }

  public async verifyDisabled() {
    await expect(this.locator).toBeDisabled();
  }
}
