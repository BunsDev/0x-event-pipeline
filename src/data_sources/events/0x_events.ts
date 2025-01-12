import { GetEventsFunc, getEventsWithPaginationAsync } from './get_events';
import { Web3ProviderEngine } from '@0x/subproviders';
import { LogWithDecodedArgs } from 'ethereum-types';

import {
    ExchangeCancelEventArgs,
    ExchangeCancelUpToEventArgs,
    ExchangeContract,
    ExchangeEventArgs,
    ExchangeEvents,
    ExchangeFillEventArgs,
    ExchangeTransactionExecutionEventArgs,
    StakingContract,
    StakingEpochEndedEventArgs,
    StakingEpochFinalizedEventArgs,
    StakingEventArgs,
    StakingEvents,
    StakingMakerStakingPoolSetEventArgs,
    StakingMoveStakeEventArgs,
    StakingOperatorShareDecreasedEventArgs,
    StakingParamsSetEventArgs,
    StakingRewardsPaidEventArgs,
    StakingStakeEventArgs,
    StakingStakingPoolCreatedEventArgs,
    StakingStakingPoolEarnedRewardsInEpochEventArgs,
    StakingUnstakeEventArgs,
} from '@0x/contract-wrappers';

import { DEFAULT_EP_ADDRESS, DEFAULT_STAKING_PROXY_ADDRESS } from '../../constants';

export class EventsSource {
    private readonly _exchangeWrapper: ExchangeContract | undefined;
    private readonly _stakingWrapper: StakingContract | undefined;
    private readonly _networkId: Number;
    constructor(provider: Web3ProviderEngine, networkId: number) {
        this._networkId = networkId;
        if (networkId === 1) {
            this._exchangeWrapper = new ExchangeContract('0x61935cbdd02287b511119ddb11aeb42f1593b7ef', provider);
            this._stakingWrapper = new StakingContract('0xa26e80e7dea86279c6d778d702cc413e6cffa777', provider);
        }
    }

    public async getFillEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<ExchangeFillEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForExchangeEventType<ExchangeFillEventArgs>(ExchangeEvents.Fill);
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getTransactionExecutionEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<ExchangeTransactionExecutionEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForExchangeEventType<ExchangeTransactionExecutionEventArgs>(
            ExchangeEvents.TransactionExecution,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getCancelEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<ExchangeCancelEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForExchangeEventType<ExchangeCancelEventArgs>(ExchangeEvents.Cancel);
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getCancelUpToEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<ExchangeCancelUpToEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForExchangeEventType<ExchangeCancelUpToEventArgs>(
            ExchangeEvents.CancelUpTo,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getStakeEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingStakeEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingStakeEventArgs>(StakingEvents.Stake);
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getUnstakeEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingUnstakeEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingUnstakeEventArgs>(StakingEvents.Unstake);
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getMoveStakeEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingMoveStakeEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingMoveStakeEventArgs>(
            StakingEvents.MoveStake,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getStakingPoolCreatedEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingStakingPoolCreatedEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingStakingPoolCreatedEventArgs>(
            StakingEvents.StakingPoolCreated,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getStakingPoolEarnedRewardsInEpochEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingStakingPoolEarnedRewardsInEpochEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingStakingPoolEarnedRewardsInEpochEventArgs>(
            StakingEvents.StakingPoolEarnedRewardsInEpoch,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getMakerStakingPoolSetEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingMakerStakingPoolSetEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingMakerStakingPoolSetEventArgs>(
            StakingEvents.MakerStakingPoolSet,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getParamsSetEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingParamsSetEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingParamsSetEventArgs>(
            StakingEvents.ParamsSet,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getOperatorShareDecreasedEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingOperatorShareDecreasedEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingOperatorShareDecreasedEventArgs>(
            StakingEvents.OperatorShareDecreased,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getEpochEndedEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingEpochEndedEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingEpochEndedEventArgs>(
            StakingEvents.EpochEnded,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getEpochFinalizedEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<Array<LogWithDecodedArgs<StakingEpochFinalizedEventArgs>> | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingEpochFinalizedEventArgs>(
            StakingEvents.EpochFinalized,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    public async getRewardsPaidEventsAsync(
        startBlock: number,
        endBlock: number,
    ): Promise<LogWithDecodedArgs<StakingRewardsPaidEventArgs>[] | null> {
        const getterFunction = this._makeGetterFuncForStakingEventType<StakingRewardsPaidEventArgs>(
            StakingEvents.RewardsPaid,
        );
        return getEventsWithPaginationAsync(getterFunction, startBlock, endBlock);
    }

    // Returns a getter function which gets all Staking events of a specific type for a
    // specific sub-range. This getter function will be called during each step
    // of pagination.
    private _makeGetterFuncForStakingEventType<ArgsType extends StakingEventArgs>(
        eventType: StakingEvents,
    ): GetEventsFunc<ArgsType> {
        if (this._networkId !== 1) {
            throw Error('Legacy features only availabe on Mainnet');
        }
        return async (fromBlock: number, toBlock: number) =>
            this._stakingWrapper!.getLogsAsync<ArgsType>(eventType, { fromBlock, toBlock }, {});
    }

    // Returns a getter function which gets all Exchange events of a specific type for a
    // specific sub-range. This getter function will be called during each step
    // of pagination.
    private _makeGetterFuncForExchangeEventType<ArgsType extends ExchangeEventArgs>(
        eventType: ExchangeEvents,
    ): GetEventsFunc<ArgsType> {
        if (this._networkId !== 1) {
            throw Error('Legacy features only availabe on Mainnet');
        }
        return async (fromBlock: number, toBlock: number) =>
            this._exchangeWrapper!.getLogsAsync<ArgsType>(eventType, { fromBlock, toBlock }, {});
    }
}
