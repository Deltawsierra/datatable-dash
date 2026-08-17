-- ============================================================
-- Lighthouse RDM — Standardized Reference Data Model DDL
-- Dev Lakebase assignment: database databricks_postgres, schema reference
-- Schema: reference
-- Pattern: lkp_<area> (current, SCD1) + hist_lkp_<area> (history, SCD2)
--          + one source_reference_map per schema (SCD2)
-- Review conventions applied: varchar(64) hash keys, varchar(50) user ids,
-- timestamptz (UTC), code_set_nm, composite unique (code_set_nm + code),
-- no FK from hist_ to current tables, idx_ index prefix.
-- Hashing follows the team's hash_generator.py pattern (SHA2-256 over
-- pipe-joined canonicalized columns); see ddl/load/*.sql for the
-- Postgres translation of the canonicalize + CONCAT_WS + SHA2 recipe.
-- ============================================================

CREATE SCHEMA IF NOT EXISTS reference;

-- Current reference data for geography (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_geography (
    lookup_hk             varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    code_set_nm           varchar(100)  NOT NULL,
    geography_cd                varchar(50)   NOT NULL,
    geography_nm                varchar(255)  NOT NULL,
    geography_desc              text,
    CONSTRAINT pk_lkp_geography PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_geography_code_set_cd UNIQUE (code_set_nm, geography_cd)
);

-- Historic audit data for geography (append-only, full history).
-- No foreign key to lkp_geography: history must survive deletion of the
-- current-state row (per review), so the link is by value only.
CREATE TABLE IF NOT EXISTS reference.hist_lkp_geography (
    historic_record_hk    varchar(64)   NOT NULL,
    lookup_hk             varchar(64)   NOT NULL,
    record_values_hash    varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    record_end_dttm       timestamptz,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    code_set_nm           varchar(100)  NOT NULL,
    geography_cd                varchar(50)   NOT NULL,
    geography_nm                varchar(255)  NOT NULL,
    geography_desc              text,
    CONSTRAINT pk_hist_lkp_geography PRIMARY KEY (historic_record_hk)
);

CREATE INDEX IF NOT EXISTS idx_hist_lkp_geography_lookup_hk ON reference.hist_lkp_geography (lookup_hk);

-- Current reference data for office (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_office (
    lookup_hk             varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    code_set_nm           varchar(100)  NOT NULL,
    office_cd                varchar(50)   NOT NULL,
    office_nm                varchar(255)  NOT NULL,
    office_desc              text,
    CONSTRAINT pk_lkp_office PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_office_code_set_cd UNIQUE (code_set_nm, office_cd)
);

-- Historic audit data for office (append-only, full history).
-- No foreign key to lkp_office: history must survive deletion of the
-- current-state row (per review), so the link is by value only.
CREATE TABLE IF NOT EXISTS reference.hist_lkp_office (
    historic_record_hk    varchar(64)   NOT NULL,
    lookup_hk             varchar(64)   NOT NULL,
    record_values_hash    varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    record_end_dttm       timestamptz,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    code_set_nm           varchar(100)  NOT NULL,
    office_cd                varchar(50)   NOT NULL,
    office_nm                varchar(255)  NOT NULL,
    office_desc              text,
    CONSTRAINT pk_hist_lkp_office PRIMARY KEY (historic_record_hk)
);

CREATE INDEX IF NOT EXISTS idx_hist_lkp_office_lookup_hk ON reference.hist_lkp_office (lookup_hk);

-- Current reference data for situs_type (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_situs_type (
    lookup_hk             varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    code_set_nm           varchar(100)  NOT NULL,
    situs_type_cd                varchar(50)   NOT NULL,
    situs_type_nm                varchar(255)  NOT NULL,
    situs_type_desc              text,
    CONSTRAINT pk_lkp_situs_type PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_situs_type_code_set_cd UNIQUE (code_set_nm, situs_type_cd)
);

-- Historic audit data for situs_type (append-only, full history).
-- No foreign key to lkp_situs_type: history must survive deletion of the
-- current-state row (per review), so the link is by value only.
CREATE TABLE IF NOT EXISTS reference.hist_lkp_situs_type (
    historic_record_hk    varchar(64)   NOT NULL,
    lookup_hk             varchar(64)   NOT NULL,
    record_values_hash    varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    record_end_dttm       timestamptz,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    code_set_nm           varchar(100)  NOT NULL,
    situs_type_cd                varchar(50)   NOT NULL,
    situs_type_nm                varchar(255)  NOT NULL,
    situs_type_desc              text,
    CONSTRAINT pk_hist_lkp_situs_type PRIMARY KEY (historic_record_hk)
);

CREATE INDEX IF NOT EXISTS idx_hist_lkp_situs_type_lookup_hk ON reference.hist_lkp_situs_type (lookup_hk);

-- Source reference map (one per schema). standard_lookup_hk points at a
-- lkp_ table's lookup_hk; code_set_nm says which table. Enforced by the
-- application/pipeline, not a database foreign key, because one map serves
-- every lkp_ table in the schema.
CREATE TABLE IF NOT EXISTS reference.source_reference_map (
    mapping_record_hk     varchar(64)   NOT NULL,
    record_values_hash    varchar(64)   NOT NULL,
    modified_by_user_id   varchar(50)   NOT NULL,
    published_by_user_id  varchar(50),
    record_effective_dttm timestamptz   NOT NULL,
    record_end_dttm       timestamptz,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    code_set_nm           varchar(100)  NOT NULL,
    record_source_nm      varchar(100)  NOT NULL,
    source_reference_cd   varchar(50)   NOT NULL,
    source_reference_nm   varchar(255),
    standard_lookup_hk    varchar(64)   NOT NULL,
    mapping_notes         text,
    CONSTRAINT pk_reference_source_reference_map PRIMARY KEY (mapping_record_hk)
);

CREATE INDEX IF NOT EXISTS idx_reference_source_reference_map_standard_hk
    ON reference.source_reference_map (standard_lookup_hk);
-- Review note: may add code_set_nm to this index later.
CREATE INDEX IF NOT EXISTS idx_reference_source_reference_map_source
    ON reference.source_reference_map (record_source_nm, source_reference_cd);
