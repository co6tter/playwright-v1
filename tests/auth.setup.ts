import { test as setup } from '@playwright/test';

const authFile = '.auth/user.json';

setup('authenticate once', async ({ page }) => {
  console.log('authenticate once');
  await page.goto(process.env.BASE_URL ?? 'http://localhost:5173');
  await page.getByLabel('Email').fill('demo@exmple.com');
  await page.getByLabel('Password').fill('apple');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.context().storageState({ path: authFile });
});
