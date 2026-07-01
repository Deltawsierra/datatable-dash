---
title: Fix msal-react version mismatch in package.json
---
# Fix msal-react version declaration

## What & Why
`lighthouse-frontend/package.json` declares `"@azure/msal-react": "^2.1.0"` but the
version actually installed in node_modules is `5.3.2`. `msal-react` v2 only supports
`msal-browser` v3 as a peer, but the project uses `msal-browser` v5 — causing an
`ERESOLVE` peer dependency conflict for anyone running `npm install` locally.

## Done looks like
- `lighthouse-frontend/package.json` declares `"@azure/msal-react": "^5.3.2"`
- Running `npm install` in `lighthouse-frontend/` on a clean machine succeeds with no ERESOLVE errors
- The app still compiles and the Microsoft login redirect still works

## Out of scope
- Any behaviour change in auth — this is a declaration-only fix, no code logic changes

## Steps
1. **Correct the version pin** — Change `@azure/msal-react` in `package.json` from `^2.1.0` to `^5.3.2` to match what is actually installed and to satisfy the `msal-browser@^5` peer requirement.
2. **Verify the app still compiles** — Restart the dev server and confirm the Microsoft login page loads without errors.

## Relevant files
- `lighthouse-frontend/package.json:14-15`