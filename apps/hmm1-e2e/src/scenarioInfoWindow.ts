import type { Page } from '@playwright/test';

import { Window } from './window';

export class ScenarioInfoWindow extends Window {
  constructor(page: Page) {
    super(page, /^scenario info$/i);
  }
}
