import { test, expect } from 'playwright/test';

const routes = ['/about', '/experience', '/projects', '/ai-emerging-technology', '/capabilities', '/resume', '/contact'];
const base = process.env.BASE_URL ?? 'http://localhost:3000';

test('root navigation links perform full route navigations', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  for (const route of routes) {
    await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
    await page.locator(`a[href="${route}"]:visible`).first().click();
    await expect(page).toHaveURL(`${base}${route}`);
    await expect(page.locator('main#main')).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('all generated route URLs load directly', async ({ page }) => {
  for (const route of ['/', ...routes, '/projects/base-station-management', '/projects/connectivity-on-demand']) {
    const response = await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded' });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('main#main')).toBeVisible();
  }
});
