import type { Locator, Page } from '@playwright/test';

import { Screen } from './screen';
import { expect } from './utils';

export class CreditsScreen extends Screen {
  private readonly designedAndDirectedList: Locator;
  private readonly additionalDesignList: Locator;
  private readonly leadProgrammingList: Locator;
  private readonly programmingList: Locator;
  private readonly artDirectorList: Locator;
  private readonly artistsList: Locator;

  private readonly musicAndSoundDesignList: Locator;
  private readonly orchestralArrangementsList: Locator;
  private readonly writingAndManualList: Locator;
  private readonly scenariosList: Locator;
  private readonly qaManagerList: Locator;
  private readonly testingList: Locator;

  constructor(page: Page) {
    super(page, /^credits$/i);

    this.designedAndDirectedList = page.getByRole('list', { name: /^designed and directed$/i });
    this.additionalDesignList = page.getByRole('list', { name: /^additional design$/i });
    this.leadProgrammingList = page.getByRole('list', { name: /^lead programming$/i });
    this.programmingList = page.getByRole('list', { name: /^programming$/i });
    this.artDirectorList = page.getByRole('list', { name: /^art director$/i });
    this.artistsList = page.getByRole('list', { name: /^artists$/i });

    this.musicAndSoundDesignList = page.getByRole('list', { name: /^music and sound design$/i });
    this.orchestralArrangementsList = page.getByRole('list', { name: /^orchestral arrangements$/i });
    this.writingAndManualList = page.getByRole('list', { name: /^writing and manual$/i });
    this.scenariosList = page.getByRole('list', { name: /^scenarios$/i });
    this.qaManagerList = page.getByRole('list', { name: /^qa manager$/i });
    this.testingList = page.getByRole('list', { name: /^testing$/i });
  }

  public goto() {
    return this.page.goto('/credits');
  }

  public async verifyDesignedAndDirectedCredits() {
    await this.verifyList(this.designedAndDirectedList, [/^jon van caneghem$/i]);
  }

  public async verifyAdditionalDesignCredits() {
    await this.verifyList(this.additionalDesignList, [/^phil steinmeyer$/i, /^debbie van caneghem$/i]);
  }

  public async verifyLeadProgrammingCredits() {
    await this.verifyList(this.leadProgrammingList, [/^phil steinmeyer$/i]);
  }

  public async verifyProgrammingCredits() {
    await this.verifyList(this.programmingList, [
      /^mark caldwell$/i,
      /^george ruof$/i,
      /^todd hendrix$/i,
      /^bob rakosky$/i,
      /^michael sean clement$/i,
    ]);
  }

  public async verifyArtDirectorCredits() {
    await this.verifyList(this.artDirectorList, [/^julia ulano$/i]);
  }

  public async verifyArtistsCredits() {
    await this.verifyList(this.artistsList, [/^bonita long-hemsath$/i, /^joel payne$/i, /^mike winterbauer$/i]);
  }

  public async verifyMusicAndSoundDesignCredits() {
    await this.verifyList(this.musicAndSoundDesignList, [/^rob king$/i]);
  }

  public async verifyOrchestralArrangementsCredits() {
    await this.verifyList(this.orchestralArrangementsList, [/^paul romero$/i]);
  }

  public async verifyWritingAndManualCredits() {
    await this.verifyList(this.writingAndManualList, [/^rozita tolouey$/i, /^deane rettig$/i, /^bruce schlickbernd$/i]);
  }

  public async verifyScenariosCredits() {
    await this.verifyList(this.scenariosList, [
      /^jon van caneghem$/i,
      /^christian vanover$/i,
      /^clayton retzer$/i,
      /^mark palczynski$/i,
    ]);
  }

  public async verifyQaManagerCredits() {
    await this.verifyList(this.qaManagerList, [/^peter ryu$/i]);
  }

  public async verifyTestingCredits() {
    await this.verifyList(this.testingList, [
      /^bryan farina$/i,
      /^douglas rothman$/i,
      /^pavel vesely$/i,
      /^walter johnson$/i,
      /^scott white$/i,
      /^mark caldwell$/i,
      /^george ruof$/i,
      /^scott mcdaniel$/i,
      /^benjamin bent$/i,
      /^deane rettig$/i,
      /^clayton retzer$/i,
      /^craig konas$/i,
      /^mark palczynski$/i,
      /^christian vanover$/i,
    ]);
  }

  public async exit() {
    await this.locator.click();
  }

  private async verifyList(list: Locator, entries: readonly RegExp[]) {
    for (const entry of entries) {
      await expect(list.getByRole('listitem', { name: entry })).toBeVisible();
    }
  }
}
