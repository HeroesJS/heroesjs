import type { Locator, Page } from '@playwright/test';

import { expect } from './utils';

export class Input {
  private readonly locator: Locator;

  public constructor(page: Page, name: RegExp) {
    this.locator = page.getByRole('textbox', { name });
  }

  public async verifyFocused() {
    await expect(this.locator).toBeFocused();
  }

  public async enter(text: string) {
    await this.locator.fill(text);
  }

  public async confirm() {
    await this.locator.press('Enter');
  }

  public async verifyContent(value: RegExp) {
    await expect(this.locator).toHaveText(value);
  }
}
