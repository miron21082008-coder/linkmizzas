name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "github-pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install dependencies
        run: npm install

      - name: Build site
        run: npm run build

      - name: Prepare GitHub Pages files
        run: |
          echo "Looking for built HTML files..."
          find . -maxdepth 5 -type f \( -name "index.html" -o -name "_shell.html" \) \
            -not -path "./node_modules/*" \
            -not -path "./.git/*" \
            -print

          if [ -f ".output/public/index.html" ]; then
            PUBLISH_DIR=".output/public"
          elif [ -f ".output/public/_shell.html" ]; then
            PUBLISH_DIR=".output/public"
            cp "$PUBLISH_DIR/_shell.html" "$PUBLISH_DIR/index.html"
          elif [ -f "dist/client/index.html" ]; then
            PUBLISH_DIR="dist/client"
          elif [ -f "dist/client/_shell.html" ]; then
            PUBLISH_DIR="dist/client"
            cp "$PUBLISH_DIR/_shell.html" "$PUBLISH_DIR/index.html"
          elif [ -f "dist/index.html" ]; then
            PUBLISH_DIR="dist"
          elif [ -f "dist/_shell.html" ]; then
            PUBLISH_DIR="dist"
            cp "$PUBLISH_DIR/_shell.html" "$PUBLISH_DIR/index.html"
          else
            echo "Could not find index.html or _shell.html"
            find . -maxdepth 4 -type d -not -path "./node_modules/*" -print
            exit 1
          fi

          cp "$PUBLISH_DIR/index.html" "$PUBLISH_DIR/404.html"
          touch "$PUBLISH_DIR/.nojekyll"
          echo "www.mizzas.fun" > "$PUBLISH_DIR/CNAME"
          echo "PUBLISH_DIR=$PUBLISH_DIR" >> $GITHUB_ENV
          echo "Publishing: $PUBLISH_DIR"

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ${{ env.PUBLISH_DIR }}

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
