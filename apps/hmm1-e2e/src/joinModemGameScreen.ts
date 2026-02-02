import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class JoinModemGameScreen extends Screen {
  private readonly waitingForRingModal: Locator;

  private readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page, /^join modem game screen$/i);

    this.waitingForRingModal = page.getByRole('dialog', { name: /^waiting for ring\.\.\.$/i });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/modem/join');
  }

  public async verifyWaitingForRing() {
    await expect(this.waitingForRingModal).toBeVisible();
  }

  public async cancel() {
    await this.cancelButton.click();
  }
}
