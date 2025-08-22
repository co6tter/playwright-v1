import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL ?? 'http://localhost:5173');
  }

  async login(email: string, password: string) {
    console.log('LoginPage.login');
    await this.goto();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
    await expect(this.page.getByText('Welcome!')).toBeVisible();
  }
}
