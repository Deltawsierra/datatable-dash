from fastapi import Request, HTTPException
import os
import json
import requests
from fastapi import APIRouter
from api.v1.middleware import _get_token

router = APIRouter()


def extract_useful_info_json(me):
    primary_work_email = next(
        (
            e["value"]
            for e in me.get("emails", [])
            if e.get("type") == "work" and e.get("primary") is True
        ),
        None,
    )

    filtered_json = {
        "userName": me.get("userName"),
        "id": me.get("id"),
        "displayName": me.get("displayName"),
        "email": primary_work_email,
    }
    return filtered_json


@router.get("/user/info")
def get_info(request: Request):
    """Display user information based on token"""
    token = _get_token(request)
    url = f"https://{os.getenv('SERVER_HOSTNAME')}/api/2.0/preview/scim/v2/Me"
    if not token:
        raise HTTPException(status_code=401, detail="Authentication required")
    try:
        resp = requests.get(
            url,
            headers={
                "Authorization": f"Bearer {token}",
                "Accept": "application/scim+json",
            },
            timeout=15,
        )

        if resp.status_code == 401:
            raise HTTPException(status_code=401, detail="Token unauthorized")
        resp.raise_for_status()
        me = resp.json()

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get user name: {e}")
    json_output = extract_useful_info_json(me)

    return json_output
