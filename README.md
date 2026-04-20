# APEX エグゼクティブ・リトリート LP

APEXエグゼクティブ・リトリートのランディングページです。

## 概要

静的HTMLによるシングルページLP。`serve` を用いてRailway上で配信します。

## ローカル起動

```bash
npm start
```

デフォルトで `http://localhost:3000` にて閲覧できます。

## ファイル構成

- `index.html` — LP本体
- `package.json` — `serve` による静的配信スクリプト
- `railway.json` — Railwayデプロイ設定（Nixpacks）
- `.gitignore` — Node標準
- `README.md` — 本ドキュメント

## Railwayデプロイ手順

1. Railwayプロジェクトに本リポジトリを接続
2. ビルダー: Nixpacks（`railway.json` で指定済）
3. 起動コマンド: `npm start`（`PORT` 環境変数を自動で参照）
4. デプロイ後、Railwayが発行する公開URLにアクセス

`PORT` はRailway側で自動注入されるため、追加の環境変数設定は不要です。
