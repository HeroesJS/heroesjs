import type { Locator, Page } from '@playwright/test';

export class JoinModemGameScreen {
  public readonly locator: Locator;

  public readonly waitingForRingModal: Locator;

  public readonly cancelButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /join modem game screen/i });

    this.waitingForRingModal = page.getByRole('dialog', { name: /waiting for ring\.\.\./i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/join');
  }
}
