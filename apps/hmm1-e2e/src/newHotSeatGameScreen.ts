import type { Locator, Page } from '@playwright/test';

export class NewHotSeatGameScreen {
  public readonly locator: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /new hot seat game screen/i });
  }

  public goto() {
    return this.page.goto('/new-game/multi-player/hot-seat');
  }
}
