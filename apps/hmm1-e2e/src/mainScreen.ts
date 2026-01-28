import type { Locator, Page } from '@playwright/test';

export class MainScreen {
  public readonly locator: Locator;

  public readonly menu: Locator;

  public readonly newGameButton: Locator;
  public readonly newGameInfoModal: Locator;

  public readonly loadGameButton: Locator;
  public readonly loadGameInfoModal: Locator;

  public readonly viewHighScoresButton: Locator;
  public readonly viewHighScoresInfoModal: Locator;

  public readonly viewCreditsButton: Locator;
  public readonly viewCreditsInfoModal: Locator;

  public readonly quitButton: Locator;
  public readonly quitInfoModal: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /main screen/i });

    this.menu = page.getByRole('menu', { name: /main menu/i });

    this.newGameButton = page.getByRole('button', { name: /new game/i });
    this.newGameInfoModal = page.getByRole('dialog', { name: /start a single or multi\u{02011}player game\./iu });

    this.loadGameButton = page.getByRole('button', { name: /load game/i });
    this.loadGameInfoModal = page.getByRole('dialog', { name: /load a previously saved game\./i });

    this.viewHighScoresButton = page.getByRole('button', { name: /view high scores/i });
    this.viewHighScoresInfoModal = page.getByRole('dialog', { name: /view the high score screen\./i });

    this.viewCreditsButton = page.getByRole('button', { name: /view credits/i });
    this.viewCreditsInfoModal = page.getByRole('dialog', { name: /view the credits screen\./i });

    this.quitButton = page.getByRole('button', { name: /quit/i });
    this.quitInfoModal = page.getByRole('dialog', {
      name: /quit heroes of might and magic and return to the dos prompt\./i,
    });
  }

  public goto() {
    return this.page.goto('/');
  }
}
