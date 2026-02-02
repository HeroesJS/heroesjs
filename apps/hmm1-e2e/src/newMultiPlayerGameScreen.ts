import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class NewMultiPlayerGameScreen extends Screen {
  private readonly hotSeatButton: Locator;
  private readonly hotSeatInfoModal: Locator;

  private readonly networkButton: Locator;
  private readonly networkInfoModal: Locator;

  private readonly modemButton: Locator;
  private readonly modemInfoModal: Locator;

  private readonly directConnectButton: Locator;
  private readonly directConnectInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    super(page, /^new multi-player game screen$/i);

    this.hotSeatButton = page.getByRole('button', { name: /^hot seat$/i });
    this.hotSeatInfoModal = page.getByRole('dialog', {
      name: /^play a hot seat game, where 2 to 4 players play around the same computer, switching into the 'hot seat' when it is their turn\.$/i,
    });

    this.networkButton = page.getByRole('button', { name: /^network$/i });
    this.networkInfoModal = page.getByRole('dialog', {
      name: /^play a network game, where 2 players use their own computers connected through a lan \(local area network\)\.$/i,
    });

    this.modemButton = page.getByRole('button', { name: /^modem$/i });
    this.modemInfoModal = page.getByRole('dialog', {
      name: /^play a modem game, where 2 players use ther own computers connected over the phone lines using modems\.$/i,
    });

    this.directConnectButton = page.getByRole('button', { name: /^direct connect$/i });
    this.directConnectInfoModal = page.getByRole('dialog', {
      name: /^play a direct connect game, where 2 players use ther own computers directly connected through their serial port by a null modem\.$/i,
    });

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /^cancel back to the main menu\.$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player');
  }

  public async showHotSeatInfo() {
    await this.mouseRightDown(this.hotSeatButton);
  }

  public async verifyHotSeatInfoShown() {
    await expect(this.hotSeatInfoModal).toBeVisible();
  }

  public async selectHotSeat() {
    await this.hotSeatButton.click();
  }

  public async showNetworkInfo() {
    await this.mouseRightDown(this.networkButton);
  }

  public async verifyNetworkInfoShown() {
    await expect(this.networkInfoModal).toBeVisible();
  }

  public async selectNetwork() {
    await this.networkButton.click();
  }

  public async showModemInfo() {
    await this.mouseRightDown(this.modemButton);
  }

  public async verifyModemInfoShown() {
    await expect(this.modemInfoModal).toBeVisible();
  }

  public async selectModem() {
    await this.modemButton.click();
  }

  public async showDirectConnectInfo() {
    await this.mouseRightDown(this.directConnectButton);
  }

  public async verifyDirectConnectInfoShown() {
    await expect(this.directConnectInfoModal).toBeVisible();
  }

  public async selectDirectConnect() {
    await this.directConnectButton.click();
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
