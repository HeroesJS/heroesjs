import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class NewDirectConnectGameScreen extends Screen {
  private readonly hostButton: Locator;
  private readonly hostInfoModal: Locator;

  private readonly guestButton: Locator;
  private readonly guestInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    super(page, /^new direct connect game screen$/i);

    this.hostButton = page.getByRole('button', { name: /^host \(dials\)$/i });
    this.hostInfoModal = page.getByRole('dialog', {
      name: /^the host sets up the game options, chooses the number to dial, and places the call\.$/i,
    });

    this.guestButton = page.getByRole('button', { name: /^guest \(answers\)$/i });
    this.guestInfoModal = page.getByRole('dialog', {
      name: /^the guest waits for the host to call and set up the game\.$/i,
    });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /^cancel back to the main menu\.$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/direct-connect');
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

  public async verifyCancelInfo() {
    await expect(this.cancelInfoModal).toBeVisible();
  }

  public async selectCancel() {
    await this.cancelButton.click();
  }
}
