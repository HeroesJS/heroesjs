import type { Locator, Page } from '@playwright/test';

export class HighScoresScreen {
  public readonly locator: Locator;

  public readonly exitButton: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /high scores/i });

    this.exitButton = page.getByRole('button', { name: /exit/i });
  }

  public goto() {
    return this.page.goto('/high-scores');
  }
}
