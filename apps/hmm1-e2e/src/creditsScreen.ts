import type { Locator, Page } from '@playwright/test';

export class CreditsScreen {
  public readonly locator: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /credits/i });
  }

  public goto() {
    return this.page.goto('/credits');
  }
}
