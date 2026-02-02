import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class NewNetworkGameScreen extends Screen {
  private readonly hostButton: Locator;
  private readonly hostInfoModal: Locator;

  private readonly guestButton: Locator;
  private readonly guestInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    super(page, /^new network game screen$/i);

    this.hostButton = page.getByRole('button', { name: /^host$/i });
    this.hostInfoModal = page.getByRole('dialog', {
      name: /^the host sets up the game options. There can only be one host per network game\.$/i,
    });

    this.guestButton = page.getByRole('button', { name: /^guest$/i });
    this.guestInfoModal = page.getByRole('dialog', {
      name: /^the guest waits for the host to set up the game, then is automatically added in\. there can only be one guest per network game\.$/i,
    });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /^cancel back to the main menu\.$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/network');
  }

  public async showHostInfo() {
    await this.mouseRightDown(this.hostButton);
  }

  public async verifyHostInfoShown() {
    await expect(this.hostInfoModal).toBeVisible();
  }

  public async selectHost() {
    await this.hostButton.click();
  }

  public async showGuestInfo() {
    await this.mouseRightDown(this.guestButton);
  }

  public async verifyGuestInfoShown() {
    await expect(this.guestInfoModal).toBeVisible();
  }

  public async selectGuest() {
    await this.guestButton.click();
  }

  public async showCancelInfo() {
    await this.mouseRightDown(this.cancelButton);
  }

  public async verifyCancelInfoShown() {
    await expect(this.cancelInfoModal).toBeVisible();
  }

  public async selectCancel() {
    await this.cancelButton.click();
  }
}
