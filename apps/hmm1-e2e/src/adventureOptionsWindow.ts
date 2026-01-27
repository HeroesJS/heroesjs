import type { Locator, Page } from '@playwright/test';

export class AdventureOptionsWindow {
  public readonly locator: Locator;

  public readonly viewWorldButton: Locator;
  public readonly viewWorldInfoModal: Locator;

  public constructor(page: Page) {
    this.locator = page.getByRole('region', { name: /^adventure options window$/i });

    this.viewWorldButton = page.getByRole('button', { name: /^view world$/i });
    this.viewWorldInfoModal = page.getByRole('dialog', { name: /^view the entire world\.$/i });
  }
}
