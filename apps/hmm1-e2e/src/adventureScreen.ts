import type { Locator, Page } from '@playwright/test';

import { GameOptionsWindow } from './gameOptionsWindow';
import { Screen } from './screen';
import { expect } from './utils';

export class AdventureScreen extends Screen {
  private readonly nextHeroButton: Locator;
  private readonly nextHeroInfoModal: Locator;

  private readonly moveButton: Locator;
  private readonly moveInfoModal: Locator;

  private readonly kingdomOverviewButton: Locator;
  private readonly kingdomOverviewInfoModal: Locator;

  private readonly endTurnButton: Locator;
  private readonly endTurnInfoModal: Locator;

  private readonly adventureOptionsButton: Locator;
  private readonly adventureOptionsInfoModal: Locator;

  private readonly gameOptionsButton: Locator;
  private readonly gameOptionsInfoModal: Locator;

  private readonly gameOptionsWindow: GameOptionsWindow;

  public constructor(page: Page) {
    super(page, /^adventure screen$/i);

    this.nextHeroButton = page.getByRole('button', { name: /^next hero$/i });
    this.nextHeroInfoModal = page.getByRole('dialog', { name: /^next hero select the next hero\.$/i });

    this.moveButton = page.getByRole('button', { name: /^move$/i });
    this.moveInfoModal = page.getByRole('dialog', {
      name: /^continue movement continue the hero's movement along his current path\.$/i,
    });

    this.kingdomOverviewButton = page.getByRole('button', { name: /^kingdom overview$/i });
    this.kingdomOverviewInfoModal = page.getByRole('dialog', {
      name: /^kingdom summary view a summary of your kingdom\.$/i,
    });

    this.endTurnButton = page.getByRole('button', { name: /^end turn$/i });
    this.endTurnInfoModal = page.getByRole('dialog', {
      name: /^end turn end your turn and let the computer take its turn\.$/i,
    });

    this.adventureOptionsButton = page.getByRole('button', { name: /^adventure options$/i });
    this.adventureOptionsInfoModal = page.getByRole('dialog', {
      name: /^adventure options bring up the adventure options menu\.$/i,
    });

    this.gameOptionsButton = page.getByRole('button', { name: /^game options$/i });
    this.gameOptionsInfoModal = page.getByRole('dialog', {
      name: /^game options bring up the game options menu\.$/i,
    });

    this.gameOptionsWindow = new GameOptionsWindow(page);
  }

  public async goto() {
    return this.page.goto('/adventure');
  }

  public async showNextHeroInfo() {
    await this.mouseRightDown(this.nextHeroButton);
  }

  public async verifyNextHeroInfoShown() {
    await expect(this.nextHeroInfoModal).toBeVisible();
  }

  public async verifyNextHeroDisabled() {
    await expect(this.nextHeroButton).toBeDisabled();
  }

  public async selectNextHero() {
    await this.nextHeroButton.click();
  }

  public async showMoveInfo() {
    await this.mouseRightDown(this.moveButton);
  }

  public async verifyMoveInfoShown() {
    await expect(this.moveInfoModal).toBeVisible();
  }

  public async verifyMoveDisabled() {
    await expect(this.moveButton).toBeDisabled();
  }

  public async selectMove() {
    await this.moveButton.click();
  }

  public async showKingdomOverviewInfo() {
    await this.mouseRightDown(this.kingdomOverviewButton);
  }

  public async verifyKingdomOverviewInfoShown() {
    await expect(this.kingdomOverviewInfoModal).toBeVisible();
  }

  public async selectKingdomOverview() {
    await this.kingdomOverviewButton.click();
  }

  public async showEndTurnInfo() {
    await this.mouseRightDown(this.endTurnButton);
  }

  public async verifyEndTurnInfoShown() {
    await expect(this.endTurnInfoModal).toBeVisible();
  }

  public async selectEndTurn() {
    await this.endTurnButton.click();
  }

  public async showAdventureOptionsInfo() {
    await this.mouseRightDown(this.adventureOptionsButton);
  }

  public async verifyAdventureOptionsInfoShown() {
    await expect(this.adventureOptionsInfoModal).toBeVisible();
  }

  public async selectAdventureOptions() {
    await this.adventureOptionsButton.click();
  }

  public async showGameOptionsInfo() {
    await this.mouseRightDown(this.gameOptionsButton);
  }

  public async verifyGameOptionsInfoShown() {
    await expect(this.gameOptionsInfoModal).toBeVisible();
  }

  public async selectGameOptions() {
    await this.gameOptionsButton.click();
  }

  public async startNewGame() {
    await this.gameOptionsButton.click();

    await this.gameOptionsWindow.newGameButton.click();

    await this.gameOptionsWindow.yesButton.click();
  }
}
