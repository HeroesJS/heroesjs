import type { Locator, Page } from '@playwright/test';

import { expect, mouseRightDown } from './utils';

export class LabelledText {
  private readonly locator: Locator;
  private readonly infoLocator?: Locator;

  public constructor(private readonly page: Page, label: RegExp, info: RegExp) {
    this.locator = page.getByLabel(label);

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

  public async verifyContent(content: RegExp) {
    await expect(this.locator).toHaveText(content);
  }
}
