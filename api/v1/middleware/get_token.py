from fastapi import Request
import os


def get_version() -> str:
    """Return Version from .env"""
    return os.getenv("VERSION", "").strip().upper()


def _get_access_token_from_env() -> str | None:
    """Return token from .env only when VERSION=DEV and token is set; otherwise None."""
    token = os.getenv("DATABRICKS_ACCESS_TOKEN")
    if token and token.strip():
        return token.strip()
    return None


def _get_token(request: Request) -> str | None:
    """Get env token or header token"""
    env_token = ""
    if get_version() == "DEV":
        env_token = _get_access_token_from_env()
    token = env_token or request.headers.get("x-forwarded-access-token")
    return token
