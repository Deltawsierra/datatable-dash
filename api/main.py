from fastapi import FastAPI, Header, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from databricks import sql
from dotenv import load_dotenv
from api.v1.routes import router as v1_router

load_dotenv()  # looks for a .env file in the working directory

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Everything in v1_router will appear under /v1/...
app.include_router(v1_router, prefix="/v1", tags=["v1"])
