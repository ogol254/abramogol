import { test, expect } from 'playwright/test';

const routes = ['/about', '/experience', '/projects', '/ai-emerging-technology', '/capabilities', '/resume', '/contact'];

test('root navigation links perform full route navigations', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  for (const route of routes) {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    await page.locator(`a[href="${route}"]:visible`).first().click();
    await expect(page).toHaveURL(`http://localhost:3000${route}`);
    await expect(page.locator('main#main')).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test('all generated route URLs load directly', async ({ page }) => {
  for (const route of ['/', ...routes, '/projects/base-station-management', '/projects/connectivity-on-demand']) {
    const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    expect(response?.status(), route).toBe(200);
    await expect(page.locator('main#main')).toBeVisible();
  }
});
