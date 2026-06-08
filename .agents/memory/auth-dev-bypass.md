---
name: Auth dev-bypass flow
description: How RDM Lighthouse decides between Microsoft (MSAL) auth and the dev bypass, and the deliberate fail-open tradeoff.
---

# Auth dev-bypass flow

Auth configuration is resolved at **runtime** via `GET /api/config` (a Next.js
route reading server-side `AZURE_CLIENT_ID` / `AZURE_TENANT_ID`, with
`NEXT_PUBLIC_AZURE_*` fallback; `placeholder-client-id` counts as empty). It is
**not** driven by build-time `NEXT_PUBLIC_*` inlining.

`AuthProvider` is the **single source of truth**: it fetches `/api/config` once,
then publishes `authConfigured` through `AuthConfigContext`. `AuthGuard` consumes
that context (it does NOT fetch `/api/config` itself) and shows the "DEV MODE —
Auth bypassed" UI when `authConfigured` is false.

**Why single-source:** an earlier version had both `AuthProvider` and `AuthGuard`
fetch `/api/config` independently. They could diverge — if the provider rendered
children *without* `MsalProvider` but the guard decided auth was enforced, the
guard called `instance.loginRedirect()` on the msal-react **stub** context and
crashed. Routing the decision through one context removes that race.

**How to apply:** never make `AuthGuard` (or other components) re-fetch
`/api/config` to decide auth mode — read `useAuthConfig()`. When `authConfigured`
is false, components rendered by `AuthProvider` are OUTSIDE `MsalProvider`, so
`useMsal()` returns a stub — never call instance auth methods in that state.

## Deliberate fail-open tradeoff (mirrors the real lighthouse-rdm repo)

If the `/api/config` fetch **fails** (network/HTTP error), the app falls back to
dev bypass (`configMissing = true`), admitting a synthetic "Dev User". This is
intentional so the Replit/preview/iframe environment works without Azure.

**Why:** the upstream repo's `AuthProvider` does `.catch(() =>
setConfigMissing(true))`. A code review flagged this as fail-open (a transient
outage could grant access without Microsoft auth). It was kept to match upstream,
but if production auth must be hardened, switch to **fail-closed**: only bypass on
an explicit server flag (e.g. `AUTH_DEV_BYPASS=true`), and show an error screen on
fetch failure instead of granting access. MSAL `initialize()/handleRedirectPromise()`
failures already fail closed (error screen via `initError`).
