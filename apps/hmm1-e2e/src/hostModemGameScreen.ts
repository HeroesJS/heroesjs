import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class HostModemGameScreen extends Screen {
  private readonly enterTelephoneNumberModal: Locator;
  private readonly telephoneNumberInput: Locator;
  private readonly okayButton: Locator;

  private readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page, /^host modem game screen$/i);

    this.enterTelephoneNumberModal = page.getByRole('dialog', { name: /^please enter the telephone number\.$/i });
    this.telephoneNumberInput = page.getByRole('textbox', { name: /^telephone number$/i });
    this.okayButton = page.getByRole('button', { name: /^okay$/i });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/host');
  }

  public async verifyTelephoneNumberPrompt() {
    await expect(this.enterTelephoneNumberModal).toBeVisible();

    await expect(this.telephoneNumberInput).toBeVisible();
    await expect(this.telephoneNumberInput).toBeFocused();

    await expect(this.okayButton).toBeVisible();
  }

  public async enterTelephoneNumber(telephoneNumber: string) {
    await this.telephoneNumberInput.fill(telephoneNumber);
  }

  public async confirmTelephoneNumber() {
    await this.telephoneNumberInput.press('Enter');
  }

  public async dial(telephoneNumber: string) {
    await this.enterTelephoneNumber(telephoneNumber);

    await this.confirmTelephoneNumber();
  }

  public verifyDialing(telephoneNumber: string) {
    return expect(
      this.page.getByRole('dialog', { name: new RegExp(`dialing... ${telephoneNumber}`.trimEnd(), 'i') })
    ).toBeVisible();
  }

  public async cancelDialing() {
    await this.cancelButton.click();
  }
}
