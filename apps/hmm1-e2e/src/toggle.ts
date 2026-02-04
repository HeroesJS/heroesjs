import type { Page } from '@playwright/test';

import { ElementBase } from './elementBase';
import { expect } from './utils';

export class Toggle extends ElementBase {
  public constructor(page: Page, name: RegExp, info?: RegExp) {
    super(page, page.getByRole('radiogroup', { name }), info);
  }

  public async select(value: RegExp) {
    while (!(await this.getOption(value).isVisible())) {
      await this.locator.click();
    }
  }

  public async verifySelected(value: RegExp) {
    await expect(this.getOption(value)).toBeChecked();
  }

  private getOption(value: RegExp) {
    return this.locator.getByRole('radio', { name: value });
  }
}
