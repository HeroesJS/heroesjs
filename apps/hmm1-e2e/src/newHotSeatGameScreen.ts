import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class NewHotSeatGameScreen extends Screen {
  private readonly twoPlayersButton: Locator;
  private readonly twoPlayersInfoModal: Locator;

  private readonly threePlayersButton: Locator;
  private readonly threePlayersInfoModal: Locator;

  private readonly fourPlayersButton: Locator;
  private readonly fourPlayersInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  private readonly playerCountButtons: Readonly<Record<number, Locator>>;
  private readonly playerCountInfoModals: Readonly<Record<number, Locator>>;

  constructor(page: Page) {
    super(page, /^new hot seat game screen$/i);

    this.twoPlayersButton = page.getByRole('button', { name: /^2 players$/i });
    this.twoPlayersInfoModal = page.getByRole('dialog', {
      name: /^play with 2 human players, and optionally, up to 2 additional computer players\.$/i,
    });

    this.threePlayersButton = page.getByRole('button', { name: /^3 players$/i });
    this.threePlayersInfoModal = page.getByRole('dialog', {
      name: /^play with 3 human players, and optionally 1 computer player\.$/i,
    });

    this.fourPlayersButton = page.getByRole('button', { name: /^4 players$/i });
    this.fourPlayersInfoModal = page.getByRole('dialog', { name: /^play with 4 human players\.$/i });

    this.playerCountButtons = {
      2: this.twoPlayersButton,
      3: this.threePlayersButton,
      4: this.fourPlayersButton,
    };

    this.playerCountInfoModals = {
      2: this.twoPlayersInfoModal,
      3: this.threePlayersInfoModal,
      4: this.fourPlayersInfoModal,
    };

    this.cancelButton = page.getByRole('button', { name: /^cancel$/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /^cancel back to the main menu\.$/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/hot-seat');
  }

  public async showPlayerCountInfo(count: number) {
    await this.mouseRightDown(this.playerCountButtons[count]);
  }

  public async verifyPlayerCountInfoShown(count: number) {
    await expect(this.playerCountInfoModals[count]).toBeVisible();
  }

  public async selectPlayerCount(count: number) {
    await this.playerCountButtons[count].click();
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
