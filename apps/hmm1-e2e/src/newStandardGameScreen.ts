import { Locator, Page } from '@playwright/test';

export class NewStandardGameScreen {
  public readonly locator: Locator;

  constructor(private page: Page) {
    this.locator = page.getByRole('main', { name: /new standard game/i });
  }

  public goto() {
    return this.page.goto('/new-game/standard');
  }
}
