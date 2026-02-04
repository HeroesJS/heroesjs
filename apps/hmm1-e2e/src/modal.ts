import type { Locator, Page } from '@playwright/test';

import { expect } from './utils';
import { Input } from './input';

export class Modal {
  private readonly locator: Locator;

  private readonly input!: Input;

  public constructor(page: Page, content: RegExp, inputName?: RegExp) {
    this.locator = page.getByRole('dialog', { name: content });

    if (inputName) {
      this.input = new Input(page, inputName);
    }
  }

  public async verifyShown() {
    await expect(this.locator).toBeVisible();
  }

  public async verifyHidden() {
    await expect(this.locator).toBeHidden();
  }

  public async verifyInputFocused() {
    await this.input.verifyFocused();
  }

  public async enterText(text: string) {
    await this.input.enter(text);
  }

  public async confirmText() {
    await this.input.confirm();
  }

  public async selectConfirm() {
    await this.locator.getByRole('button', { name: /^yes$/i }).click();
  }

  public async selectDeny() {
    await this.locator.getByRole('button', { name: /^no$/i }).click();
  }
}
