import type { Page } from '@playwright/test';

import { ElementBase } from './elementBase';
import { expect } from './utils';

export class RadioGroup extends ElementBase {
  public constructor(page: Page, name: RegExp, info: RegExp) {
    super(page, page.getByRole('radiogroup', { name }), info);
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
