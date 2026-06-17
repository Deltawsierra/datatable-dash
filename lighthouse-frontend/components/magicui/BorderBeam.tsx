```markdown
## Reviewer Quick Start

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install requests pandas openpyxl acryl-datahub

$env:DATA_ATLAS_GRAPHQL_URL="https://dummy-data-atlas-host/api/graphql"
$env:DATA_ATLAS_TOKEN="dummy-token"

python -m py_compile scripts/bulk_uploads/config.py scripts/bulk_uploads/client.py scripts/bulk_uploads/utils.py scripts/bulk_uploads/glossary.py scripts/bulk_uploads/descriptions.py

python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --terms-sheet "Glossary Template" --assignments-sheet "Data Template" --dry-run --limit 1
python scripts/bulk_uploads/descriptions.py C:\path\to\template.xlsx --sheet "Description Template" --dry-run --limit 1


--------------------


# Data Atlas Bulk Upload Migration

This branch migrates the first-pass bulk upload ingestion scripts from the old MDH/DataHub sink assumptions to a configurable Data Atlas GraphQL client.

The current scope is intentionally limited to:

- Glossary term creation / resolution

- Glossary term assignment to datasets and dataset fields

- Column description updates

- Shared Data Atlas GraphQL client

- Token-based authentication

- Configurable endpoint

- Dry-run support

- Row-level result reports

This branch does **not** yet implement the full production ingestion framework for tags, domains, owners, or lineage.

---

## Files Added / Updated

Active files:

```text

scripts/bulk_uploads/__init__.py
scripts/bulk_uploads/config.py
scripts/bulk_uploads/client.py
scripts/bulk_uploads/utils.py
scripts/bulk_uploads/glossary.py
scripts/bulk_uploads/descriptions.py


Current placeholder / not-yet-implemented files:
scripts/bulk_uploads/domains.py
scripts/bulk_uploads/owners.py
scripts/bulk_uploads/tags.py


Lineage is not implemented in this first pass.




Design Summary

The main refactor is the introduction of a shared DataAtlasGraphQLClient.

Previously, each script hardcoded the MDH/DataHub GraphQL endpoint and headers directly inside the script.

Now the scripts use:
client.execute(query, variables)

The shared client handles:

* GraphQL endpoint
* Token authentication
* Optional actor header
* SSL verification
* Request timeout
* HTTP error handling
* GraphQL error handling
* Dry-run behavior

This keeps the migration small while avoiding repeated endpoint/auth logic across every ingestion script.

⸻

Assumptions

This implementation assumes Data Atlas exposes a DataHub-compatible GraphQL API and supports the following mutations / queries:

* createGlossaryTerm
* searchAcrossEntities
* addTerms
* batchRemoveTerms
* updateDescription

This also assumes token authentication is sent as:
Authorization: Bearer <token>


If Data Atlas uses a different auth header, it can be configured through environment variables without changing code.

⸻

Required Python Packages

Install dependencies from the repo root:
python -m pip install requests pandas openpyxl acryl-datahub



Environment Variables

The scripts require these environment variables:
DATA_ATLAS_GRAPHQL_URL
DATA_ATLAS_TOKEN

Example:
$env:DATA_ATLAS_GRAPHQL_URL="https://your-data-atlas-host/api/graphql"
$env:DATA_ATLAS_TOKEN="your-token-here"

Optional variables:
$env:DATA_ATLAS_ACTOR="urn:li:corpuser:datahub"
$env:DATA_ATLAS_VERIFY_SSL="true"
$env:DATA_ATLAS_TIMEOUT_SECONDS="30"

If Data Atlas does not use the standard bearer token header, override the auth header:
$env:DATA_ATLAS_AUTH_HEADER="X-DataAtlas-Token"
$env:DATA_ATLAS_AUTH_SCHEME=""


Local Setup

From the repo root:
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install requests pandas openpyxl acryl-datahub

Verify syntax:
python -m py_compile scripts/bulk_uploads/config.py scripts/bulk_uploads/client.py scripts/bulk_uploads/utils.py scripts/bulk_uploads/glossary.py scripts/bulk_uploads/descriptions.py

Verify imports:
python -c "from scripts.bulk_uploads.config import load_config; from scripts.bulk_uploads.client import DataAtlasGraphQLClient; print('imports ok')"

Expected output:
imports ok


Finding Excel Sheet Names

Before running the scripts, confirm the exact sheet names in the workbook:
python -c "import pandas as pd; print(pd.ExcelFile(r'C:\path\to\template.xlsx').sheet_names)"

Use the exact printed sheet names with --terms-sheet, --assignments-sheet, or --sheet.

Dry Run Testing

Dry-run mode does not publish to Data Atlas, but the scripts still require environment variables to be set.

For dry-run testing, dummy values are fine:
$env:DATA_ATLAS_GRAPHQL_URL="https://dummy-data-atlas-host/api/graphql"
$env:DATA_ATLAS_TOKEN="dummy-token"


Finding Excel Sheet Names

Before running the scripts, confirm the exact sheet names in the workbook:
python -c "import pandas as pd; print(pd.ExcelFile(r'C:\path\to\template.xlsx').sheet_names)"

Use the exact printed sheet names with --terms-sheet, --assignments-sheet, or --sheet.

Run Glossary Dry Run

Run both glossary term creation/resolution and glossary assignments:
python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --terms-sheet "Glossary Template" --assignments-sheet "Data Template" --dry-run --limit 1

Run only glossary assignments:
python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --skip-term-creation --assignments-sheet "Data Template" --dry-run --limit 1

Run only glossary term creation/resolution:
python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --terms-sheet "Glossary Template" --skip-assignments --dry-run --limit 1

Expected result files:
outputs/glossary_terms_results.csv
outputs/glossary_assignments_results.csv



Run Description Dry Run
python scripts/bulk_uploads/descriptions.py C:\path\to\template.xlsx --sheet "Description Template" --dry-run --limit 1

If the description rows are on the first sheet, --sheet can be omitted:
python scripts/bulk_uploads/descriptions.py C:\path\to\template.xlsx --dry-run --limit 1

Expected result file:
outputs/descriptions_results.csv



Real API Smoke Test

After dry-run succeeds, set the real Data Atlas endpoint and token:
$env:DATA_ATLAS_GRAPHQL_URL="https://your-real-data-atlas-host/api/graphql"
$env:DATA_ATLAS_TOKEN="your-real-token"

Run only one row first:
python scripts/bulk_uploads/descriptions.py C:\path\to\template.xlsx --sheet "Description Template" --limit 1

Or for glossary:
python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --terms-sheet "Glossary Template" --assignments-sheet "Data Template" --limit 1

Do not run the full workbook until a one-row publish test succeeds.



Template Column Requirements

Description Upload

Supported formats:
Option A:
resource_urn
column_name
description

Option B:
Platform
Database
Schema Name
Dataset Name
Env Name
Column_Name
Description

If resource_urn is provided, it is used directly.

If resource_urn is not provided, the script builds a dataset URN using:
Platform
Database
Schema Name
Dataset Name
Env Name

The dataset name is built as:
{Database}.{Schema Name}.{Dataset Name}


Glossary Term Creation

Supported columns:
glossary_name
definition
parent_node

Alternate accepted names:
glossary name
term_name
term name
name
description
parent node
parentNode

parent_node is optional. If blank, the script attempts to create a top-level glossary term, assuming Data Atlas allows that.


Glossary Assignment

Supported columns:
Platform
Database
Schema Name
Dataset Name
Env Name
Glossary_Name
Column_Name

Also supported:
resource_urn
glossary_urn
term_urn

If Column_Name is blank, the glossary term is assigned to the dataset.

If Column_Name is populated, the glossary term is assigned to that dataset field.


Output Reports

Each script writes row-level CSV reports to the outputs/ directory.

Reports include:

* success
* dry_run
* row
* action-specific metadata
* error message if the row failed

The scripts continue processing rows by default even if a row fails.

Use --fail-fast to stop on the first failed row.

⸻

Common Commands

Compile check:
python -m py_compile scripts/bulk_uploads/config.py scripts/bulk_uploads/client.py scripts/bulk_uploads/utils.py scripts/bulk_uploads/glossary.py scripts/bulk_uploads/descriptions.py

Show workbook sheet names:
python -c "import pandas as pd; print(pd.ExcelFile(r'C:\path\to\template.xlsx').sheet_names)"

Glossary dry run, one row:
python scripts/bulk_uploads/glossary.py C:\path\to\template.xlsx --terms-sheet "Glossary Template" --assignments-sheet "Data Template" --dry-run --limit 1

Description dry run, one row:
python scripts/bulk_uploads/descriptions.py C:\path\to\template.xlsx --sheet "Description Template" --dry-run --limit 1


Known Limitations

This is a first-pass migration, not the final production ingestion framework.

Known limitations:

1. Tags, domains, owners, and lineage are not implemented in this scope.
2. GraphQL mutations are used for this first pass because they match the existing MDH scripts.
3. For larger-scale production ingestion, the DataHub Python SDK may be more appropriate than expanding GraphQL scripts indefinitely.
4. Dry-run validates local parsing and operation construction, but it does not validate that a real term, dataset, or column exists in Data Atlas.
5. Dry-run glossary term creation uses a fake URN for local assignment flow testing.
6. searchAcrossEntities only fetches the first 10 glossary search results.
7. The scripts assume Data Atlas uses DataHub-compatible URN structure and GraphQL schema.
8. Dataset-level descriptions are not implemented; descriptions.py is currently limited to column descriptions.

⸻

Troubleshooting

ModuleNotFoundError: No module named 'requests'

Install dependencies inside the active virtual environment:
python -m pip install requests pandas openpyxl acryl-datahub


DATA_ATLAS_GRAPHQL_URL is required

Set the required environment variables in the same terminal session:
$env:DATA_ATLAS_GRAPHQL_URL="https://dummy-data-atlas-host/api/graphql"
$env:DATA_ATLAS_TOKEN="dummy-token"


Worksheet named '...' not found

The Excel workbook does not contain the sheet name passed to the script.

Check sheet names:
python -c "import pandas as pd; print(pd.ExcelFile(r'C:\path\to\template.xlsx').sheet_names)"


Missing required column/value

The template does not contain one of the required columns, or the row being processed has a blank value for a required field.

Check the relevant section above for required template columns.

⸻

401 or 403

The endpoint is reachable, but authentication or authorization failed.

Check:

* Token value
* Token expiration
* Auth header format
* Data Atlas permissions
* Whether DATA_ATLAS_ACTOR is required

⸻

GraphQL errors

If the script reports GraphQL errors, the endpoint is reachable, but the mutation, input shape, or schema may not match the target Data Atlas deployment.

Check:

* Mutation support in Data Atlas
* Input object names
* Enum names like DATASET_FIELD
* Whether the entity exists
* Whether the token has permission to mutate metadata

⸻

Review Notes

This branch is intentionally scoped to the smallest safe migration:

* Move endpoint/auth to shared config/client
* Add token authentication
* Preserve existing GraphQL-based behavior for glossary and descriptions
* Add dry-run and row-level reporting
* Avoid larger object-oriented rewrite until the Data Atlas API contract is confirmed