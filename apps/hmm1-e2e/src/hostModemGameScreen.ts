import type { Locator, Page } from '@playwright/test';

export class HostModemGameScreen {
  public readonly locator: Locator;

  public readonly enterTelephoneNumberModal: Locator;
  public readonly telephoneNumberInput: Locator;
  public readonly okayButton: Locator;

  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /host modem game screen/i });

    this.enterTelephoneNumberModal = page.getByRole('dialog', { name: /please enter the telephone number\./i });
    this.telephoneNumberInput = page.getByRole('textbox', { name: /telephone number/i });
    this.okayButton = page.getByRole('button', { name: /okay/i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/host');
  }

  public dialingModal(telephoneNumber: string) {
    return this.page.getByRole('dialog', { name: new RegExp(`dialing... ${telephoneNumber}`, 'i') });
  }
}
