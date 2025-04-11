import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/game');

  await page.getByRole('button', {name: /new game/i}).click();

  await page.getByRole('button', {name: /standard game/i}).click();
});

test('navigates to main menu when cancel is clicked', async ({page}) => {
  await page.getByRole('button', {name: /cancel/i}).click();

  expect(page.getByRole('menu', {name: /main menu/i})).toBeDefined();
});
