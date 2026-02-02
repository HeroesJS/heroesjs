import type { Locator, Page } from '@playwright/test';

import { NewHotSeatGameScreen } from './newHotSeatGameScreen';
import { NewMultiPlayerGameScreen } from './newMultiPlayerGameScreen';
import { Screen } from './screen';
import { expect } from './utils';

export class NewGameScreen extends Screen {
  private readonly standardGameButton: Locator;
  private readonly standardGameInfoModal: Locator;

  private readonly campaignGameButton: Locator;
  private readonly campaignGameInfoModal: Locator;

  private readonly multiPlayerGameButton: Locator;
  private readonly multiPlayerGameInfoModal: Locator;

  private readonly cancelButton: Locator;
  private readonly cancelInfoModal: Locator;

  constructor(page: Page) {
    super(page, /new game screen/i);

    this.standardGameButton = page.getByRole('button', { name: /standard game/i });
    this.standardGameInfoModal = page.getByRole('dialog', { name: /a single player game playing out a single map\./i });

    this.campaignGameButton = page.getByRole('button', { name: /campaign game/i });
    this.campaignGameInfoModal = page.getByRole('dialog', {
      name: /a single player game playing through a series of maps\./i,
    });

    this.multiPlayerGameButton = page.getByRole('button', { name: /multi-player game/i });
    this.multiPlayerGameInfoModal = page.getByRole('dialog', {
      name: /a multi-player game, with several human players competing against each other on a single map\./i,
    });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });
    this.cancelInfoModal = page.getByRole('dialog', { name: /cancel back to the main menu\./i });
  }

  public goto() {
    return this.page.goto('/new-game');
  }

  public async showStandardGameInfo() {
    await this.mouseRightDown(this.standardGameButton);
  }

  public async verifyStandardGameInfoShown() {
    await expect(this.standardGameInfoModal).toBeVisible();
  }

  public async selectStandardGame() {
    await this.standardGameButton.click();
  }

  public async showCampaignGameInfo() {
    await this.mouseRightDown(this.campaignGameButton);
  }

  public async verifyCampaiangGameInfoShown() {
    await expect(this.campaignGameInfoModal).toBeVisible();
  }

  public async selectCampaignGame() {
    await this.campaignGameButton.click();
  }

  public async showMultiPlayerGameInfo() {
    await this.mouseRightDown(this.multiPlayerGameButton);
  }

  public async verifyMultiPlayerGameInfoShown() {
    await expect(this.multiPlayerGameInfoModal).toBeVisible();
  }

  public async selectMultiPlayerGame() {
    await this.multiPlayerGameButton.click();
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

  public async startNewHotSeatGame(playerCount: number) {
    await this.selectMultiPlayerGame();

    await new NewMultiPlayerGameScreen(this.page).selectHotSeat();

    await new NewHotSeatGameScreen(this.page).selectPlayerCount(playerCount);
  }
}
