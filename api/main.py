from fastapi import FastAPI, Header, Request, HTTPException
from databricks import sql
from dotenv import load_dotenv
from api.v1.routes import router as v1_router

load_dotenv()  # looks for a .env file in the working directory

app = FastAPI()

# Everything in v1_router will appear under /v1/...
app.include_router(v1_router, prefix="/v1", tags=["v1"])
