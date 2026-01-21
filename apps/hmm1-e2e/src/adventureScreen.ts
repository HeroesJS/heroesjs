import type { Locator, Page } from '@playwright/test';

export class AdventureScreen {
  public readonly locator: Locator;

  public constructor(page: Page) {
    this.locator = page.getByRole('main', { name: /adventure screen/i });
  }
}
