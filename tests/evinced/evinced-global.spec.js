// @ts-check
const { test, expect } = require('@playwright/test');
const { EvincedSDK } = require('@evinced/js-playwright-sdk');


test('has title', async ({ page }) => {
  await page.goto('https://demo.evinced.com');
  const evincedService = new EvincedSDK(page)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Evinced, Demo Site/);
  const issues = await evincedService.evAnalyze();
  evincedService.evSaveFile(issues, 'html', 'test-results/evinced-global-setup.html')
});

