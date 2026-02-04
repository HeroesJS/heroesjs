import type { Page } from '@playwright/test';

import { ElementBase } from './elementBase';
import { expect } from './utils';

export class Checkbox extends ElementBase {
  public constructor(page: Page, name: RegExp, info: RegExp) {
    super(page, page.getByRole('checkbox', { name }), info);
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
