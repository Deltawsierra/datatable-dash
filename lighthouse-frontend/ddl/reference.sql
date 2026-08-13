-- ============================================================
-- Lighthouse RDM — Dev Lakebase assignment DDL
-- Database: databricks_postgres   Schema: reference
-- Tables: Geography, Office Code, Situs Type
-- Pattern: lkp_<area> (current, SCD1) + hist_lkp_<area> (history, SCD2)
--          + one source_reference_map for the schema (SCD2)
-- Hash keys assumed SHA-256 hex (char(64)) — adjust if the team
-- standardizes on a different hash.
-- ============================================================

CREATE SCHEMA IF NOT EXISTS reference;

-- Current reference data for geography (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_geography (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    geography_cd                varchar(50)   NOT NULL,
    geography_nm                varchar(255)  NOT NULL,
    geography_desc              text,
    CONSTRAINT pk_lkp_geography PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_geography_cd UNIQUE (geography_cd)
);

-- Historic audit data for geography (append-only, full history)
CREATE TABLE IF NOT EXISTS reference.hist_lkp_geography (
    historic_record_hk    char(64)      NOT NULL,
    lookup_hk             char(64)      NOT NULL,
    record_values_hash    char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    record_end_dttm       timestamp,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    reference_type        varchar(100)  NOT NULL,
    geography_cd                varchar(50)   NOT NULL,
    geography_nm                varchar(255)  NOT NULL,
    geography_desc              text,
    CONSTRAINT pk_hist_lkp_geography PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_geography_lookup
        FOREIGN KEY (lookup_hk) REFERENCES reference.lkp_geography (lookup_hk)
);

CREATE INDEX IF NOT EXISTS ix_hist_lkp_geography_lookup_hk ON reference.hist_lkp_geography (lookup_hk);

-- Current reference data for office (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_office (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    office_cd                varchar(50)   NOT NULL,
    office_nm                varchar(255)  NOT NULL,
    office_desc              text,
    CONSTRAINT pk_lkp_office PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_office_cd UNIQUE (office_cd)
);

-- Historic audit data for office (append-only, full history)
CREATE TABLE IF NOT EXISTS reference.hist_lkp_office (
    historic_record_hk    char(64)      NOT NULL,
    lookup_hk             char(64)      NOT NULL,
    record_values_hash    char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    record_end_dttm       timestamp,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    reference_type        varchar(100)  NOT NULL,
    office_cd                varchar(50)   NOT NULL,
    office_nm                varchar(255)  NOT NULL,
    office_desc              text,
    CONSTRAINT pk_hist_lkp_office PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_office_lookup
        FOREIGN KEY (lookup_hk) REFERENCES reference.lkp_office (lookup_hk)
);

CREATE INDEX IF NOT EXISTS ix_hist_lkp_office_lookup_hk ON reference.hist_lkp_office (lookup_hk);

-- Current reference data for situs_type (one row per code, current state only)
CREATE TABLE IF NOT EXISTS reference.lkp_situs_type (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    situs_type_cd                varchar(50)   NOT NULL,
    situs_type_nm                varchar(255)  NOT NULL,
    situs_type_desc              text,
    CONSTRAINT pk_lkp_situs_type PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_situs_type_cd UNIQUE (situs_type_cd)
);

-- Historic audit data for situs_type (append-only, full history)
CREATE TABLE IF NOT EXISTS reference.hist_lkp_situs_type (
    historic_record_hk    char(64)      NOT NULL,
    lookup_hk             char(64)      NOT NULL,
    record_values_hash    char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    record_end_dttm       timestamp,
    deleted_flg           boolean       NOT NULL DEFAULT false,
    active_flg            boolean       NOT NULL DEFAULT true,
    reference_type        varchar(100)  NOT NULL,
    situs_type_cd                varchar(50)   NOT NULL,
    situs_type_nm                varchar(255)  NOT NULL,
    situs_type_desc              text,
    CONSTRAINT pk_hist_lkp_situs_type PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_situs_type_lookup
        FOREIGN KEY (lookup_hk) REFERENCES reference.lkp_situs_type (lookup_hk)
);

CREATE INDEX IF NOT EXISTS ix_hist_lkp_situs_type_lookup_hk ON reference.hist_lkp_situs_type (lookup_hk);

-- Source reference map (one per schema). standard_lookup_hk points at a
-- lkp_ table's lookup_hk; reference_type says which table. Enforced by the
-- application/pipeline, not a database foreign key, because one map serves
-- every lkp_ table in the schema.
CREATE TABLE IF NOT EXISTS reference.source_reference_map (
    mapping_record_hk      char(64)      NOT NULL,
    record_values_hash     char(64)      NOT NULL,
    modified_by_user_id    varchar(100)  NOT NULL,
    published_by_user_id   varchar(100),
    record_effective_dttm  timestamp     NOT NULL,
    record_end_dttm        timestamp,
    deleted_flg            boolean       NOT NULL DEFAULT false,
    active_flg             boolean       NOT NULL DEFAULT true,
    reference_type         varchar(100)  NOT NULL,
    record_source_nm       varchar(100)  NOT NULL,
    source_reference_cd    varchar(50)   NOT NULL,
    source_reference_label varchar(255),
    standard_lookup_hk     char(64)      NOT NULL,
    mapping_notes          text,
    CONSTRAINT pk_reference_source_reference_map PRIMARY KEY (mapping_record_hk)
);

CREATE INDEX IF NOT EXISTS ix_reference_source_reference_map_standard_hk
    ON reference.source_reference_map (standard_lookup_hk);
CREATE INDEX IF NOT EXISTS ix_reference_source_reference_map_source
    ON reference.source_reference_map (record_source_nm, source_reference_cd);
