// import { test, expect } from '../../fixtures/test';

// test('Top Page', async ({ page, loginPage }) => {
//   console.log('Top Page dir01/01');
//   await loginPage.login('demo@exmple.com', 'apple');
//   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('Top Page', async ({ page }) => {
  console.log('Top Page dir01/01');
  await page.goto(process.env.BASE_URL ?? 'http://localhost:5173/top');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
