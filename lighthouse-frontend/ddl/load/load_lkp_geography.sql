-- ============================================================
-- Lighthouse RDM — dev data load: reference.lkp_geography
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

INSERT INTO reference.lkp_geography (
    lookup_hk,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    code_set_nm,
    geography_cd,
    geography_nm,
    geography_desc
)
SELECT DISTINCT
    -- pk hash: canonicalized key columns (code set + code)
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim(('geography')::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((s.<<CODE_COLUMN>>)::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    'dev_load'                       AS modified_by_user_id,
    'dev_load'                       AS published_by_user_id,
    now()                            AS record_effective_dttm,
    'geography'                            AS code_set_nm,
    s.<<CODE_COLUMN>>                AS geography_cd,
    s.<<NAME_COLUMN>>                AS geography_nm,
    s.<<DESCRIPTION_COLUMN>>         AS geography_desc
FROM <<SDL_SOURCE>> s                -- e.g. sdl.reference_data
WHERE s.<<CODE_SET_COLUMN>> = '<<GEOGRAPHY_CODE_SET_VALUE>>'
ON CONFLICT (code_set_nm, geography_cd) DO NOTHING;
