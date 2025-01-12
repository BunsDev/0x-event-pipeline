// load env vars
import { resolve } from 'path';
import { config } from 'dotenv';
config({ path: resolve(__dirname, '../../.env') });

import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import * as ormConfig from './ormconfig';
import {
    CHAIN_ID,
    ENABLE_PROMETHEUS_METRICS,
    FEAT_EXCLUSIVE_TOKENS_FROM_TRANSACTIONS,
    FEAT_TX_BACKFILL,
    SECONDS_BETWEEN_RUNS,
} from './config';
import { logger } from './utils/logger';

import { LegacyEventScraper } from './scripts/pull_and_save_legacy_events';
import { BackfillTxScraper } from './scripts/pull_and_save_backfill_tx';
import { BlockScraper } from './scripts/pull_and_save_blocks';
import { EventsByTopicScraper } from './scripts/pull_and_save_events_by_topic';
import { TokensFromTransfersScraper } from './scripts/pull_and_save_tokens_from_transfers';
import { TokensFromBackfill } from './scripts/pull_and_save_tokens_backfill';
import { ChainIdChecker } from './scripts/check_chain_id';
import { CurrentBlockMonitor } from './scripts/monitor_current_block';
import { startMetricsServer } from './utils/metrics';
import { TokenMetadataSingleton } from './tokenMetadataSingleton';

logger.info('App is running...');

const chainIdChecker = new ChainIdChecker();
const legacyEventScraper = new LegacyEventScraper();
const backfillTxScraper = new BackfillTxScraper();
const blockScraper = new BlockScraper();
const eventsByTopicScraper = new EventsByTopicScraper();
const currentBlockMonitor = new CurrentBlockMonitor();
const tokensFromTransfersScraper = new TokensFromTransfersScraper();
const tokensFromBackfill = new TokensFromBackfill();

if (ENABLE_PROMETHEUS_METRICS) {
    startMetricsServer();
}

chainIdChecker.checkChainId(CHAIN_ID);

// run pull and save events
createConnection(ormConfig as ConnectionOptions)
    .then(async (connection) => {
        await TokenMetadataSingleton.getInstance(connection);
        schedule(null, currentBlockMonitor.monitor, 'Current Block');
        if (FEAT_EXCLUSIVE_TOKENS_FROM_TRANSACTIONS) {
            schedule(
                connection,
                tokensFromTransfersScraper.getParseSaveTokensFromTransactionsAsync,
                'Pull and Save Tokens',
            );
            schedule(
                connection,
                tokensFromBackfill.getParseSaveTokensFromBackfillAsync,
                'Pull and Save Backfill Tokens',
            );
        } else {
            schedule(connection, blockScraper.getParseSaveEventsAsync, 'Pull and Save Blocks');
            schedule(connection, eventsByTopicScraper.getParseSaveEventsAsync, 'Pull and Save Events by Topic');
            if (FEAT_TX_BACKFILL) {
                schedule(
                    connection,
                    backfillTxScraper.getParseSaveTxBackfillAsync,
                    'Pull and Save Backfill Transactions',
                );
            }
            if (CHAIN_ID === 1) {
                schedule(connection, legacyEventScraper.getParseSaveEventsAsync, 'Pull and Save Legacy Events');
            }
        }
    })
    .catch((error) => logger.error(error));

async function schedule(connection: Connection | null, func: any, funcName: string) {
    const start = new Date().getTime();
    await func(connection);
    const end = new Date().getTime();
    const duration = end - start;
    let wait: number;
    if (duration > SECONDS_BETWEEN_RUNS * 1000) {
        wait = 0;
        logger.warn(`${funcName} is taking longer than desiered interval`);
    } else {
        wait = SECONDS_BETWEEN_RUNS * 1000 - duration;
    }

    setTimeout(() => {
        schedule(connection, func, funcName);
    }, wait);
}
