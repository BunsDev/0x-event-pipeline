export const DEFAULT_LOCAL_POSTGRES_URI = 'postgresql://user:password@localhost/events';
export const DEFAULT_START_BLOCK_OFFSET = 35;
export const DEFAULT_MAX_BLOCKS_TO_PULL = 120;
export const DEFAULT_MAX_BLOCKS_TO_SEARCH = 120;
export const DEFAULT_MAX_TX_TO_PULL = 2000;
export const DEFAULT_BLOCK_FINALITY_THRESHOLD = 10;
export const DEFAULT_MINUTES_BETWEEN_RUNS = 3;
export const DEFAULT_STAKING_POOLS_JSON_URL =
    'https://raw.githubusercontent.com/0xProject/0x-staking-pool-registry/master/staking_pools.json';
export const DEFAULT_STAKING_POOLS_METADATA_JSON_URL =
    'https://raw.githubusercontent.com/0xProject/0x-staking-pool-registry/master/pool_metadata.json';
export const DEFAULT_BASE_GITHUB_LOGO_URL = 'https://github.com/0xProject/0x-staking-pool-registry/raw/master/logos/';
export const DEFAULT_FEAT_CANCEL_EVENTS = false;
export const DEFAULT_FEAT_ERC20_BRIDGE_TRANSFER_FLASHWALLET = false;
export const DEFAULT_FEAT_EXCLUSIVE_TOKENS_FROM_TRANSACTIONS = false;
export const DEFAULT_FEAT_FILL_EVENT = false;
export const DEFAULT_FEAT_LIMIT_ORDERS = false;
export const DEFAULT_FEAT_META_TRANSACTION_EXECUTED_EVENT = false;
export const DEFAULT_FEAT_NFT = false;
export const DEFAULT_FEAT_ONEINCH_SWAPPED_V3_EVENT = false;
export const DEFAULT_FEAT_ONEINCH_SWAPPED_V4_EVENT = false;
export const DEFAULT_FEAT_OPEN_OCEAN_SWAPPED_V1_EVENT = false;
export const DEFAULT_FEAT_OTC_ORDERS = false;
export const DEFAULT_FEAT_PARASWAP_SWAPPED2_V5_EVENT = false;
export const DEFAULT_FEAT_PARASWAP_SWAPPED_V4_EVENT = false;
export const DEFAULT_FEAT_PARASWAP_SWAPPED_V5_EVENT = false;
export const DEFAULT_FEAT_PLP_SWAP_EVENT = false;
export const DEFAULT_FEAT_POLYGON_RFQM_PAYMENTS = false;
export const DEFAULT_FEAT_RFQ_EVENT = false;
export const DEFAULT_FEAT_SLINGSHOT_TRADE_EVENT = false;
export const DEFAULT_FEAT_STAKING = false;
export const DEFAULT_FEAT_TIMECHAIN_SWAP_V1_EVENT = false;
export const DEFAULT_FEAT_TRANSFORMED_ERC20_EVENT = true;
export const DEFAULT_FEAT_TX_BACKFILL = false;
export const DEFAULT_FEAT_UNISWAP_V2_PAIR_CREATED_EVENT = false;
export const DEFAULT_FEAT_UNISWAP_V2_SYNC_EVENT = false;
export const DEFAULT_FEAT_UNISWAP_V2_VIP_SWAP_EVENT = false;
export const DEFAULT_FEAT_UNISWAP_V3_VIP_SWAP_EVENT = false;
export const DEFAULT_FEAT_V3_FILL_EVENT = false;
export const DEFAULT_FEAT_V3_NATIVE_FILL = false;
export const DEFAULT_FEAT_VIP_SWAP_EVENT = false;
export const DEFAULT_MAX_TIME_TO_SEARCH = 360;
export const DEFAULT_START_BLOCK_TIMESTAMP_OFFSET = 105;
export const DEFAULT_METRICS_PATH = '/metrics';
export const DEFAULT_PROMETHEUS_PORT = 3000;
export const DEFAULT_ENABLE_PROMETHEUS_METRICS = false;

export const BRIDGEFILL_EVENT_TOPIC = ['0xe59e71a14fe90157eedc866c4f8c767d3943d6b6b2e8cd64dddcc92ab4c55af8'];
export const TRANSFORMEDERC20_EVENT_TOPIC = ['0x0f6672f78a59ba8e5e5b5d38df3ebc67f3c792e2c9259b8d97d7f00dd78ba1b3'];
export const LIQUIDITYPROVIDERSWAP_EVENT_TOPIC = ['0x40a6ba9513d09e3488135e0e0d10e2d4382b792720155b144cbea89ac9db6d34'];
export const RFQORDERFILLED_EVENT_TOPIC = ['0x829fa99d94dc4636925b38632e625736a614c154d55006b7ab6bea979c210c32'];
export const LIMITORDERFILLED_EVENT_TOPIC = ['0xab614d2b738543c0ea21f56347cf696a3a0c42a7cbec3212a5ca22a4dcff2124'];
export const DEFAULT_EP_ADDRESS = '0xdef1c0ded9bec7f1a1670819833240f027b25eff';
export const DEFAULT_STAKING_PROXY_ADDRESS = '0xa26e80e7dea86279c6d778d702cc413e6cffa777';
export const V4_CANCEL_EVENT_TOPIC = ['0xa6eb7cdc219e1518ced964e9a34e61d68a94e4f1569db3e84256ba981ba52753'];
export const EXPIRED_RFQ_ORDER_EVENT_TOPIC = ['0xd9ee00a67daf7d99c37893015dc900862c9a02650ef2d318697e502e5fb8bbe2'];
export const OTC_ORDER_FILLED_EVENT_TOPIC = ['0xac75f773e3a92f1a02b12134d65e1f47f8a14eabe4eaf1e24624918e6a8b269f'];

export const UNISWAP_V2_PAIR_CREATED_TOPIC = ['0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9'];
export const UNISWAP_V2_SYNC_TOPIC = ['0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1'];

export const V3_EXCHANGE_ADDRESS = '0x61935cbdd02287b511119ddb11aeb42f1593b7ef';
export const SWAP_EVENT_TOPIC = [
    '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
    '0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff',
];
export const SWAP_V3_EVENT_TOPIC = [
    '0xc42079f94a6350d7e6235f29174924f928cc2ac818eb64fed8004e115fbcca67',
    '0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff',
];
export const V3_FILL_EVENT_TOPIC = ['0x6869791f0a34781b29882982cc39e882768cf2c96995c2a110c577c53bc932d5'];

export const ERC721_ORDER_FILLED_EVENT_TOPIC = ['0x50273fa02273cceea9cf085b42de5c8af60624140168bd71357db833535877af'];
export const ERC721_ORDER_PRESIGNED_EVENT_TOPIC = [
    '0x8c5d0c41fb16a7317a6c55ff7ba93d9d74f79e434fefa694e50d6028afbfa3f0',
];
export const ERC721_ORDER_CANCELLED_EVENT_TOPIC = [
    '0xa015ad2dc32f266993958a0fd9884c746b971b254206f3478bc43e2f125c7b9e',
];

export const ERC1155_ORDER_FILLED_EVENT_TOPIC = ['0x20cca81b0e269b265b3229d6b537da91ef475ca0ef55caed7dd30731700ba98d'];
export const ERC1155_ORDER_PRESIGNED_EVENT_TOPIC = [
    '0x5e91ddfeb7bf2e12f7e8ab017d2b63a9217f004a15a53346ad90353ec63d14e4',
];
export const ERC1155_ORDER_CANCELLED_EVENT_TOPIC = [
    '0x81b6de71b4c5058b59a7b56dc73297dd4820029a7229cf7b8e9680d73ff9bab0',
];

export const ONEINCH_ROUTER_V3_CONTRACT_ADDRESS = '0x11111112542D85B3EF69AE05771c2dCCff4fAa26';
export const ONEINCH_ROUTER_V4_CONTRACT_ADDRESS = '0x1111111254fb6c44bAC0beD2854e76F90643097d';
export const ONEINCH_SWAPPED_EVENT_TOPIC = ['0xd6d4f5681c246c9f42c203e287975af1601f8df8035a9251f79aab5c8f09e2f8'];
export const OPEN_OCEAN_V1_CONTRACT_ADDRESS = '0x6352a56caadC4F1E25CD6c75970Fa768A3304e64';
export const OPEN_OCEAN_SWAPPED_V1_EVENT_TOPIC = ['0x76af224a143865a50b41496e1a73622698692c565c1214bc862f18e22d829c5e'];
export const PARASWAP_SWAPPED_V4_EVENT_TOPIC = ['0x9cc2048b8af5eadff75759a3169b369efc538fb79c760fd396a4b355410b41b7'];
export const PARASWAP_SWAPPED_V5_EVENT_TOPIC = ['0x680ad12fcfabafe9b1f08214caef968eb651cf010bee4a2824adfaec965903e8'];
export const PARASWAP_SWAPPED2_V5_EVENT_TOPIC = ['0x974dd0442e0b8c00fdbaae504edea1412d63bc110294a98b3c61ddcd0e703aa8'];
export const SLINGSHOT_CONTRACT_ADDRESS = '0xF2e4209afA4C3c9eaA3Fb8e12eeD25D8f328171C';
export const SLINGSHOT_TRADE_EVENT_TOPIC = ['0xd0c707b5ea7a686e3488bec166c1433616af06ab4ffa10e059b6da789bff90ac'];
export const TIMECHAIN_V1_CONTRACT_ADDRESS = '0x9751af61060dfc101b424110926f806f3777e166';
export const TIMECHAIN_SWAP_V1_EVENT_TOPIC = ['0x6782190c91d4a7e8ad2a867deed6ec0a970cab8ff137ae2bd4abd92b3810f4d3'];
export const TOKEN_TRANSFER_EVENT_TOPIC = ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'];

export const ERC165_SUPPORTS_INTERFACE_SELECTOR = '01ffc9a7';
export const ERC165_ERC721_INTERFACE = '80ac58cd';
export const ERC165_ERC1155_INTERFACE = 'd9b67a26';

export * from './abis';

export const LOG_TRANSFER_EVENT_TOPIC_0 = '0xe6497e3ee548a3372136af2fcb0696db31fc6cf20260707645068bd3fe97f3c4';
export const POLYGON_MATIC_ADDRESS = '0x0000000000000000000000000000000000001010';
export const META_TRANSACTION_EXECUTED_EVENT_TOPIC = [
    '0x7f4fe3ff8ae440e1570c558da08440b26f89fb1c1f2910cd91ca6452955f121a',
];
