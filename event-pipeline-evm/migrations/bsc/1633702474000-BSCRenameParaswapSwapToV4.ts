import { MigrationInterface, QueryRunner } from 'typeorm';

const renameTable = `ALTER TABLE events_bsc.paraswap_swapped_events RENAME TO paraswap_swapped_v4_events`;

const renameEventInLastProceesed = `
UPDATE events_bsc.last_block_processed
  SET event_name='ParaswapSwappedV4Event'
  WHERE event_name='ParaswapSwappedEvent';
`;

const createView = `
CREATE OR REPLACE VIEW events_bsc.competitor_swaps AS (
  SELECT
    '1inch' AS competitor,
    *
  FROM events_bsc.oneinch_swapped_events

  UNION ALL

  SELECT
    'Paraswap' AS competitor,
    observed_timestamp,
    contract_address,
    transaction_hash,
    transaction_index,
    log_index,
    block_hash,
    block_number,
    from_token,
    to_token,
    from_token_amount,
    to_token_amount,
    "from",
    "to"
  FROM events_bsc.paraswap_swapped_v4_events
);`;

const undoRenameTable = `ALTER TABLE events_bsc.paraswap_swapped_v4_events RENAME TO paraswap_swapped_events`;
const dropView = `DROP VIEW events_bsc.competitor_swaps;`;
const undoRenameEventInLastProceesed = `
UPDATE events_bsc.last_block_processed
  SET event_name='ParaswapSwappedV4Event'
  WHERE event_name='ParaswapSwappedEvent';
`;

export class BSCRenameParaswapSwapToV41633702474000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(renameTable);
        await queryRunner.query(renameEventInLastProceesed);
        await queryRunner.query(createView);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(dropView);
        await queryRunner.query(undoRenameEventInLastProceesed);
        await queryRunner.query(undoRenameTable);
    }
}
