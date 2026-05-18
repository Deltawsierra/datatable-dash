---
title: Restructure repo to match real project layout
---
# Repo Restructure to Match Real Project

## What & Why
Reorganize the Replit project to exactly match the real `lighthouse-rdm` repository structure shown in the provided screenshots. Currently the Next.js frontend lives at the repo root; in the real repo it lives inside `lighthouse-frontend/`. The Python backend (`api/`) is mostly correct but is missing `user.py`, has an incomplete `routes/__init__.py`, and is missing several supporting files (`requirements.txt`, `.gitignore`, `env_template.md`, `README.md`). The root-level `app.yaml` and `docs/` folder also need to be created.

## Done looks like
- Root contains exactly: `api/`, `docs/`, `lighthouse-frontend/`, `app.yaml` (plus hidden Replit files)
- All Next.js source (`app/`, `components/`, `lib/`, `scripts/`, `server/`, `package.json`, `tsconfig.json`, `next.config.mjs`, `tailwind.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `design_guidelines.md`, `PROJECT.md`, `README.md`, `.gitignore`, `.next/`, `node_modules/`) lives under `lighthouse-frontend/`
- `api/` contains: `v1/middleware/` (`__init__.py`, `get_connection.py`, `get_token.py`), `v1/routes/` (`__init__.py`, `tables.py`, `user.py`), `__init__.py`, `.gitignore`, `env_template.md`, `main.py`, `README.md`, `requirements.txt`
- `api/v1/routes/__init__.py` imports and exports both `tables_router` and `user_router`
- `api/v1/routes/user.py` implements `GET /user/info` using the Databricks SCIM API
- `app.yaml` contains the Databricks Apps deployment command (`npm --prefix ./lighthouse-frontend run start`)
- `docs/` folder is created (empty or with a placeholder)
- The Replit workflow (`npx tsx server/index.ts`) is updated to `npx tsx lighthouse-frontend/server/index.ts`
- `lighthouse-frontend/server/index.ts` spawns Next.js with the correct working directory (`lighthouse-frontend/`) so the app continues to serve correctly on port 5000
- The app starts without errors after the restructure

## Out of scope
- Changing any existing frontend feature or UI behaviour
- Setting up actual Databricks credentials or `.env`
- Implementing the `docs/` markdown files beyond a placeholder

## Tasks
1. **Move frontend files into `lighthouse-frontend/`** — Create the `lighthouse-frontend/` directory and move all frontend source and config files there: `app/`, `components/`, `lib/`, `scripts/`, `server/`, `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.mjs`, `next-env.d.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `design_guidelines.md`, `PROJECT.md`, `README.md`, `.gitignore`, `.next/`, `node_modules/`.

2. **Fix `server/index.ts` for new directory layout** — After the move, `lighthouse-frontend/server/index.ts` must spawn `npx next dev -p 5000` with `cwd` set to the `lighthouse-frontend/` directory so Next.js resolves `app/`, `components/`, etc. correctly. The FastAPI spawn stays the same (runs from repo root). Update `__dirname`-based path resolution as needed.

3. **Update Replit workflow command** — Change the workflow run command from `npx tsx server/index.ts` to `npx tsx lighthouse-frontend/server/index.ts` so the Replit "Start application" workflow picks up the new path.

4. **Complete backend Python files** — Create `api/v1/routes/user.py` (implements `GET /user/info` via Databricks SCIM), update `api/v1/routes/__init__.py` to import and register both routers, and add the missing supporting files: `api/.gitignore`, `api/env_template.md`, `api/README.md`, `api/requirements.txt`.

5. **Create root `app.yaml` and `docs/`** — Write `app.yaml` with the Databricks Apps deployment command targeting `lighthouse-frontend/`. Create a `docs/` folder with a minimal placeholder file.

6. **Verify the app still runs** — Restart the workflow and confirm Next.js starts on port 5000 and FastAPI starts on port 8000 with no errors.

## Relevant files
- `server/index.ts`
- `api/v1/routes/__init__.py`
- `api/v1/routes/tables.py`
- `api/v1/middleware/get_connection.py`
- `api/v1/middleware/get_token.py`
- `api/main.py`
- `package.json`
- `tsconfig.json`
- `next.config.mjs`