-- =============================================================================
-- RDM Lighthouse — Authorization Tables
-- =============================================================================
-- Run order: users → roles → actions → user_roles
-- All statements are idempotent (CREATE TABLE IF NOT EXISTS).
-- =============================================================================


-- -----------------------------------------------------------------------------
-- users
-- Stores application users identified by their SSO email address.
-- Username must follow the sso@genworth.net format.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    username    VARCHAR(255)  NOT NULL,
    is_active   BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    created_by  VARCHAR(255)  NOT NULL,
    metadata    JSONB,

    CONSTRAINT pk_users PRIMARY KEY (username),
    CONSTRAINT chk_users_username_format
        CHECK (username ~* '^[a-z0-9._%+\-]+@genworth\.net$')
);


-- -----------------------------------------------------------------------------
-- roles
-- Defines named roles and their associated permission sets.
-- permissions is a free-form JSON object whose structure is determined
-- by the application (e.g. { "read": true, "write": false }).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS roles (
    role_name   VARCHAR(100)  NOT NULL,
    permissions JSONB         NOT NULL DEFAULT '{}',
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    created_by  VARCHAR(255)  NOT NULL,
    metadata    JSONB,

    CONSTRAINT pk_roles PRIMARY KEY (role_name)
);


-- -----------------------------------------------------------------------------
-- actions
-- Represents discrete operations that can be performed in the system.
-- scope is a JSONB array that lists the values the action applies to
-- (e.g. ["reference_dev", "reference_prod"]).
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS actions (
    action_key  VARCHAR(100)  NOT NULL,
    scope       JSONB         NOT NULL DEFAULT '[]',
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    created_by  VARCHAR(255)  NOT NULL,
    metadata    JSONB,

    CONSTRAINT pk_actions PRIMARY KEY (action_key),
    CONSTRAINT chk_actions_scope_is_array
        CHECK (jsonb_typeof(scope) = 'array')
);


-- -----------------------------------------------------------------------------
-- user_roles
-- Junction table that maps users to roles.
-- A single user can hold multiple roles; a role can be assigned to many users.
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS user_roles (
    username    VARCHAR(255)  NOT NULL,
    role_name   VARCHAR(100)  NOT NULL,
    created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    created_by  VARCHAR(255)  NOT NULL,

    CONSTRAINT pk_user_roles     PRIMARY KEY (username, role_name),
    CONSTRAINT fk_user_roles_user
        FOREIGN KEY (username)  REFERENCES users (username)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_user_roles_role
        FOREIGN KEY (role_name) REFERENCES roles (role_name)
        ON UPDATE CASCADE ON DELETE CASCADE
);
