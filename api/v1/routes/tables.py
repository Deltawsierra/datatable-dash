from fastapi import Header, Request, HTTPException, Query
from databricks import sql
import os
from databricks.sql.parameters.native import TAllowedParameterValue
from typing import Any
from api.v1.middleware import _get_token, get_dbx_connection
from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
async def health():
    return {"Status": "Active"}


@router.get("/tables/list")
def get_all_tables(request: Request):
    """Returns all tables in the schema."""
    query = "SHOW TABLES IN IDENTIFIER(:schema)"
    params: dict[str, Any] = {"schema": f"{os.getenv('CATALOG')}.{os.getenv('SCHEMA')}"}
    connection = get_dbx_connection(request)
    try:
        with connection.cursor() as cursor:
            cursor.execute(query, parameters=params)
            rows = cursor.fetchall()

            # cursor.description returns a list of tuples that describe the columns that the cursor returns. The relevant indexes are:
            # [0]: column name
            # [1]: column database type
            if cursor.description is None:
                # Handle case when no description is available. Assume default Databricks ordering
                results = [
                    {"database": r[0], "tableName": r[1], "isTemporary": r[2]}
                    for r in rows
                ]
            else:
                # Get all column names from description
                colnames = [d[0] for d in cursor.description]

                # Creates a dictionary that pairs identifiers and values.
                # eg: {"database": "databricks_database", "tableName": "customers_table", "isTemporary": false}
                results = [dict(zip(colnames, r)) for r in rows]

            table_names = [
                r.get("tableName") or r.get("tableName".lower()) for r in results
            ]
            return {"count": len(table_names), "tables": table_names}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Databricks query failed: {e}")
    finally:
        # Ensure the connection is always closed
        try:
            connection.close()
        except Exception:
            pass


@router.get("/tables/{table_name}")
def get_table(
    request: Request,
    table_name: str,
    limit: int = Query(1000, ge=1, le=1000, description="Max rows to return"),
    offset: int = Query(0, ge=0, description="Rows to skip"),
):
    """Pulls table based on name"""

    query = f"SELECT * FROM IDENTIFIER(:table_path) LIMIT :limit OFFSET :offset"
    params: dict[str, Any] = {
        "table_path": f"{os.getenv('CATALOG')}.{os.getenv('SCHEMA')}.{table_name}",
        "limit": limit,
        "offset": offset,
    }
    connection = get_dbx_connection(request)

    try:
        with connection.cursor() as cursor:
            cursor.execute(query, parameters=params)
            rows = cursor.fetchall()

            # cursor.description returns a list of tuples that describe the columns that the cursor returns
            if cursor.description is None:
                colnames = []
            else:
                # Get the column names from the description tuples and put them in a list
                colnames = [d[0] for d in cursor.description]
            # Use the list of columns names and to map the data
            results = [dict(zip(colnames, r)) for r in rows]
            return {
                "limit": limit,
                "offset": offset,
                "row_count": len(results),
                "data": results,
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Databricks query failed: {e}")
    finally:
        # Ensure the connection is always closed
        try:
            connection.close()
        except Exception:
            pass


@router.get("/tables/{table_name}/info")
def get_table_metadata(
    request: Request,
    table_name: str,
):
    """
    Returns table metadata only:
        - columns (name + data type)
        - total row count
    No actual table rows are returned.
    """

    table_path = f"{os.getenv('CATALOG')}.{os.getenv('SCHEMA')}.{table_name}"

    describe_query = "DESCRIBE TABLE IDENTIFIER(:table_path)"

    rowcount_query = "SELECT COUNT(*) AS total_rows FROM IDENTIFIER(:table_path)"

    params_path: dict[str, Any] = {
        "table_path": table_path,
    }

    connection = get_dbx_connection(request)

    try:
        with connection.cursor() as cursor:
            # --- Columns metadata ---

            cursor.execute(describe_query, parameters=params_path)
            rows = cursor.fetchall()

            columns = []
            for r in rows:
                col_name = r[0]
                data_type = r[1]
                if not col_name:
                    continue
                # Skip special/system/comment rows that begin with "#"
                if str(col_name).startswith("#"):
                    continue
                columns.append({"name": col_name, "data_type": data_type})

            # If not found, treat as table not found
            if not columns:
                raise HTTPException(
                    status_code=404,
                    detail=f"Table not found or no columns visible: {table_path}",
                )

            # --- Row count ---
            cursor.execute(rowcount_query, parameters=params_path)
            count_row = cursor.fetchone()
            total_rows = count_row[0] if count_row else 0

            return {
                "table": table_path,
                "total_rows": total_rows,
                "column_count": len(columns),
                "columns": [
                    {"name": c["name"], "data_type": c["data_type"]} for c in columns
                ],
            }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Databricks metadata query failed: {e}"
        )
    finally:
        try:
            connection.close()
        except Exception:
            pass
