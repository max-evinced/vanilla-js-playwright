// @ts-check
const { test, expect } = require('@playwright/test');
const { EvincedSDK, setCredentials } = require('@evinced/js-playwright-sdk');

test.beforeAll(async () => {
  console.log('Before all tests');
  await setCredentials({
    // @ts-ignore
    serviceId: process.env.AUTH_SERVICE_ID,
    // @ts-ignore
    secret: process.env.AUTH_SECRET
  })
});

test('has title', async ({ page }) => {
  await page.goto('https://demo.evinced.com');
  const evincedService = new EvincedSDK(page)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Evinced, Demo Site/);
  const issues = await evincedService.evAnalyze();
  evincedService.evSaveFile(issues, 'html', 'test-results/evinced-single-run-report.html')
});

test('search button', async ({ page }) => {
  await page.goto('https://demo.evinced.com');
  const evincedService = new EvincedSDK(page)
  await evincedService.evStart()
  await page.getByRole('link', { name: 'Search' }).isVisible();
  const issues = await evincedService.evStop()
  evincedService.evSaveFile(issues, 'html', 'test-results/evinced-continuous-report.html')
});
