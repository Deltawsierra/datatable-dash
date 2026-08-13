-- ============================================================
-- Lighthouse RDM — Dev data load templates
-- Purpose: populate reference.lkp_* / reference.hist_lkp_* tables
--          with dev/test data derived from the SDL reference_data table.
--
-- HOW TO USE
-- 1. Replace every <<PLACEHOLDER>> below with the real column names
--    from the SDL reference_data table (we need its actual layout).
-- 2. Adjust <<SDL_SOURCE>> to however you reach SDL from Lakebase
--    (e.g. a federated/foreign table, a staged extract loaded into a
--    temp table, or a CSV import — depends on your environment).
-- 3. Run ddl/reference.sql first so the target tables exist.
-- 4. Scripts are re-runnable: ON CONFLICT DO NOTHING skips rows already loaded.
--
-- Hash keys: SHA-256 hex via pgcrypto. If pgcrypto is unavailable or
-- another algorithm was standardized, swap the digest() calls.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================================
-- Area: geography
-- ============================================================

-- 1) Current table: reference.lkp_geography
INSERT INTO reference.lkp_geography (
    lookup_hk,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    reference_type,
    geography_cd,
    geography_nm,
    geography_desc
)
SELECT DISTINCT
    -- Hash key: hash of the natural key (reference type + code)
    encode(digest('geography' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev_load'                       AS modified_by_user_id,
    'dev_load'                       AS published_by_user_id,
    now()                            AS record_effective_dttm,
    'geography'                            AS reference_type,
    s.<<CODE_COLUMN>>                AS geography_cd,
    s.<<NAME_COLUMN>>                AS geography_nm,
    s.<<DESCRIPTION_COLUMN>>         AS geography_desc
FROM <<SDL_SOURCE>> s                -- e.g. sdl.reference_data
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<GEOGRAPHY_TYPE_VALUE>>'
ON CONFLICT (geography_cd) DO NOTHING;

-- 2) History table: seed one opening history row per current row
INSERT INTO reference.hist_lkp_geography (
    historic_record_hk,
    lookup_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    geography_cd,
    geography_nm,
    geography_desc
)
SELECT
    -- History key: hash of lookup key + effective timestamp
    encode(digest(c.lookup_hk || '|' || c.record_effective_dttm::text, 'sha256'), 'hex'),
    c.lookup_hk,
    -- Change-detection hash over the business columns
    encode(digest(coalesce(c.geography_cd,'') || '|' ||
                  coalesce(c.geography_nm,'') || '|' ||
                  coalesce(c.geography_desc,''), 'sha256'), 'hex'),
    c.modified_by_user_id,
    c.published_by_user_id,
    c.record_effective_dttm,
    NULL   AS record_end_dttm,       -- open-ended: this is the active version
    false  AS deleted_flg,
    true   AS active_flg,
    c.reference_type,
    c.geography_cd,
    c.geography_nm,
    c.geography_desc
FROM reference.lkp_geography c
ON CONFLICT (historic_record_hk) DO NOTHING;

-- 3) Source reference map rows for geography
INSERT INTO reference.source_reference_map (
    mapping_record_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    record_source_nm,
    source_reference_cd,
    source_reference_label,
    standard_lookup_hk,
    mapping_notes
)
SELECT DISTINCT
    encode(digest(s.<<SOURCE_SYSTEM_COLUMN>> || '|' ||
                  s.<<SOURCE_CODE_COLUMN>> || '|' || 'geography', 'sha256'), 'hex'),
    encode(digest(coalesce(s.<<SOURCE_CODE_COLUMN>>,'') || '|' ||
                  coalesce(s.<<CODE_COLUMN>>,''), 'sha256'), 'hex'),
    'dev_load',
    'dev_load',
    now(),
    NULL,
    false,
    true,
    'geography',
    s.<<SOURCE_SYSTEM_COLUMN>>       AS record_source_nm,
    s.<<SOURCE_CODE_COLUMN>>         AS source_reference_cd,
    s.<<SOURCE_LABEL_COLUMN>>        AS source_reference_label,
    encode(digest('geography' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev load derived from SDL reference_data'
FROM <<SDL_SOURCE>> s
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<GEOGRAPHY_TYPE_VALUE>>'
ON CONFLICT (mapping_record_hk) DO NOTHING;

-- ============================================================
-- Area: office
-- ============================================================

-- 1) Current table: reference.lkp_office
INSERT INTO reference.lkp_office (
    lookup_hk,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    reference_type,
    office_cd,
    office_nm,
    office_desc
)
SELECT DISTINCT
    -- Hash key: hash of the natural key (reference type + code)
    encode(digest('office' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev_load'                       AS modified_by_user_id,
    'dev_load'                       AS published_by_user_id,
    now()                            AS record_effective_dttm,
    'office'                            AS reference_type,
    s.<<CODE_COLUMN>>                AS office_cd,
    s.<<NAME_COLUMN>>                AS office_nm,
    s.<<DESCRIPTION_COLUMN>>         AS office_desc
FROM <<SDL_SOURCE>> s                -- e.g. sdl.reference_data
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<OFFICE_TYPE_VALUE>>'
ON CONFLICT (office_cd) DO NOTHING;

-- 2) History table: seed one opening history row per current row
INSERT INTO reference.hist_lkp_office (
    historic_record_hk,
    lookup_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    office_cd,
    office_nm,
    office_desc
)
SELECT
    -- History key: hash of lookup key + effective timestamp
    encode(digest(c.lookup_hk || '|' || c.record_effective_dttm::text, 'sha256'), 'hex'),
    c.lookup_hk,
    -- Change-detection hash over the business columns
    encode(digest(coalesce(c.office_cd,'') || '|' ||
                  coalesce(c.office_nm,'') || '|' ||
                  coalesce(c.office_desc,''), 'sha256'), 'hex'),
    c.modified_by_user_id,
    c.published_by_user_id,
    c.record_effective_dttm,
    NULL   AS record_end_dttm,       -- open-ended: this is the active version
    false  AS deleted_flg,
    true   AS active_flg,
    c.reference_type,
    c.office_cd,
    c.office_nm,
    c.office_desc
FROM reference.lkp_office c
ON CONFLICT (historic_record_hk) DO NOTHING;

-- 3) Source reference map rows for office
INSERT INTO reference.source_reference_map (
    mapping_record_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    record_source_nm,
    source_reference_cd,
    source_reference_label,
    standard_lookup_hk,
    mapping_notes
)
SELECT DISTINCT
    encode(digest(s.<<SOURCE_SYSTEM_COLUMN>> || '|' ||
                  s.<<SOURCE_CODE_COLUMN>> || '|' || 'office', 'sha256'), 'hex'),
    encode(digest(coalesce(s.<<SOURCE_CODE_COLUMN>>,'') || '|' ||
                  coalesce(s.<<CODE_COLUMN>>,''), 'sha256'), 'hex'),
    'dev_load',
    'dev_load',
    now(),
    NULL,
    false,
    true,
    'office',
    s.<<SOURCE_SYSTEM_COLUMN>>       AS record_source_nm,
    s.<<SOURCE_CODE_COLUMN>>         AS source_reference_cd,
    s.<<SOURCE_LABEL_COLUMN>>        AS source_reference_label,
    encode(digest('office' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev load derived from SDL reference_data'
FROM <<SDL_SOURCE>> s
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<OFFICE_TYPE_VALUE>>'
ON CONFLICT (mapping_record_hk) DO NOTHING;

-- ============================================================
-- Area: situs_type
-- ============================================================

-- 1) Current table: reference.lkp_situs_type
INSERT INTO reference.lkp_situs_type (
    lookup_hk,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    reference_type,
    situs_type_cd,
    situs_type_nm,
    situs_type_desc
)
SELECT DISTINCT
    -- Hash key: hash of the natural key (reference type + code)
    encode(digest('situs_type' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev_load'                       AS modified_by_user_id,
    'dev_load'                       AS published_by_user_id,
    now()                            AS record_effective_dttm,
    'situs_type'                            AS reference_type,
    s.<<CODE_COLUMN>>                AS situs_type_cd,
    s.<<NAME_COLUMN>>                AS situs_type_nm,
    s.<<DESCRIPTION_COLUMN>>         AS situs_type_desc
FROM <<SDL_SOURCE>> s                -- e.g. sdl.reference_data
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<SITUS_TYPE_TYPE_VALUE>>'
ON CONFLICT (situs_type_cd) DO NOTHING;

-- 2) History table: seed one opening history row per current row
INSERT INTO reference.hist_lkp_situs_type (
    historic_record_hk,
    lookup_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    situs_type_cd,
    situs_type_nm,
    situs_type_desc
)
SELECT
    -- History key: hash of lookup key + effective timestamp
    encode(digest(c.lookup_hk || '|' || c.record_effective_dttm::text, 'sha256'), 'hex'),
    c.lookup_hk,
    -- Change-detection hash over the business columns
    encode(digest(coalesce(c.situs_type_cd,'') || '|' ||
                  coalesce(c.situs_type_nm,'') || '|' ||
                  coalesce(c.situs_type_desc,''), 'sha256'), 'hex'),
    c.modified_by_user_id,
    c.published_by_user_id,
    c.record_effective_dttm,
    NULL   AS record_end_dttm,       -- open-ended: this is the active version
    false  AS deleted_flg,
    true   AS active_flg,
    c.reference_type,
    c.situs_type_cd,
    c.situs_type_nm,
    c.situs_type_desc
FROM reference.lkp_situs_type c
ON CONFLICT (historic_record_hk) DO NOTHING;

-- 3) Source reference map rows for situs_type
INSERT INTO reference.source_reference_map (
    mapping_record_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    reference_type,
    record_source_nm,
    source_reference_cd,
    source_reference_label,
    standard_lookup_hk,
    mapping_notes
)
SELECT DISTINCT
    encode(digest(s.<<SOURCE_SYSTEM_COLUMN>> || '|' ||
                  s.<<SOURCE_CODE_COLUMN>> || '|' || 'situs_type', 'sha256'), 'hex'),
    encode(digest(coalesce(s.<<SOURCE_CODE_COLUMN>>,'') || '|' ||
                  coalesce(s.<<CODE_COLUMN>>,''), 'sha256'), 'hex'),
    'dev_load',
    'dev_load',
    now(),
    NULL,
    false,
    true,
    'situs_type',
    s.<<SOURCE_SYSTEM_COLUMN>>       AS record_source_nm,
    s.<<SOURCE_CODE_COLUMN>>         AS source_reference_cd,
    s.<<SOURCE_LABEL_COLUMN>>        AS source_reference_label,
    encode(digest('situs_type' || '|' || s.<<CODE_COLUMN>>, 'sha256'), 'hex'),
    'dev load derived from SDL reference_data'
FROM <<SDL_SOURCE>> s
WHERE s.<<REFERENCE_TYPE_COLUMN>> = '<<SITUS_TYPE_TYPE_VALUE>>'
ON CONFLICT (mapping_record_hk) DO NOTHING;
