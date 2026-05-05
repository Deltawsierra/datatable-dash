# Environment Variable Template

Copy this to `api/.env` and fill in your values.

```env
# Databricks connection
DATABRICKS_ACCESS_TOKEN=your_personal_access_token_here
VERSION=DEV
SERVER_HOSTNAME=your-workspace.azuredatabricks.net
HTTP_PATH=/sql/1.0/warehouses/your_warehouse_id
CATALOG=your_catalog
SCHEMA=your_schema

# Azure AD OAuth (backend token validation)
AZURE_CLIENT_ID=your_azure_ad_app_client_id
AZURE_TENANT_ID=your_azure_ad_tenant_id

# PostgreSQL authorization database
POSTGRES_DSN=postgresql://user:password@host:5432/dbname

# CORS — set to the frontend's AKS domain in production
FRONTEND_ORIGIN=http://localhost:5000

# Set to "true" to skip JWT validation in local dev (use alongside VERSION=DEV)
SKIP_TOKEN_VALIDATION=true
```

## Frontend environment variables

For the Next.js frontend, set these in `lighthouse-frontend/.env.local`:

```env
NEXT_PUBLIC_AZURE_CLIENT_ID=your_azure_ad_app_client_id
NEXT_PUBLIC_AZURE_TENANT_ID=your_azure_ad_tenant_id
```

> **Note:** `NEXT_PUBLIC_` variables are embedded at build time and safe to
> expose in the browser — they only identify your app registration, not a secret.

## Notes

- **DATABRICKS_ACCESS_TOKEN**: Personal access token from Databricks Settings → Access Tokens
- **VERSION**: Set to `DEV` for local development (enables token from .env). Remove or set to anything else in production.
- **SERVER_HOSTNAME**: Your Databricks SQL Warehouse hostname
- **HTTP_PATH**: Your Databricks SQL Warehouse HTTP path
- **CATALOG**: Databricks Unity Catalog name
- **SCHEMA**: Databricks schema name within the catalog
- **AZURE_CLIENT_ID / AZURE_TENANT_ID**: Obtain from your IT/security team after the Azure AD App Registration is created. See `docs/backend_oauth_instructions.md` for full setup.
- **POSTGRES_DSN**: Connection string for the PostgreSQL database that holds the `users`, `roles`, `actions`, and `user_roles` tables (see `docs/auth_tables.sql`).
- **SKIP_TOKEN_VALIDATION**: Set to `true` in local dev so the backend skips JWT signature verification and uses a synthetic dev user identity instead.

> Do not commit your `.env` or `.env.local` files to source control.
