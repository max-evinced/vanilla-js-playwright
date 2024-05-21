// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demo.evinced.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Evinced, Demo Site/);
});

test('search button', async ({ page }) => {
  await page.goto('https://demo.evinced.com');

  await page.getByRole('link', { name: 'Search' }).isVisible();
});
