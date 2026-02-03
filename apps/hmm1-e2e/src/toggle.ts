import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export class Toggle {
  private readonly locator: Locator;
  private readonly infoLocator?: Locator;

  public constructor(private readonly page: Page, name: RegExp, info?: RegExp) {
    this.locator = page.getByRole('radiogroup', { name });

    if (info) {
      this.infoLocator = page.getByRole('dialog', { name: info });
    }
  }

  public async showInfo() {
    await mouseRightDown(this.page, this.locator);
  }

  public async verifyInfoShown() {
    if (!this.infoLocator) {
      throw new Error('Info not availabe');
    }

    await expect(this.infoLocator).toBeVisible();
  }

  public async select(value: RegExp) {
    while (!(await this.locator.getByRole('radio', { name: value }).isVisible())) {
      await this.locator.click();
    }
  }

  public async verifySelected(value: RegExp) {
    await expect(this.locator.getByRole('radio', { name: value })).toBeChecked();
  }
}
