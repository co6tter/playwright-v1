import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pom/pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
  loggedIn: void; // 自動実行フィクスチャ（例）
};

// POMを注入 + 必要なら “自動” フィクスチャも追加
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // 例：毎テスト前にベースURLへ移動 + 状態準備（auto=true で自動起動も可能）
  // loggedIn: [async ({ page }, use) => { ...; await use(); }, { auto: true }],
});

export { expect };
