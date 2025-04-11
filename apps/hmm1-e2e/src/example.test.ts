import {expect, test} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('/');

  expect(await page.title()).toBe('Hmm1');
});
