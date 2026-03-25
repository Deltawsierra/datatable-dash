from fastapi import APIRouter

from .tables import router as tables_router
from .user import router as user_router

router = APIRouter()

router.include_router(tables_router)
router.include_router(user_router)

__all__ = ["router"]
