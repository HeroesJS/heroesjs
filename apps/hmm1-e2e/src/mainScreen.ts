import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

import { Screen } from './screen';

export class MainScreen extends Screen {
  private readonly newGameButton: Locator;
  private readonly newGameInfoModal: Locator;

  private readonly loadGameButton: Locator;
  private readonly loadGameInfoModal: Locator;

  private readonly viewHighScoresButton: Locator;
  private readonly viewHighScoresInfoModal: Locator;

  private readonly viewCreditsButton: Locator;
  private readonly viewCreditsInfoModal: Locator;

  private readonly quitButton: Locator;
  private readonly quitInfoModal: Locator;

  constructor(page: Page) {
    super(page, /^main screen$/i);

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.newGameInfoModal = page.getByRole('dialog', { name: /^start a single or multi‑player game\.$/iu });

    this.loadGameButton = page.getByRole('button', { name: /^load game$/i });
    this.loadGameInfoModal = page.getByRole('dialog', { name: /^load a previously saved game\.$/i });

    this.viewHighScoresButton = page.getByRole('button', { name: /^view high scores$/i });
    this.viewHighScoresInfoModal = page.getByRole('dialog', { name: /^view the high score screen\.$/i });

    this.viewCreditsButton = page.getByRole('button', { name: /^view credits$/i });
    this.viewCreditsInfoModal = page.getByRole('dialog', { name: /^view the credits screen\.$/i });

    this.quitButton = page.getByRole('button', { name: /^quit$/i });
    this.quitInfoModal = page.getByRole('dialog', {
      name: /^quit heroes of might and magic and return to the dos prompt\.$/i,
    });
  }

  public goto() {
    return this.page.goto('/');
  }

  public async selectNewGame() {
    await this.newGameButton.click();
  }

  public async showNewGameInfo() {
    await this.mouseRightDown(this.newGameButton);
  }

  public async verifyNewGameInfoShown() {
    await expect(this.newGameInfoModal).toBeVisible();
  }

  public async selectLoadGame() {
    await this.loadGameButton.click();
  }

  public async showLoadGameInfo() {
    await this.mouseRightDown(this.loadGameButton);
  }

  public async verifyLoadGameInfoShown() {
    await expect(this.loadGameInfoModal).toBeVisible();
  }

  public async selectViewHighScores() {
    await this.viewHighScoresButton.click();
  }

  public async showViewHighScoresInfo() {
    await this.mouseRightDown(this.viewHighScoresButton);
  }

  public async verifyViewHighScoresInfoShown() {
    await expect(this.viewHighScoresInfoModal).toBeVisible();
  }

  public async selectViewCredits() {
    await this.viewCreditsButton.click();
  }

  public async showViewCreditsInfo() {
    await this.mouseRightDown(this.viewCreditsButton);
  }

  public async verifyViewCreditsInfoShown() {
    await expect(this.viewCreditsInfoModal).toBeVisible();
  }

  public async showQuitInfo() {
    await this.mouseRightDown(this.quitButton);
  }

  public async verifyQuitInfoShown() {
    await expect(this.quitInfoModal).toBeVisible();
  }
}
