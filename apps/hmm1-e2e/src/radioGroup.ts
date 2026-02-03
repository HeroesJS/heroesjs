import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export class RadioGroup {
  private readonly locator: Locator;
  private readonly infoLocator: Locator;

  public constructor(private readonly page: Page, name: RegExp, info: RegExp) {
    this.locator = page.getByRole('radiogroup', { name });
    this.infoLocator = page.getByRole('dialog', { name: info });
  }

  public async showInfo() {
    await mouseRightDown(this.page, this.locator);
  }

  public async verifyInfoShown() {
    await expect(this.infoLocator).toBeVisible();
  }

  public async verifyOptions(...options: readonly RegExp[]) {
    for (const option of options) {
      await expect(this.getOption(option)).toBeVisible();
    }
  }

  public async selectOption(option: RegExp) {
    await this.getOption(option).click();
  }

  public async verifyOptionSelected(option: RegExp) {
    await expect(this.getOption(option)).toBeChecked();
  }

  private getOption(option: RegExp) {
    return this.locator.getByRole('radio', { name: option });
  }
}
