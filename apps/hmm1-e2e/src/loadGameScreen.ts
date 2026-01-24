import type { Locator, Page } from '@playwright/test';

export class LoadGameScreen {
  public readonly locator: Locator;

  public constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /^load game screen$/i });
  }

  public goto() {
    return this.page.goto('/load-game');
  }
}
