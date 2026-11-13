# Personal Portfolio Website

## 1. 開発環境
- Node.js
- npm
- Next.js
- React
- TypeScript
- Tailwind CSS
- Visual Studio Code

## 2. 環境準備
プロジェクトのフォルダでターミナルを開き、必要なパッケージをインストールします。

```powershell
npm install
```
※ すでにインストール済みの場合は不要です。

## 3. プログラムの実行方法
### ① 開発サーバーの起動
```powershell
npm run dev
```

### ② ブラウザで確認
以下のURLにアクセスします。
http://localhost:3000

※ ポート番号が異なる場合は、ターミナルに表示されたURLを使用してください。

### ③ サーバーの停止
ターミナルで `Ctrl + C` を押します。

## 4. 補足
- プログラムを変更すると、画面に自動反映されます。
- 作品情報は `src/data/projects.ts` で管理します。
- 画像は `public/images/` に保存します。
- 2回目以降は、以下のコマンドだけで起動できます。

```powershell
npm run dev
```