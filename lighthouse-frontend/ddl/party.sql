-- ============================================================
-- Lighthouse RDM — Standardized Reference Data Model DDL
-- Schema: party
-- Pattern: lkp_<area> (current, SCD1) + hist_lkp_<area> (history, SCD2)
--          + one source_reference_map per schema (SCD2)
-- Hash keys assumed SHA-256 hex (char(64)) — adjust if the team
-- standardizes on a different hash.
-- ============================================================

CREATE SCHEMA IF NOT EXISTS party;

-- Current reference data for agent_status (one row per code, current state only)
CREATE TABLE party.lkp_agent_status (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    agent_status_cd             varchar(50)   NOT NULL,
    agent_status_nm             varchar(255)  NOT NULL,
    agent_status_desc           text,
    CONSTRAINT pk_lkp_agent_status PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_agent_status_cd UNIQUE (agent_status_cd)
);

-- Historic audit data for agent_status (append-only, full history)
CREATE TABLE party.hist_lkp_agent_status (
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
    agent_status_cd             varchar(50)   NOT NULL,
    agent_status_nm             varchar(255)  NOT NULL,
    agent_status_desc           text,
    CONSTRAINT pk_hist_lkp_agent_status PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_agent_status_lookup
        FOREIGN KEY (lookup_hk) REFERENCES party.lkp_agent_status (lookup_hk)
);

CREATE INDEX ix_hist_lkp_agent_status_lookup_hk ON party.hist_lkp_agent_status (lookup_hk);

-- Current reference data for marital_status (one row per code, current state only)
CREATE TABLE party.lkp_marital_status (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    marital_status_cd             varchar(50)   NOT NULL,
    marital_status_nm             varchar(255)  NOT NULL,
    marital_status_desc           text,
    CONSTRAINT pk_lkp_marital_status PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_marital_status_cd UNIQUE (marital_status_cd)
);

-- Historic audit data for marital_status (append-only, full history)
CREATE TABLE party.hist_lkp_marital_status (
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
    marital_status_cd             varchar(50)   NOT NULL,
    marital_status_nm             varchar(255)  NOT NULL,
    marital_status_desc           text,
    CONSTRAINT pk_hist_lkp_marital_status PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_marital_status_lookup
        FOREIGN KEY (lookup_hk) REFERENCES party.lkp_marital_status (lookup_hk)
);

CREATE INDEX ix_hist_lkp_marital_status_lookup_hk ON party.hist_lkp_marital_status (lookup_hk);

-- Source reference map (one per schema). standard_lookup_hk points at a
-- lkp_ table's lookup_hk; reference_type says which table. Enforced by the
-- application/pipeline, not a database foreign key, because one map serves
-- every lkp_ table in the schema.
CREATE TABLE party.source_reference_map (
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
    CONSTRAINT pk_party_source_reference_map PRIMARY KEY (mapping_record_hk)
);

CREATE INDEX ix_party_source_reference_map_standard_hk ON party.source_reference_map (standard_lookup_hk);
CREATE INDEX ix_party_source_reference_map_source ON party.source_reference_map (record_source_nm, source_reference_cd);
