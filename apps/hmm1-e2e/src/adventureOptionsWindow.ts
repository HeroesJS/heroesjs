import type { Locator, Page } from '@playwright/test';

export class AdventureOptionsWindow {
  public readonly locator: Locator;

  public constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^adventure options window$/i });
  }
}
