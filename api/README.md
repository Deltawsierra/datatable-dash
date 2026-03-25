# FastAPI Application

Python FastAPI backend for RDM Lighthouse, connecting to Databricks SQL.

## Setup

### Install dependencies

```bash
pip install -r requirements.txt
```

## Running the Application

Start the development server:

```bash
fastapi dev main.py
```

The API will be available at `http://localhost:8000`

### Interactive API Documentation

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Project Structure

```
api/
├── main.py              # Application entry point
├── requirements.txt     # Project dependencies
├── README.md            # This file
└── v1/
    ├── middleware/
    │   ├── get_connection.py
    │   └── get_token.py
    └── routes/
        ├── tables.py
        └── user.py
```

## Dependencies

Key dependencies (see `requirements.txt` for full list):

- **fastapi** - Web framework
- **uvicorn** - ASGI server
- **pydantic** - Data validation
- **databricks-sql-connector** - Databricks SQL connectivity
- **python-dotenv** - Environment variable loading

## Environment Variables

Create a `.env` file in the `api/` directory (see `env_template.md`).

## Development

### Deactivate Virtual Environment

```bash
# Windows/macOS/Linux
deactivate
```

### Add New Dependencies

```bash
pip install <package-name>
pip freeze > requirements.txt
```
