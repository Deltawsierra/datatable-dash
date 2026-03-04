import os
from databricks import sql
from databricks.sql.client import Connection
from api.v1.middleware.get_token import _get_token
from fastapi import HTTPException, Request


def get_dbx_connection(request: Request) -> Connection:
    """
    Return an open Databricks SQL Connection.
    Caller is responsible for closing it.
    """
    access_token = _get_token(request)
    if not access_token:
        raise HTTPException(status_code=401, detail="Missing token.")
    try:
        return sql.connect(
            server_hostname=os.getenv("SERVER_HOSTNAME"),
            http_path=os.getenv("HTTP_PATH"),
            access_token=access_token,
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Databricks connection failed: {e}"
        )
