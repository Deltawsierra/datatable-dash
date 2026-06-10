---
name: Azure API token audience for FastAPI backend
description: Why the frontend must request the app's own API scope (not OIDC/Graph) and what the Azure App Registration must emit for the backend to accept the token.
---

# Azure access-token audience must match the backend API

The FastAPI backend's global `AuthMiddleware` (`validate_and_decode_jwt`) only accepts an
access token whose **audience is this app's own exposed API**, and it additionally requires
an `oid` claim plus a **non-empty `groups` claim** (else 401/403). It hydrates
`request.state.user = {id, username, display_name, email, groups, permissions, loaded_at}`.

**The trap:** requesting only OIDC scopes (`openid`/`profile`/`email`) makes MSAL return a
**Microsoft Graph** token. The backend rejects that with 401 even after a successful login.
The frontend must acquire a token for the app's own API scope
(default `api://<clientId>/access_as_user`, overridable at runtime via `/api/config` →
`AZURE_API_SCOPE`). Login consents to OIDC + the API scope together; silent acquisition then
asks only for the API scope. Mixing OIDC scopes with one custom API resource scope in a single
login request is valid MSAL usage (only one *resource* per token; OIDC scopes aren't a resource).

**Why:** end-to-end auth was failing with 401 on every data call despite the UI loading.

**How to apply:** when wiring this frontend to the real backend, the Azure App Registration must
(a) actually expose the `access_as_user` scope (or set `AZURE_API_SCOPE` to the real App ID URI /
`.default`), and (b) be configured to emit the **groups** claim in access tokens. These are
deployment-side prerequisites the frontend cannot fix; without them 401/403 persists.

There is **no** `/v1/user/roles` route — roles/permissions come from `/v1/user/info`
(`deriveRoles()` maps the `permissions` payload). The table routes are **read-only** (GET only);
the frontend gates writes behind `WRITE_API_ENABLED` and falls back to a local-only edit path.
