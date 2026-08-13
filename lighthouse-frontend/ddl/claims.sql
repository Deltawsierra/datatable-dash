-- ============================================================
-- Lighthouse RDM — Standardized Reference Data Model DDL
-- Schema: claims
-- Pattern: lkp_<area> (current, SCD1) + hist_lkp_<area> (history, SCD2)
--          + one source_reference_map per schema (SCD2)
-- Hash keys assumed SHA-256 hex (char(64)) — adjust if the team
-- standardizes on a different hash.
-- ============================================================

CREATE SCHEMA IF NOT EXISTS claims;

-- Current reference data for claim_status (one row per code, current state only)
CREATE TABLE claims.lkp_claim_status (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    claim_status_cd             varchar(50)   NOT NULL,
    claim_status_nm             varchar(255)  NOT NULL,
    claim_status_desc           text,
    CONSTRAINT pk_lkp_claim_status PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_claim_status_cd UNIQUE (claim_status_cd)
);

-- Historic audit data for claim_status (append-only, full history)
CREATE TABLE claims.hist_lkp_claim_status (
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
    claim_status_cd             varchar(50)   NOT NULL,
    claim_status_nm             varchar(255)  NOT NULL,
    claim_status_desc           text,
    CONSTRAINT pk_hist_lkp_claim_status PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_claim_status_lookup
        FOREIGN KEY (lookup_hk) REFERENCES claims.lkp_claim_status (lookup_hk)
);

CREATE INDEX ix_hist_lkp_claim_status_lookup_hk ON claims.hist_lkp_claim_status (lookup_hk);

-- Current reference data for diagnosis (one row per code, current state only)
CREATE TABLE claims.lkp_diagnosis (
    lookup_hk             char(64)      NOT NULL,
    modified_by_user_id   varchar(100)  NOT NULL,
    published_by_user_id  varchar(100),
    record_effective_dttm timestamp     NOT NULL,
    reference_type        varchar(100)  NOT NULL,
    diagnosis_cd             varchar(50)   NOT NULL,
    diagnosis_nm             varchar(255)  NOT NULL,
    diagnosis_desc           text,
    CONSTRAINT pk_lkp_diagnosis PRIMARY KEY (lookup_hk),
    CONSTRAINT uq_lkp_diagnosis_cd UNIQUE (diagnosis_cd)
);

-- Historic audit data for diagnosis (append-only, full history)
CREATE TABLE claims.hist_lkp_diagnosis (
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
    diagnosis_cd             varchar(50)   NOT NULL,
    diagnosis_nm             varchar(255)  NOT NULL,
    diagnosis_desc           text,
    CONSTRAINT pk_hist_lkp_diagnosis PRIMARY KEY (historic_record_hk),
    CONSTRAINT fk_hist_lkp_diagnosis_lookup
        FOREIGN KEY (lookup_hk) REFERENCES claims.lkp_diagnosis (lookup_hk)
);

CREATE INDEX ix_hist_lkp_diagnosis_lookup_hk ON claims.hist_lkp_diagnosis (lookup_hk);

-- Source reference map (one per schema). standard_lookup_hk points at a
-- lkp_ table's lookup_hk; reference_type says which table. Enforced by the
-- application/pipeline, not a database foreign key, because one map serves
-- every lkp_ table in the schema.
CREATE TABLE claims.source_reference_map (
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
    CONSTRAINT pk_claims_source_reference_map PRIMARY KEY (mapping_record_hk)
);

CREATE INDEX ix_claims_source_reference_map_standard_hk ON claims.source_reference_map (standard_lookup_hk);
CREATE INDEX ix_claims_source_reference_map_source ON claims.source_reference_map (record_source_nm, source_reference_cd);
