from __future__ import annotations

from dataclasses import dataclass
import os
from typing import Optional


def _get_bool_env(name: str, default: bool) -> bool:
    value = os.getenv(name)

    if value is None:
        return default

    return value.strip().lower() in {"1", "true", "yes", "y", "on"}


@dataclass(frozen=True)
class DataAtlasConfig:
    graphql_url: str
    token: str
    auth_header: str = "Authorization"
    auth_scheme: str = "Bearer"
    actor: Optional[str] = None
    verify_ssl: bool = True
    timeout_seconds: int = 30
    dry_run: bool = False


def load_config() -> DataAtlasConfig:
    """
    Load Data Atlas runtime configuration from environment variables.

    Required:
        DATA_ATLAS_GRAPHQL_URL
        DATA_ATLAS_TOKEN

    Optional:
        DATA_ATLAS_AUTH_HEADER
            Defaults to "Authorization"

        DATA_ATLAS_AUTH_SCHEME
            Defaults to "Bearer".
            Set to an empty string if the token should be sent without a scheme.

        DATA_ATLAS_ACTOR
            Optional DataHub-style actor header value.
            Example: urn:li:corpuser:datahub

        DATA_ATLAS_VERIFY_SSL
            Defaults to true.

        DATA_ATLAS_TIMEOUT_SECONDS
            Defaults to 30.

        DATA_ATLAS_DRY_RUN
            Defaults to false.
    """

    graphql_url = os.getenv("DATA_ATLAS_GRAPHQL_URL")
    token = os.getenv("DATA_ATLAS_TOKEN")

    if not graphql_url:
        raise ValueError(
            "DATA_ATLAS_GRAPHQL_URL is required. "
            "Example: export DATA_ATLAS_GRAPHQL_URL='https://data-atlas.example.com/api/graphql'"
        )

    if not token:
        raise ValueError(
            "DATA_ATLAS_TOKEN is required. "
            "Example: export DATA_ATLAS_TOKEN='your-token-here'"
        )

    timeout_raw = os.getenv("DATA_ATLAS_TIMEOUT_SECONDS", "30")

    try:
        timeout_seconds = int(timeout_raw)
    except ValueError as exc:
        raise ValueError("DATA_ATLAS_TIMEOUT_SECONDS must be an integer") from exc

    return DataAtlasConfig(
        graphql_url=graphql_url,
        token=token,
        auth_header=os.getenv("DATA_ATLAS_AUTH_HEADER", "Authorization"),
        auth_scheme=os.getenv("DATA_ATLAS_AUTH_SCHEME", "Bearer"),
        actor=os.getenv("DATA_ATLAS_ACTOR"),
        verify_ssl=_get_bool_env("DATA_ATLAS_VERIFY_SSL", True),
        timeout_seconds=timeout_seconds,
        dry_run=_get_bool_env("DATA_ATLAS_DRY_RUN", False),
    )




from __future__ import annotations

from typing import Any, Dict, List, Optional

import requests

try:
    from .config import DataAtlasConfig
except ImportError:
    from config import DataAtlasConfig


class DataAtlasError(RuntimeError):
    """Base error for Data Atlas client failures."""


class DataAtlasHTTPError(DataAtlasError):
    """Raised when Data Atlas returns a non-success HTTP response."""


class DataAtlasGraphQLError(DataAtlasError):
    """Raised when Data Atlas returns GraphQL errors."""

    def __init__(
        self,
        errors: List[Dict[str, Any]],
        data: Optional[Dict[str, Any]] = None,
    ):
        self.errors = errors
        self.data = data

        formatted_errors = []

        for error in errors:
            message = error.get("message", "Unknown GraphQL error")
            path = error.get("path")
            extensions = error.get("extensions") or {}
            code = extensions.get("code")
            error_type = extensions.get("type")

            parts = [f"message={message}"]

            if path:
                parts.append(f"path={path}")

            if code:
                parts.append(f"code={code}")

            if error_type:
                parts.append(f"type={error_type}")

            formatted_errors.append(", ".join(parts))

        super().__init__(
            "Data Atlas returned GraphQL errors: " + " | ".join(formatted_errors)
        )


class DataAtlasResponseError(DataAtlasError):
    """Raised when Data Atlas returns an unexpected response shape."""


class DataAtlasGraphQLClient:
    """
    Small GraphQL client used by the bulk upload scripts.

    This centralizes:
        - sink endpoint
        - token authentication
        - optional actor header
        - SSL verification
        - timeouts
        - dry-run behavior
        - HTTP and GraphQL error handling
    """

    def __init__(self, config: DataAtlasConfig):
        self.config = config
        self.session = requests.Session()

    @property
    def dry_run(self) -> bool:
        return self.config.dry_run

    def _auth_value(self) -> str:
        token = self.config.token
        scheme = self.config.auth_scheme.strip()

        if scheme:
            return f"{scheme} {token}"

        return token

    def _headers(self) -> Dict[str, str]:
        headers = {
            "Accept": "application/graphql-response+json, application/json",
            "Content-Type": "application/json",
            self.config.auth_header: self._auth_value(),
        }

        if self.config.actor:
            headers["X-DataHub-Actor"] = self.config.actor

        return headers

    def execute(
        self,
        query: str,
        variables: Optional[Dict[str, Any]] = None,
        operation_name: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Execute a GraphQL operation and return the `data` object.

        Raises:
            DataAtlasHTTPError
            DataAtlasGraphQLError
            DataAtlasResponseError
        """

        payload: Dict[str, Any] = {
            "query": query,
            "variables": variables or {},
        }

        if operation_name:
            payload["operationName"] = operation_name

        if self.config.dry_run:
            return {
                "__dry_run__": True,
                "operationName": operation_name,
                "variables": variables or {},
            }

        response = self.session.post(
            self.config.graphql_url,
            headers=self._headers(),
            json=payload,
            timeout=self.config.timeout_seconds,
            verify=self.config.verify_ssl,
        )

        try:
            body = response.json()
        except ValueError as exc:
            raise DataAtlasResponseError(
                "Data Atlas returned a non-JSON response. "
                f"HTTP status={response.status_code}. "
                f"Response body preview={response.text[:500]}"
            ) from exc

        if response.status_code >= 400:
            raise DataAtlasHTTPError(
                "Data Atlas returned an HTTP error. "
                f"HTTP status={response.status_code}. "
                f"Response body={body}"
            )

        data = body.get("data")
        errors = body.get("errors")

        if errors:
            raise DataAtlasGraphQLError(errors=errors, data=data)

        if data is None:
            raise DataAtlasResponseError(
                f"Data Atlas response did not contain a data object. Response body={body}"
            )

        return data





from __future__ import annotations

from pathlib import Path
import re
from typing import Any, Dict, List, Optional, Union

import pandas as pd


def normalize_column_name(name: Any) -> str:
    """
    Convert Excel column names to predictable snake_case names.

    Examples:
        "Column_Name" -> "column_name"
        "Column Name" -> "column_name"
        "Schema Name" -> "schema_name"
    """

    text = str(name).strip().lower()
    text = re.sub(r"[^a-z0-9]+", "_", text)
    text = re.sub(r"_+", "_", text)
    return text.strip("_")


def clean_value(value: Any) -> Optional[str]:
    """
    Normalize blank Excel values to None and strip string values.
    """

    if value is None:
        return None

    try:
        if pd.isna(value):
            return None
    except TypeError:
        pass

    text = str(value).strip()

    if not text:
        return None

    if text.lower() in {"nan", "none", "null"}:
        return None

    return text


def read_excel_template(
    path: Union[str, Path],
    sheet_name: Optional[Union[str, int]] = None,
) -> pd.DataFrame:
    """
    Read an Excel sheet and normalize its column names.
    """

    if sheet_name is None:
        df = pd.read_excel(path)
    else:
        df = pd.read_excel(path, sheet_name=sheet_name)

    df = df.copy()
    df.columns = [normalize_column_name(column) for column in df.columns]
    return df


def get_value(
    row: pd.Series,
    *column_names: str,
    required: bool = False,
    default: Optional[str] = None,
) -> Optional[str]:
    """
    Fetch a value from a normalized pandas row using one or more possible names.

    Column names passed here do not have to already be normalized.
    """

    for column_name in column_names:
        key = normalize_column_name(column_name)

        if key in row.index:
            value = clean_value(row[key])

            if value is not None:
                return value

    if required:
        joined = ", ".join(column_names)
        raise ValueError(f"Missing required column/value. Expected one of: {joined}")

    return default


def is_blank_row(row: pd.Series) -> bool:
    """
    Return True when every cell in a row is blank-ish.
    """

    for value in row.values:
        if clean_value(value) is not None:
            return False

    return True


def build_dataset_name_from_row(row: pd.Series) -> str:
    """
    Build the DataHub/Data Atlas dataset name from template fields.

    Existing MDH script used:
        {Database}.{Schema Name}.{Dataset Name}
    """

    database = get_value(row, "database", required=True)
    schema = get_value(row, "schema_name", "schema name", required=True)
    dataset_name = get_value(row, "dataset_name", "dataset name", required=True)

    return f"{database}.{schema}.{dataset_name}"


def build_dataset_urn_from_row(row: pd.Series) -> str:
    """
    Return resource_urn if provided, otherwise build it using DataHub's mce_builder.

    Required template columns when resource_urn is not present:
        Platform
        Database
        Schema Name
        Dataset Name
        Env Name
    """

    existing_resource_urn = get_value(
        row,
        "resource_urn",
        "resource urn",
        "urn",
        "dataset_urn",
        "dataset urn",
    )

    if existing_resource_urn:
        return existing_resource_urn

    try:
        import datahub.emitter.mce_builder as builder
    except ImportError as exc:
        raise ImportError(
            "datahub.emitter.mce_builder is required to build dataset URNs. "
            "Install the DataHub package or provide resource_urn directly in the template."
        ) from exc

    platform = get_value(row, "platform", required=True)
    env = get_value(row, "env_name", "env name", "env", required=True)
    dataset_name = build_dataset_name_from_row(row)

    return builder.make_dataset_urn(platform, dataset_name, env)


def write_report(rows: List[Dict[str, Any]], output_path: Union[str, Path]) -> Path:
    """
    Write row-level execution results to CSV.
    """

    path = Path(output_path)
    path.parent.mkdir(parents=True, exist_ok=True)

    df = pd.DataFrame(rows)
    df.to_csv(path, index=False)

    return path


def has_failures(rows: List[Dict[str, Any]]) -> bool:
    """
    Return True if any result row has success=False.
    """

    for row in rows:
        if row.get("success") is False:
            return True

    return False





from __future__ import annotations

import argparse
from dataclasses import replace
import sys
from typing import Any, Dict, List, Optional

import pandas as pd

try:
    from .client import DataAtlasGraphQLClient
    from .config import load_config
    from .utils import (
        build_dataset_urn_from_row,
        get_value,
        has_failures,
        is_blank_row,
        read_excel_template,
        write_report,
    )
except ImportError:
    from client import DataAtlasGraphQLClient
    from config import load_config
    from utils import (
        build_dataset_urn_from_row,
        get_value,
        has_failures,
        is_blank_row,
        read_excel_template,
        write_report,
    )


UPDATE_DESCRIPTION_MUTATION = """
mutation updateDescription(
    $description: String!,
    $resourceUrn: String!,
    $subResourceType: SubResourceType,
    $subResource: String
) {
    updateDescription(input: {
        description: $description,
        resourceUrn: $resourceUrn,
        subResourceType: $subResourceType,
        subResource: $subResource
    })
}
"""


def set_column_description(
    client: DataAtlasGraphQLClient,
    description: str,
    resource_urn: str,
    column_name: str,
) -> Dict[str, Any]:
    """
    Update a column description in Data Atlas.
    """

    variables = {
        "description": description,
        "resourceUrn": resource_urn,
        "subResourceType": "DATASET_FIELD",
        "subResource": column_name,
    }

    if client.dry_run:
        client.execute(
            UPDATE_DESCRIPTION_MUTATION,
            variables,
            operation_name="updateDescription",
        )

        return {
            "success": True,
            "dry_run": True,
            "urn": resource_urn,
            "field": column_name,
            "description": description,
        }

    data = client.execute(
        UPDATE_DESCRIPTION_MUTATION,
        variables,
        operation_name="updateDescription",
    )

    return {
        "success": bool(data.get("updateDescription")),
        "dry_run": False,
        "urn": resource_urn,
        "field": column_name,
        "description": description,
    }


def process_description_rows(
    df: pd.DataFrame,
    client: DataAtlasGraphQLClient,
    fail_fast: bool = False,
    limit: Optional[int] = None,
) -> List[Dict[str, Any]]:
    """
    Process description template rows.

    Supported template styles:

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
    """

    results: List[Dict[str, Any]] = []

    if limit is not None:
        df = df.head(limit)

    for index, row in df.iterrows():
        excel_row_number = index + 2

        if is_blank_row(row):
            continue

        try:
            resource_urn = build_dataset_urn_from_row(row)

            column_name = get_value(
                row,
                "column_name",
                "column name",
                "field",
                "field_name",
                "field name",
                required=True,
            )

            description = get_value(
                row,
                "description",
                "column_description",
                "column description",
                required=True,
            )

            result = set_column_description(
                client=client,
                description=description,
                resource_urn=resource_urn,
                column_name=column_name,
            )

            result["row"] = excel_row_number
            results.append(result)

        except Exception as exc:
            failure = {
                "success": False,
                "dry_run": client.dry_run,
                "row": excel_row_number,
                "error": str(exc),
            }

            results.append(failure)

            if fail_fast:
                raise

    return results


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Bulk upload column descriptions to Data Atlas."
    )

    parser.add_argument(
        "workbook",
        help="Path to the Excel workbook containing description rows.",
    )

    parser.add_argument(
        "--sheet",
        default=None,
        help=(
            "Excel sheet name. "
            "If omitted, pandas will read the first sheet in the workbook."
        ),
    )

    parser.add_argument(
        "--output",
        default="outputs/descriptions_results.csv",
        help="CSV output path for row-level results.",
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show intended operations without publishing to Data Atlas.",
    )

    parser.add_argument(
        "--fail-fast",
        action="store_true",
        help="Stop immediately on the first failed row.",
    )

    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Optional max number of rows to process.",
    )

    return parser


def main() -> None:
    parser = build_arg_parser()
    args = parser.parse_args()

    config = load_config()

    if args.dry_run:
        config = replace(config, dry_run=True)

    client = DataAtlasGraphQLClient(config)

    df = read_excel_template(args.workbook, sheet_name=args.sheet)

    results = process_description_rows(
        df=df,
        client=client,
        fail_fast=args.fail_fast,
        limit=args.limit,
    )

    report_path = write_report(results, args.output)

    total = len(results)
    failed = sum(1 for row in results if row.get("success") is False)
    succeeded = total - failed

    print(f"Description upload complete. Success={succeeded}, Failed={failed}")
    print(f"Report written to: {report_path}")

    if has_failures(results):
        sys.exit(1)


if __name__ == "__main__":
    main()







from __future__ import annotations

import argparse
from dataclasses import replace
from pathlib import Path
import re
import sys
from typing import Any, Dict, List, Optional, Tuple, Union

import pandas as pd

try:
    from .client import DataAtlasGraphQLClient
    from .config import load_config
    from .utils import (
        build_dataset_urn_from_row,
        clean_value,
        get_value,
        has_failures,
        is_blank_row,
        read_excel_template,
        write_report,
    )
except ImportError:
    from client import DataAtlasGraphQLClient
    from config import load_config
    from utils import (
        build_dataset_urn_from_row,
        clean_value,
        get_value,
        has_failures,
        is_blank_row,
        read_excel_template,
        write_report,
    )


CREATE_GLOSSARY_TERM_MUTATION = """
mutation createGlossaryTerm(
    $name: String!,
    $description: String,
    $parentNode: String
) {
    createGlossaryTerm(input: {
        name: $name,
        description: $description,
        parentNode: $parentNode
    })
}
"""


SEARCH_GLOSSARY_TERM_BY_NAME_QUERY = """
query searchGlossaryTermByName($input: SearchAcrossEntitiesInput!) {
    searchAcrossEntities(input: $input) {
        searchResults {
            entity {
                urn
                ... on GlossaryTerm {
                    properties {
                        name
                        description
                    }
                }
            }
        }
    }
}
"""


ADD_TERMS_MUTATION = """
mutation addTerms(
    $termUrns: [String!]!,
    $resourceUrn: String!,
    $subResourceType: SubResourceType,
    $subResource: String
) {
    addTerms(input: {
        termUrns: $termUrns,
        resourceUrn: $resourceUrn,
        subResourceType: $subResourceType,
        subResource: $subResource
    })
}
"""


REMOVE_TERMS_MUTATION = """
mutation removeTerms(
    $termUrns: [String!]!,
    $resourceUrn: String!,
    $subResourceType: SubResourceType,
    $subResource: String
) {
    batchRemoveTerms(input: {
        termUrns: $termUrns,
        resources: [{
            resourceUrn: $resourceUrn,
            subResourceType: $subResourceType,
            subResource: $subResource
        }]
    })
}
"""


def _fake_glossary_urn(name: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9_.-]+", "_", name.strip())
    slug = slug.strip("_") or "unknown"
    return f"urn:li:glossaryTerm:{slug}"


def _normalize_term_name(name: str) -> str:
    return name.strip()


def _term_cache_key(name: str) -> str:
    return _normalize_term_name(name).lower()


def search_glossary_term_urn(
    client: DataAtlasGraphQLClient,
    term_name: str,
    exact_match: bool = True,
) -> Optional[str]:
    """
    Search Data Atlas for a glossary term by name.

    Returns:
        Glossary term URN when found, otherwise None.
    """

    term_name = _normalize_term_name(term_name)

    if client.dry_run:
        return None

    variables = {
        "input": {
            "types": ["GLOSSARY_TERM"],
            "query": term_name,
            "start": 0,
            "count": 10,
        }
    }

    data = client.execute(
        SEARCH_GLOSSARY_TERM_BY_NAME_QUERY,
        variables,
        operation_name="searchGlossaryTermByName",
    )

    search_results = (
        data.get("searchAcrossEntities", {})
        .get("searchResults", [])
    )

    first_urn: Optional[str] = None

    for result in search_results:
        entity = result.get("entity") or {}
        urn = entity.get("urn")

        if not urn:
            continue

        if first_urn is None:
            first_urn = urn

        properties = entity.get("properties") or {}
        found_name = clean_value(properties.get("name"))

        if found_name and found_name.strip().lower() == term_name.lower():
            return urn

    if exact_match:
        return None

    return first_urn


def create_glossary_term(
    client: DataAtlasGraphQLClient,
    name: str,
    description: Optional[str] = None,
    parent_node: Optional[str] = None,
) -> str:
    """
    Create a glossary term and return its URN.
    """

    name = _normalize_term_name(name)

    variables = {
        "name": name,
        "description": description or "",
        "parentNode": parent_node,
    }

    if client.dry_run:
        client.execute(
            CREATE_GLOSSARY_TERM_MUTATION,
            variables,
            operation_name="createGlossaryTerm",
        )

        return _fake_glossary_urn(name)

    data = client.execute(
        CREATE_GLOSSARY_TERM_MUTATION,
        variables,
        operation_name="createGlossaryTerm",
    )

    term_urn = data.get("createGlossaryTerm")

    if not term_urn:
        raise RuntimeError(
            f"createGlossaryTerm did not return a glossary term URN for name={name}"
        )

    return term_urn


def resolve_glossary_term_urn(
    client: DataAtlasGraphQLClient,
    term_name: str,
    cache: Dict[str, str],
    create_if_missing: bool = False,
    description: str = "",
    parent_node: Optional[str] = None,
) -> str:
    """
    Resolve a glossary term name to a URN using cache, search, and optional creation.
    """

    term_name = _normalize_term_name(term_name)
    cache_key = _term_cache_key(term_name)

    if cache_key in cache:
        return cache[cache_key]

    found_urn = search_glossary_term_urn(client, term_name, exact_match=True)

    if found_urn:
        cache[cache_key] = found_urn
        return found_urn

    if not create_if_missing:
        raise LookupError(
            f"Glossary term was not found in Data Atlas and create_if_missing=False: {term_name}"
        )

    created_urn = create_glossary_term(
        client=client,
        name=term_name,
        description=description,
        parent_node=parent_node,
    )

    cache[cache_key] = created_urn
    return created_urn


def create_terms_from_df(
    df: pd.DataFrame,
    client: DataAtlasGraphQLClient,
    cache: Optional[Dict[str, str]] = None,
    fail_fast: bool = False,
    limit: Optional[int] = None,
) -> Tuple[List[Dict[str, Any]], Dict[str, str]]:
    """
    Create or resolve glossary terms from the glossary template sheet.

    Supported columns:
        glossary_name / glossary name / term_name / name
        definition / description
        parent_node / parent node / parentNode

    parent_node is optional. If blank, the term is created as a top-level term
    if Data Atlas allows top-level glossary terms.
    """

    results: List[Dict[str, Any]] = []
    cache = cache or {}

    if limit is not None:
        df = df.head(limit)

    for index, row in df.iterrows():
        excel_row_number = index + 2

        if is_blank_row(row):
            continue

        try:
            name = get_value(
                row,
                "glossary_name",
                "glossary name",
                "term_name",
                "term name",
                "name",
                required=True,
            )

            description = get_value(
                row,
                "definition",
                "description",
                default="",
            ) or ""

            parent_node = get_value(
                row,
                "parent_node",
                "parent node",
                "parentNode",
                default=None,
            )

            existing_urn = search_glossary_term_urn(
                client=client,
                term_name=name,
                exact_match=True,
            )

            if existing_urn:
                cache[_term_cache_key(name)] = existing_urn

                results.append(
                    {
                        "success": True,
                        "dry_run": client.dry_run,
                        "row": excel_row_number,
                        "action": "exists",
                        "glossary_name": name,
                        "glossary_urn": existing_urn,
                        "message": "Glossary term already exists.",
                    }
                )

                continue

            created_urn = create_glossary_term(
                client=client,
                name=name,
                description=description,
                parent_node=parent_node,
            )

            cache[_term_cache_key(name)] = created_urn

            results.append(
                {
                    "success": True,
                    "dry_run": client.dry_run,
                    "row": excel_row_number,
                    "action": "created",
                    "glossary_name": name,
                    "glossary_urn": created_urn,
                    "message": "Glossary term created.",
                }
            )

        except Exception as exc:
            failure = {
                "success": False,
                "dry_run": client.dry_run,
                "row": excel_row_number,
                "action": "create_or_resolve",
                "error": str(exc),
            }

            results.append(failure)

            if fail_fast:
                raise

    return results, cache


def assign_terms(
    client: DataAtlasGraphQLClient,
    term_urns: Union[List[str], str],
    resource_urn: str,
    column_name: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Assign one or more glossary terms to a dataset or dataset field.
    """

    if isinstance(term_urns, str):
        term_urns = [term_urns]

    variables = {
        "termUrns": term_urns,
        "resourceUrn": resource_urn,
        "subResourceType": None,
        "subResource": None,
    }

    if column_name:
        variables["subResourceType"] = "DATASET_FIELD"
        variables["subResource"] = column_name

    if client.dry_run:
        client.execute(
            ADD_TERMS_MUTATION,
            variables,
            operation_name="addTerms",
        )

        return {
            "success": True,
            "dry_run": True,
            "urn": resource_urn,
            "field": column_name,
            "terms": term_urns,
        }

    data = client.execute(
        ADD_TERMS_MUTATION,
        variables,
        operation_name="addTerms",
    )

    return {
        "success": bool(data.get("addTerms")),
        "dry_run": False,
        "urn": resource_urn,
        "field": column_name,
        "terms": term_urns,
    }


def unassign_terms(
    client: DataAtlasGraphQLClient,
    term_urns: Union[List[str], str],
    resource_urn: str,
    column_name: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Remove one or more glossary terms from a dataset or dataset field.
    """

    if isinstance(term_urns, str):
        term_urns = [term_urns]

    variables = {
        "termUrns": term_urns,
        "resourceUrn": resource_urn,
        "subResourceType": None,
        "subResource": None,
    }

    if column_name:
        variables["subResourceType"] = "DATASET_FIELD"
        variables["subResource"] = column_name

    if client.dry_run:
        client.execute(
            REMOVE_TERMS_MUTATION,
            variables,
            operation_name="removeTerms",
        )

        return {
            "success": True,
            "dry_run": True,
            "urn": resource_urn,
            "field": column_name,
            "terms": term_urns,
        }

    data = client.execute(
        REMOVE_TERMS_MUTATION,
        variables,
        operation_name="removeTerms",
    )

    return {
        "success": bool(data.get("batchRemoveTerms")),
        "dry_run": False,
        "urn": resource_urn,
        "field": column_name,
        "terms": term_urns,
    }


def assign_terms_from_df(
    df: pd.DataFrame,
    client: DataAtlasGraphQLClient,
    cache: Optional[Dict[str, str]] = None,
    create_missing_from_assignments: bool = False,
    fail_fast: bool = False,
    limit: Optional[int] = None,
) -> List[Dict[str, Any]]:
    """
    Assign glossary terms to datasets or dataset fields.

    Supported assignment columns:

    Preferred:
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

    Notes:
        Column_Name is optional.
        If Column_Name is blank, the term is assigned to the dataset.
        If Column_Name is populated, the term is assigned to that field.
    """

    results: List[Dict[str, Any]] = []
    cache = cache or {}

    if limit is not None:
        df = df.head(limit)

    for index, row in df.iterrows():
        excel_row_number = index + 2

        if is_blank_row(row):
            continue

        try:
            resource_urn = build_dataset_urn_from_row(row)

            column_name = get_value(
                row,
                "column_name",
                "column name",
                "field",
                "field_name",
                "field name",
                default=None,
            )

            direct_term_urn = get_value(
                row,
                "term_urn",
                "term urn",
                "glossary_urn",
                "glossary urn",
                default=None,
            )

            term_name = get_value(
                row,
                "glossary_name",
                "glossary name",
                "term_name",
                "term name",
                "name",
                default=None,
            )

            if direct_term_urn:
                term_urn = direct_term_urn
            else:
                if not term_name:
                    raise ValueError(
                        "Missing glossary term. Expected glossary_name, term_name, glossary_urn, or term_urn."
                    )

                description = get_value(
                    row,
                    "definition",
                    "description",
                    default="",
                ) or ""

                parent_node = get_value(
                    row,
                    "parent_node",
                    "parent node",
                    "parentNode",
                    default=None,
                )

                term_urn = resolve_glossary_term_urn(
                    client=client,
                    term_name=term_name,
                    cache=cache,
                    create_if_missing=create_missing_from_assignments,
                    description=description,
                    parent_node=parent_node,
                )

            result = assign_terms(
                client=client,
                term_urns=[term_urn],
                resource_urn=resource_urn,
                column_name=column_name,
            )

            result["row"] = excel_row_number
            result["action"] = "assign"
            result["glossary_name"] = term_name
            result["glossary_urn"] = term_urn

            results.append(result)

        except Exception as exc:
            failure = {
                "success": False,
                "dry_run": client.dry_run,
                "row": excel_row_number,
                "action": "assign",
                "error": str(exc),
            }

            results.append(failure)

            if fail_fast:
                raise

    return results


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Bulk upload glossary terms and glossary assignments to Data Atlas."
    )

    parser.add_argument(
        "workbook",
        help="Path to the Excel workbook containing glossary template sheets.",
    )

    parser.add_argument(
        "--terms-sheet",
        default="Glossary Template",
        help="Excel sheet containing glossary term definitions.",
    )

    parser.add_argument(
        "--assignments-sheet",
        default="Dataset Template",
        help="Excel sheet containing dataset or column glossary assignments.",
    )

    parser.add_argument(
        "--output-dir",
        default="outputs",
        help="Directory where result CSV files will be written.",
    )

    parser.add_argument(
        "--skip-term-creation",
        action="store_true",
        help="Skip the glossary term creation/resolution sheet.",
    )

    parser.add_argument(
        "--skip-assignments",
        action="store_true",
        help="Skip the glossary assignment sheet.",
    )

    parser.add_argument(
        "--create-missing-from-assignments",
        action="store_true",
        help=(
            "If a glossary assignment references a missing term, create it. "
            "The assignment row may include parent_node when this is enabled."
        ),
    )

    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show intended operations without publishing to Data Atlas.",
    )

    parser.add_argument(
        "--fail-fast",
        action="store_true",
        help="Stop immediately on the first failed row.",
    )

    parser.add_argument(
        "--limit",
        type=int,
        default=None,
        help="Optional max number of rows to process per sheet.",
    )

    return parser


def main() -> None:
    parser = build_arg_parser()
    args = parser.parse_args()

    config = load_config()

    if args.dry_run:
        config = replace(config, dry_run=True)

    client = DataAtlasGraphQLClient(config)

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    all_results: List[Dict[str, Any]] = []
    term_cache: Dict[str, str] = {}

    if not args.skip_term_creation:
        terms_df = read_excel_template(args.workbook, sheet_name=args.terms_sheet)

        term_results, term_cache = create_terms_from_df(
            df=terms_df,
            client=client,
            cache=term_cache,
            fail_fast=args.fail_fast,
            limit=args.limit,
        )

        term_report_path = write_report(
            term_results,
            output_dir / "glossary_terms_results.csv",
        )

        all_results.extend(term_results)

        term_failed = sum(1 for row in term_results if row.get("success") is False)
        term_succeeded = len(term_results) - term_failed

        print(
            f"Glossary term processing complete. "
            f"Success={term_succeeded}, Failed={term_failed}"
        )
        print(f"Glossary term report written to: {term_report_path}")

    if not args.skip_assignments:
        assignments_df = read_excel_template(
            args.workbook,
            sheet_name=args.assignments_sheet,
        )

        assignment_results = assign_terms_from_df(
            df=assignments_df,
            client=client,
            cache=term_cache,
            create_missing_from_assignments=args.create_missing_from_assignments,
            fail_fast=args.fail_fast,
            limit=args.limit,
        )

        assignment_report_path = write_report(
            assignment_results,
            output_dir / "glossary_assignments_results.csv",
        )

        all_results.extend(assignment_results)

        assignment_failed = sum(
            1 for row in assignment_results if row.get("success") is False
        )
        assignment_succeeded = len(assignment_results) - assignment_failed

        print(
            f"Glossary assignment processing complete. "
            f"Success={assignment_succeeded}, Failed={assignment_failed}"
        )
        print(f"Glossary assignment report written to: {assignment_report_path}")

    if has_failures(all_results):
        sys.exit(1)


if __name__ == "__main__":
    main()




