# Environment Variable Template

Copy this to `api/.env` and fill in your values.

```env
DATABRICKS_ACCESS_TOKEN=your_personal_access_token_here
VERSION=DEV
SERVER_HOSTNAME=your-workspace.azuredatabricks.net
HTTP_PATH=/sql/1.0/warehouses/your_warehouse_id
CATALOG=your_catalog
SCHEMA=your_schema
```

## Notes

- **DATABRICKS_ACCESS_TOKEN**: Personal access token from Databricks Settings → Access Tokens
- **VERSION**: Set to `DEV` for local development (enables token from .env). Remove or set to anything else in production.
- **SERVER_HOSTNAME**: Your Databricks SQL Warehouse hostname
- **HTTP_PATH**: Your Databricks SQL Warehouse HTTP path
- **CATALOG**: Databricks Unity Catalog name
- **SCHEMA**: Databricks schema name within the catalog

> Do not commit your `.env` file to source control.
