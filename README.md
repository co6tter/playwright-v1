# playwright-v1

## Overview

このプロジェクトは、Playwrightを使用したE2Eテストスイートです。以下の機能を含んでいます：

- **認証管理**: テスト実行前に1度だけ認証を行い、`storageState`で認証状態を保存
- **Page Object Model (POM)**: テストコードとページ要素を分離し、保守性を向上
- **カスタムフィクスチャ**: POMインスタンスを自動注入
- **プロジェクト分割**: テストディレクトリごとに独立したプロジェクト設定
- **CI/CD対応**: CI環境向けの最適化された設定

## Tech Stack

- **Playwright** (v1.54.2+): E2Eテストフレームワーク
- **TypeScript**: 型安全なテストコード記述
- **Node.js**: ランタイム環境

## Setup

1. 依存関係のインストール:
```bash
npm install
```

2. Playwrightブラウザのインストール:
```bash
npx playwright install
```

3. 環境変数の設定（オプション）:
- `BASE_URL`: テスト対象のベースURL（デフォルト: `http://localhost:5173`）

## Usage

全テストの実行:
```bash
npx playwright test
```

特定のプロジェクトのみ実行:
```bash
npx playwright test --project=dir01
npx playwright test --project=dir02
```

UIモードでの実行:
```bash
npx playwright test --ui
```

レポートの表示:
```bash
npx playwright show-report
```

## Directory Structure

```
.
├── .auth/               # 認証状態ファイル（storageState）
├── tests/
│   ├── auth.setup.ts    # 認証セットアップスクリプト
│   ├── fixtures/        # カスタムフィクスチャ定義
│   │   └── test.ts      # POM注入用フィクスチャ
│   ├── pom/
│   │   └── pages/       # Page Objectクラス
│   │       └── LoginPage.ts
│   ├── dir01/           # テストグループ1
│   │   ├── 01.spec.ts
│   │   └── 02.spec.ts
│   └── dir02/           # テストグループ2
│       ├── 01.spec.ts
│       └── 02.spec.ts
├── playwright-report/   # テスト実行レポート
├── playwright.config.ts # Playwright設定ファイル
└── package.json
```

## License

This repository is for personal/private use only.
