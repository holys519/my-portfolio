# GitHub Pagesでポートフォリオサイトを公開する方法

このドキュメントでは、作成したポートフォリオサイトをGitHub Pagesを利用してインターネット上に公開する手順を説明します。

## 1. GitHub上でリポジトリを作成する

1.  [GitHub](https://github.com/)にアクセスし、ログインします。
2.  画面右上の「+」アイコンをクリックし、「New repository」を選択します。
3.  以下の通りにリポジトリ情報を入力します。
    *   **Repository name:** `my-portfolio` （またはお好きなリポジトリ名）
    *   **Description:** （任意）ポートフォリオサイトなど、簡単な説明を記述します。
    *   **Public** を選択します。（GitHub Pagesで公開するにはリポジトリをPublicにする必要があります）
4.  「Create repository」ボタンをクリックして、リポジトリを作成します。

## 2. ローカルリポジトリとリモートリポジトリを接続する

1.  ローカルのプロジェクトディレクトリで、ターミナルを開きます。
2.  以下のコマンドを実行して、ローカルリポジトリを初期化し、リモートリポジトリに接続します。

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/あなたのユーザー名/my-portfolio.git
    git push -u origin main
    ```

    **注意:** `あなたのユーザー名` の部分は、ご自身のGitHubユーザー名に置き換えてください。

## 3. Viteプロジェクトのビルド設定

Viteで作成したプロジェクトをGitHub Pagesで正しく表示させるために、ビルド設定を修正する必要があります。

1.  `vite.config.ts` ファイルを開きます。
2.  `base` オプションを追加し、リポジトリ名を設定します。

    ```typescript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: "/my-portfolio/", // この行を追加
    })
    ```

    **注意:** `/my-portfolio/` の部分は、ご自身のリポジトリ名に合わせて変更してください。

## 4. プロジェクトをビルドしてデプロイする

1.  以下のコマンドを実行して、プロジェクトをビルドします。

    ```bash
    npm run build
    ```

    これにより、`dist` ディレクトリが生成され、公開用のファイルが格納されます。

2.  GitHub Pagesにデプロイするために、`gh-pages` パッケージをインストールします。

    ```bash
    npm install gh-pages --save-dev
    ```

3.  `package.json` ファイルに、デプロイスクリプトを追加します。

    ```json
    {
      "name": "my-portfolio",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "deploy": "gh-pages -d dist" // この行を追加
      },
      // ... (以下省略)
    }
    ```

4.  以下のコマンドを実行して、サイトをデプロイします。

    ```bash
    npm run deploy
    ```

    これにより、`dist` ディレクトリの内容が `gh-pages` ブランチにプッシュされ、GitHub Pagesで公開されます。

## 5. GitHub Pagesの設定

1.  GitHubのリポジトリページにアクセスします。
2.  「Settings」タブをクリックします。
3.  左側のメニューから「Pages」を選択します。
4.  「Branch」の項目で、`gh-pages` ブランチを選択し、「Save」をクリックします。

しばらくすると、`https://あなたのユーザー名.github.io/my-portfolio/` というURLで、あなたのポートフォリオサイトが公開されます。

以上で、デプロイ作業は完了です。
