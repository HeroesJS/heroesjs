import type { Page } from '@playwright/test';

import { ElementBase } from './elementBase';
import { expect } from './utils';

export class Button extends ElementBase {
  public constructor(page: Page, name: RegExp, info?: RegExp) {
    super(page, page.getByRole('button', { name }), info);
  }

  public async select() {
    await this.locator.click();
  }

  public async verifyDisabled() {
    await expect(this.locator).toBeDisabled();
  }
}
