

## Nextjs local development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Docker local environment

```bash

docker build -t 12-webapp-client .

docker run -dp 5000:5000 12-webapp-client

```
