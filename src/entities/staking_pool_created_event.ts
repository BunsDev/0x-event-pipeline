import { Column, Entity } from 'typeorm';

import { Event } from './event';
import { numberToBigIntTransformer } from '../transformers/big_number';

// Event emitted by MixinStake when a new pool is created.
@Entity({ name: 'staking_pool_created_events' })
export class StakingPoolCreatedEvent extends Event {
    // Unique id generated for pool.
    @Column({ name: 'pool_id', type: 'varchar' })
    public poolId!: string;
    // The operator (creator) of pool.
    @Column({ name: 'operator_address', type: 'varchar' })
    public operatorAddress!: string;
    // The share of rewards given to the operator, in ppm.
    @Column({ name: 'operator_share', type: 'bigint', transformer: numberToBigIntTransformer })
    public operatorShare!: number;
}
