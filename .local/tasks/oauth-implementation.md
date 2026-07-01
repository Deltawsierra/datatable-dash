# OAuth Implementation (Azure AD + Role Checking)

## What & Why
Add Microsoft Azure AD (Entra ID) OAuth authentication to the frontend using
MSAL.js. Unauthenticated users will be redirected to the Microsoft login page.
After login, the user's roles are fetched from the `user_roles` PostgreSQL
table and made available across the dashboard. All API calls to the FastAPI
backend will carry the user's access token.

Since the Azure AD App Registration has not yet been created by IT/security,
the implementation will be wired to environment variables
(`NEXT_PUBLIC_AZURE_CLIENT_ID`, `NEXT_PUBLIC_AZURE_TENANT_ID`) so the app
is fully built and ready to work the moment those values are provided.

Backend changes are delivered as copy-paste instructions only — no direct
edits to the `api/` source files.

## Done looks like
- Unauthenticated users are redirected to Microsoft login; authenticated users
  land on the dashboard as normal
- The dashboard header shows the logged-in user's display name and a logout
  button
- Every API call to the FastAPI backend includes a valid Azure AD Bearer token
  in the Authorization header
- After login, the user's roles are fetched and available throughout the app;
  a visible role indicator (e.g. badge or label) appears in the header or
  sidebar
- A `docs/backend_oauth_instructions.md` file contains ready-to-paste backend
  changes for CORS, token validation middleware, and a new user-roles endpoint
- Two new environment variables are documented in the README/env template

## Out of scope
- Restricting specific UI features per role (that is full RBAC, a future step)
- Admin UI for managing user/role assignments
- Automated user provisioning on first login (rows in `users` table added
  manually or by backend for now)
- Multi-tenant or guest Azure AD login
- Any direct edits to `api/` source files

## Tasks
1. **Install MSAL.js and create auth config** — Add `@azure/msal-browser` and
   `@azure/msal-react` packages. Create `lib/auth.ts` containing the MSAL
   PublicClientApplication config pointing at env vars for Client ID and
   Tenant ID. Document both env vars in the project README.

2. **Auth provider and login flow** — Create `components/AuthProvider.tsx`
   that wraps the app with the MSAL provider and an auth guard: if no
   authenticated account is found, trigger a redirect login to Microsoft.
   Create a minimal loading/redirect state so the UI doesn't flash before
   the auth check resolves.

3. **Route protection** — Wrap the dashboard layout with the auth guard so
   every dashboard page requires a valid session. Unauthenticated requests
   hitting any dashboard route redirect to Microsoft login.

4. **Token injection into API calls** — Update `lib/api.ts` to silently
   acquire an access token from MSAL before each request, and update the
   Next.js proxy route (`app/api/proxy/[...path]/route.ts`) to forward the
   `Authorization: Bearer` header through to the FastAPI backend.

5. **Role fetching and display** — After a successful login, call the new
   backend `/v1/user/roles` endpoint to retrieve the user's roles from the
   `user_roles` table. Store the result in an auth context alongside the
   user's identity. Display the user's name and their primary role as a badge
   in the dashboard header, alongside a logout button.

6. **Backend copy-paste instructions** — Write `docs/backend_oauth_instructions.md`
   covering three things the backend developer needs to add: (a) FastAPI CORS
   middleware allowing the AKS frontend origin, (b) a token validation
   dependency that verifies Azure AD JWTs using the JWKS endpoint, and (c) a
   new `GET /v1/user/roles` endpoint that queries the `user_roles` and `roles`
   PostgreSQL tables and returns the roles for the requesting user.

## Relevant files
- `lighthouse-frontend/lib/api.ts`
- `lighthouse-frontend/app/api/proxy/[...path]/route.ts`
- `lighthouse-frontend/app/(dashboard)/layout.tsx`
- `lighthouse-frontend/components/DashboardHeader.tsx`
- `lighthouse-frontend/components/TablesProvider.tsx`
- `lighthouse-frontend/app/layout.tsx`
- `docs/auth_tables.sql`
