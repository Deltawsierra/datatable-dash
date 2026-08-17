-- ============================================================
-- Lighthouse RDM — dev data load: reference.hist_lkp_office
-- Derives dev/test data from the SDL reference_data table.
-- Replace every <<PLACEHOLDER>> with real SDL column names, and
-- <<SDL_SOURCE>> with how reference_data is reached from Lakebase.
-- Requires: ddl/reference.sql run first; pgcrypto extension.
-- Re-runnable: ON CONFLICT DO NOTHING skips already-loaded rows.
-- Hashing follows the team's hash_generator.py pattern:
--   canonicalize: UPPER(COALESCE(NULLIF(TRIM(CAST(col AS STRING)), ''), '__NULL__'))
--   hash:         SHA2(CONCAT_WS('|', <canonicalized cols>), 256)
-- Translated to Postgres: ::text for CAST-to-STRING and
-- encode(digest(..., 'sha256'), 'hex') for SHA2(..., 256).
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Seeds one opening history row per current row in reference.lkp_office.
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
    code_set_nm,
    office_cd,
    office_nm,
    office_desc
)
SELECT
    -- pk hash for the history row: lookup key + effective timestamp
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim((c.lookup_hk)::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((c.record_effective_dttm)::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    c.lookup_hk,
    -- diff hash: canonicalized tracked (non-key) value columns
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim((c.office_nm)::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((c.office_desc)::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    c.modified_by_user_id,
    c.published_by_user_id,
    c.record_effective_dttm,
    NULL   AS record_end_dttm,       -- open-ended: this is the active version
    false  AS deleted_flg,
    true   AS active_flg,
    c.code_set_nm,
    c.office_cd,
    c.office_nm,
    c.office_desc
FROM reference.lkp_office c
ON CONFLICT (historic_record_hk) DO NOTHING;
