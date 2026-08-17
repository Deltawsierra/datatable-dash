-- ============================================================
-- Lighthouse RDM — dev data load: reference.source_reference_map (office rows)
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

INSERT INTO reference.source_reference_map (
    mapping_record_hk,
    record_values_hash,
    modified_by_user_id,
    published_by_user_id,
    record_effective_dttm,
    record_end_dttm,
    deleted_flg,
    active_flg,
    code_set_nm,
    record_source_nm,
    source_reference_cd,
    source_reference_nm,
    standard_lookup_hk,
    mapping_notes
)
SELECT DISTINCT
    -- pk hash: source system + source code + code set
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim((s.<<SOURCE_SYSTEM_COLUMN>>)::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((s.<<SOURCE_CODE_COLUMN>>)::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim(('office')::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    -- diff hash: canonicalized tracked value columns
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim((s.<<SOURCE_NAME_COLUMN>>)::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((s.<<CODE_COLUMN>>)::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    'dev_load',
    'dev_load',
    now(),
    NULL,
    false,
    true,
    'office',
    s.<<SOURCE_SYSTEM_COLUMN>>       AS record_source_nm,
    s.<<SOURCE_CODE_COLUMN>>         AS source_reference_cd,
    s.<<SOURCE_NAME_COLUMN>>         AS source_reference_nm,
    -- must equal lkp_office.lookup_hk: same pk-hash recipe (code set + code)
    encode(digest(concat_ws('|',
        upper(coalesce(nullif(trim(('office')::text), ''), '__NULL__')),
        upper(coalesce(nullif(trim((s.<<CODE_COLUMN>>)::text), ''), '__NULL__'))
    ), 'sha256'), 'hex'),
    'dev load derived from SDL reference_data'
FROM <<SDL_SOURCE>> s
WHERE s.<<CODE_SET_COLUMN>> = '<<OFFICE_CODE_SET_VALUE>>'
ON CONFLICT (mapping_record_hk) DO NOTHING;
