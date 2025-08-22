import { test, expect } from '../../fixtures/test';

test('Top Page', async ({ page, loginPage }) => {
  console.log('Top Page dir01/02');
  await loginPage.login('demo@exmple.com', 'apple');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
