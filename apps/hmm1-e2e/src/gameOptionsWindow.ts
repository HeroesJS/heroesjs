import type { Locator, Page } from '@playwright/test';

export class GameOptionsWindow {
  public readonly locator: Locator;

  public readonly newGameButton: Locator;
  public readonly newGameConfirmationModal: Locator;

  public readonly loadGameButton: Locator;
  public readonly saveGameButton: Locator;
  public readonly quitButton: Locator;

  public readonly okayButton: Locator;
  public readonly infoButton: Locator;

  public readonly yesButton: Locator;
  public readonly noButton: Locator;

  constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^game options window$/i });

    this.newGameButton = page.getByRole('button', { name: /^new game$/i });
    this.newGameConfirmationModal = page.getByRole('dialog', {
      name: /^are you sure you want to restart\? \(your current game will be lost\)$/i,
    });

    this.loadGameButton = page.getByRole('button', { name: /^load game$/i });
    this.saveGameButton = page.getByRole('button', { name: /^save game$/i });
    this.quitButton = page.getByRole('button', { name: /^quit$/i });

    this.okayButton = page.getByRole('button', { name: /^okay$/i });
    this.infoButton = page.getByRole('button', { name: /^info$/i });

    this.yesButton = page.getByRole('button', { name: /^yes$/i });
    this.noButton = page.getByRole('button', { name: /^no$/i });
  }
}
