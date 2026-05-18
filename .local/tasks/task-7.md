---
title: Authorization table DDLs
---
# Authorization Table DDLs

## What & Why
Create PostgreSQL DDL scripts for the four authorization tables needed to support role-based access control in RDM Lighthouse. These tables will govern which users can perform which actions within the application.

## Done looks like
- A single `.sql` file in `docs/` containing four `CREATE TABLE` statements: `users`, `roles`, `actions`, and `user_roles`
- `users` table enforces the `sso@genworth.net` username format via a `CHECK` constraint
- `roles` table stores a `permissions` JSONB object
- `actions` table stores `scope` as a JSONB array (list of values)
- `user_roles` table joins `users` and `roles` with proper foreign keys and a composite primary key
- Every table has `created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()` and `created_by VARCHAR(255) NOT NULL` audit columns
- All `NOT NULL` constraints are applied to required fields
- Statements are idempotent (`CREATE TABLE IF NOT EXISTS`) so they can be re-run safely

## Out of scope
- Indexes beyond primary keys and foreign keys
- Migration tooling or version management
- Application code changes to consume these tables
- Seeding or sample data

## Tasks
1. **Write the DDL file** — Create `docs/auth_tables.sql` containing all four `CREATE TABLE IF NOT EXISTS` statements with the correct column types, constraints, foreign keys, and audit columns as specified.

## Relevant files
- `docs/`