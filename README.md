# Simple React TODO App

Bootstrapを使用したシンプルなTODOアプリです。

## 構成
- Frontend: React (Vite)
- Styling: Bootstrap 5
- Deployment: Docker / GitHub Pages

## ローカルでの起動 (Docker)
\`docker build -t react-todo-app .\`
\`docker run -p 8080:80 react-todo-app\`
その後、[http://localhost:8080](http://localhost:8080) にアクセスしてください。

## GitHub Pagesへのデプロイ
本プロジェクトは静的ファイルとしてビルドされるため、GitHub Pagesで無料でホスティング可能です。
