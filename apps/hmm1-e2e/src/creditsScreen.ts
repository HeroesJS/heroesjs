import type { Locator, Page } from '@playwright/test';

export class CreditsScreen {
  public readonly locator: Locator;

  public readonly designedAndDirectedList: Locator;
  public readonly additionalDesignList: Locator;
  public readonly leadProgrammingList: Locator;
  public readonly programmingList: Locator;
  public readonly artDirectorList: Locator;
  public readonly artistsList: Locator;

  public readonly musicAndSoundDesignList: Locator;
  public readonly orchestralArrangementsList: Locator;
  public readonly writingAndManualList: Locator;
  public readonly scenariosList: Locator;
  public readonly qaManagerList: Locator;
  public readonly testingList: Locator;

  constructor(private readonly page: Page) {
    this.locator = page.getByRole('main', { name: /credits/i });

    this.designedAndDirectedList = page.getByRole('list', { name: /designed and directed/i });
    this.additionalDesignList = page.getByRole('list', { name: /additional design/i });
    this.leadProgrammingList = page.getByRole('list', { name: /lead programming/i });
    this.programmingList = page.getByRole('list', { name: /^programming$/i });
    this.artDirectorList = page.getByRole('list', { name: /art director/i });
    this.artistsList = page.getByRole('list', { name: /artists/i });

    this.musicAndSoundDesignList = page.getByRole('list', { name: /music and sound design/i });
    this.orchestralArrangementsList = page.getByRole('list', { name: /orchestral arrangements/i });
    this.writingAndManualList = page.getByRole('list', { name: /writing and manual/i });
    this.scenariosList = page.getByRole('list', { name: /scenarios/i });
    this.qaManagerList = page.getByRole('list', { name: /qa manager/i });
    this.testingList = page.getByRole('list', { name: /testing/i });
  }

  public goto() {
    return this.page.goto('/credits');
  }
}
