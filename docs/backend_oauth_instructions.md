# Backend OAuth Integration Instructions

These are copy-paste instructions for the backend developer to integrate
Azure AD OAuth token validation into the FastAPI app and expose the
`/v1/user/roles` endpoint.

---

## 1. New Python Dependencies

Add the following to `api/requirements.txt`:

```
python-jose[cryptography]>=3.3.0
psycopg2-binary>=2.9.0
requests>=2.31.0
```

Then install:

```bash
pip install python-jose[cryptography] psycopg2-binary requests
```

---

## 2. Environment Variables

Add the following variables to your environment (alongside existing ones):

```
AZURE_CLIENT_ID=<your-azure-ad-app-client-id>
AZURE_TENANT_ID=<your-azure-ad-tenant-id>
POSTGRES_DSN=postgresql://user:password@host:5432/dbname
FRONTEND_ORIGIN=https://<your-aks-frontend-domain>
```

In DEV mode (`VERSION=DEV`), token validation can be skipped by setting:
```
SKIP_TOKEN_VALIDATION=true
```

---

## 3. CORS Middleware

In `api/main.py`, add CORS middleware **before** any route includes.
Replace the existing app setup block with:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# ---------------------------------------------------------------------------
# CORS — allow the AKS frontend origin
# ---------------------------------------------------------------------------
FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "http://localhost:5000")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type", "x-forwarded-access-token"],
)

# ... rest of existing app setup (include routers, etc.)
```

---

## 4. Token Validation Middleware

Create a new file `api/v1/middleware/validate_token.py`:

```python
import os
import requests
from functools import lru_cache
from jose import jwt, JWTError
from fastapi import HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

AZURE_TENANT_ID = os.getenv("AZURE_TENANT_ID", "")
AZURE_CLIENT_ID = os.getenv("AZURE_CLIENT_ID", "")
SKIP_VALIDATION  = os.getenv("SKIP_TOKEN_VALIDATION", "false").lower() == "true"
VERSION          = os.getenv("VERSION", "PROD")

bearer_scheme = HTTPBearer(auto_error=False)


@lru_cache(maxsize=1)
def _get_jwks() -> dict:
    """Fetch Azure AD public keys. Cached for the process lifetime."""
    url = (
        f"https://login.microsoftonline.com/{AZURE_TENANT_ID}"
        f"/discovery/v2.0/keys"
    )
    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    return resp.json()


def validate_azure_token(token: str) -> dict:
    """
    Validate an Azure AD JWT and return its claims.
    Raises HTTPException 401 on any failure.
    """
    if SKIP_VALIDATION or VERSION == "DEV":
        # In DEV mode return a synthetic claims dict
        return {"preferred_username": "dev@genworth.net", "name": "Dev User"}

    try:
        header = jwt.get_unverified_header(token)
        jwks   = _get_jwks()
        public_key = next(
            (k for k in jwks["keys"] if k["kid"] == header["kid"]),
            None,
        )
        if not public_key:
            raise HTTPException(status_code=401, detail="Unknown signing key")

        claims = jwt.decode(
            token,
            public_key,
            algorithms=["RS256"],
            audience=AZURE_CLIENT_ID,
        )
        return claims
    except JWTError as exc:
        raise HTTPException(status_code=401, detail=f"Invalid token: {exc}") from exc


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Security(bearer_scheme),
) -> dict:
    """
    FastAPI dependency — resolves to the validated token claims.
    Use as:  current_user: dict = Depends(get_current_user)
    """
    token = None

    if credentials:
        token = credentials.credentials

    if not token:
        if SKIP_VALIDATION or VERSION == "DEV":
            return {"preferred_username": "dev@genworth.net", "name": "Dev User"}
        raise HTTPException(status_code=401, detail="Authorization token required")

    return validate_azure_token(token)
```

---

## 5. Protect Existing Routes

In `api/v1/routes/tables.py` and `api/v1/routes/user.py`, add the dependency
to any routes that should require authentication:

```python
from fastapi import APIRouter, Depends
from api.v1.middleware.validate_token import get_current_user

router = APIRouter()

@router.get("/tables/list")
def list_tables(current_user: dict = Depends(get_current_user)):
    # existing implementation unchanged
    ...
```

---

## 6. New `/v1/user/roles` Endpoint

Create a new file `api/v1/routes/roles.py`:

```python
import os
import psycopg2
import psycopg2.extras
from fastapi import APIRouter, Depends, HTTPException
from api.v1.middleware.validate_token import get_current_user

router = APIRouter()

POSTGRES_DSN = os.getenv("POSTGRES_DSN", "")


def _get_pg_connection():
    if not POSTGRES_DSN:
        raise HTTPException(
            status_code=503,
            detail="Authorization database not configured (POSTGRES_DSN missing)",
        )
    return psycopg2.connect(POSTGRES_DSN)


@router.get("/user/roles")
def get_user_roles(current_user: dict = Depends(get_current_user)):
    """
    Return the roles assigned to the currently authenticated user.

    Response shape:
      {
        "username": "sso@genworth.net",
        "roles": ["admin", "viewer"]
      }
    """
    username: str = current_user.get("preferred_username", "")

    conn = _get_pg_connection()
    try:
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
            cur.execute(
                """
                SELECT r.role_name
                FROM   user_roles ur
                JOIN   roles r ON r.role_name = ur.role_name
                WHERE  ur.username = %s
                """,
                (username,),
            )
            rows = cur.fetchall()
    finally:
        conn.close()

    return {
        "username": username,
        "roles": [row["role_name"] for row in rows],
    }
```

Then register the new router in `api/main.py`:

```python
from api.v1.routes import roles as roles_router

app.include_router(roles_router.router, prefix="/v1")
```

---

## 7. Update `api/v1/middleware/__init__.py`

Ensure the new middleware module is importable by adding it if needed:

```python
# api/v1/middleware/__init__.py  — no changes required if file already exists
```

---

## Summary of Files Changed

| File | Action |
|------|--------|
| `api/requirements.txt` | Add 3 new packages |
| `api/main.py` | Add CORS middleware + register roles router |
| `api/v1/middleware/validate_token.py` | **New file** — JWT validation dependency |
| `api/v1/routes/roles.py` | **New file** — `/v1/user/roles` endpoint |

The frontend will start sending `Authorization: Bearer <token>` on every API
request once the Azure AD App Registration is configured and the env vars
`NEXT_PUBLIC_AZURE_CLIENT_ID` and `NEXT_PUBLIC_AZURE_TENANT_ID` are set.
