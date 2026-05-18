# Fix MSAL v5 CacheOptions type error

## What & Why
`lighthouse-frontend/lib/auth.ts` includes `storeAuthStateInCookie: false` in the
MSAL `CacheOptions` config block. This property was removed from the `CacheOptions`
type in `@azure/msal-browser` v5, causing TypeScript to fail with:

```
error TS2353: Object literal may only specify known properties,
and 'storeAuthStateInCookie' does not exist in type 'CacheOptions'.
```

This breaks the CI/CD pipeline (`npm run check` / `tsc`) on the `oauth` branch.

## Done looks like
- `lib/auth.ts` compiles cleanly with `tsc --noEmit` (no TS2353 error)
- The CI pipeline's `npm run check` step passes
- The app still starts and redirects to Microsoft login as before

## Out of scope
- Any other auth logic changes

## Steps
1. **Remove the stale property** — Delete the `storeAuthStateInCookie: false` line
   from the `cache` block in `lib/auth.ts`. The `cacheLocation: 'sessionStorage'`
   line stays; it is valid in v5.
2. **Verify TypeScript** — Run `tsc --noEmit` (or `npm run check`) in
   `lighthouse-frontend/` and confirm zero type errors from this file.
3. **Smoke-test** — Restart the dev server and confirm the Microsoft login
   redirect still works.

## Relevant files
- `lighthouse-frontend/lib/auth.ts:11-14`
