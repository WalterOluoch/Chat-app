# Deployment Configuration Template

Use this template to document **exactly how your MERN stack is deployed**. Fill in every section with the concrete settings from your own infrastructure (platform names, URLs, command examples, environment variables, screenshots, etc.).

## 1. Overview
- **Frontend host**: _e.g. Netlify, Vercel, GitHub Pages_
- **Backend host**: _e.g. Render, Railway, Heroku_
- **Database**: _e.g. MongoDB Atlas cluster name_
- **CI/CD provider**: _e.g. GitHub Actions workflow file_

> _Guidance_: Replace the placeholders above with the actual platforms you used. If you have multiple environments (staging, production), list both.

## 2. Backend Deployment
1. **Repository / branch**: `main`
2. **Build command**: `npm install && npm run build:server`
3. **Start command**: `npm run start:server`
4. **Environment variables**:
   - `PORT=`__
   - `CLIENT_URL=`__
   - `MONGO_URI=`__
   - `MONGO_DB_NAME=`__
5. **Deployment steps**:
   - Describe how you create/update the service (UI steps or CLI commands).
   - Note any webhooks or auto-deploy triggers from GitHub.
6. **Post-deploy verification**:
   - Health check URL (e.g. `https://api.example.com/healthz`)
   - Smoke tests to run.

> _Guidance_: Replace the commands/variables above with the exact values used by your platform. If your host requires a specific Procfile, Dockerfile, or buildpack, document it here.

## 3. Frontend Deployment
1. **Build directory**: `client`
2. **Build command**: `npm install && npm run build:client`
3. **Publish directory**: `client/dist`
4. **Environment variables**:
   - `VITE_SOCKET_URL=`__
   - Any other `VITE_*` keys.
5. **Deployment steps**:
   - Provide instructions for connecting the repo to the hosting provider.
   - Document how to trigger manual deploys (e.g. `npx netlify deploy`).
6. **Production URL**: `https://____`

> _Guidance_: Mention caching headers, redirects, and custom domains if configured. Embed screenshots or link to them if your instructor requires proof.

## 4. CI/CD Pipelines
- **Workflow file**: `.github/workflows/ci.yml`
- **Quality checks**: lint, test, build (describe each).
- **Deployment jobs**:
  - `deploy-client`: explain when it runs, which secrets it needs (`NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`).
  - Add notes for a backend deploy job if/when you create one.

> _Guidance_: If you forked the workflow or added more jobs, describe the logic (branches, environments, required approvals) and link to any build badges.

## 5. Troubleshooting / Rollbacks
- Known failure modes and fixes.
- How to redeploy a previous build (e.g. Netlify deploy history, Render rollbacks).
- Contact info or runbooks for on-call rotation (if applicable).

---
### How to use this file
1. Replace every `__` placeholder with your real values.
2. Commit screenshots or diagrams in `deployment/assets/` and reference them here.
3. Keep this document updated whenever you change hosting providers, secrets, or workflows.


