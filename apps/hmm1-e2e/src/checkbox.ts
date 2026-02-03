import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export class Checkbox {
  private readonly locator: Locator;
  private readonly infoLocator: Locator;

  public constructor(private readonly page: Page, name: RegExp, info: RegExp) {
    this.locator = page.getByRole('checkbox', { name });
    this.infoLocator = page.getByRole('dialog', { name: info });
  }

  public async showInfo() {
    await mouseRightDown(this.page, this.locator);
  }

  public async verifyInfoShown() {
    await expect(this.infoLocator).toBeVisible();
  }

  public async selectEnabled(value: boolean) {
    if ((await this.locator.isChecked()) !== value) {
      await this.locator.click();
    }
  }

  public async verifyEnabled(value: boolean) {
    await expect(this.locator).toBeChecked({ checked: value });
  }
}
