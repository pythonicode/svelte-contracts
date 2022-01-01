/**
 *      Svelte Stores for Smart Contract Addresses
 *                   by Anthony Riley
 */

// Dependencies
import { writable, derived } from "svelte/store";
import { chainId } from "svelte-web3";

// Global Constants
const MAIN_NET = 1;
const BINANCE_SMART_CHAIN_ID = 56;
const TOMO_CHAIN_ID = 88;
const XDAI_CHAIN_ID = 100;
const HECO_CHAIN_ID = 128;
const POLYGON_CHAIN_ID = 137;
const FANTOM_CHAIN_ID = 250;
const MOONRIVER_CHAIN_ID = 1285;

export const USDT = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0xdac17f958d2ee523a2206206994597c13d831ec7");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0x55d398326f99059ff775485246999027b3197955");
        else if(id == TOMO_CHAIN_ID) set("0x381b31409e4d220919b2cff012ed94d70135a59e");
        else if(id == XDAI_CHAIN_ID) set("0x4ECaBa5870353805a9F068101A40E0f32ed605C6");
        else if(id == HECO_CHAIN_ID) set("0xa71edc38d189767582c38a3145b5873052c3e47a");
        else if(id == POLYGON_CHAIN_ID) set("0xc2132d05d31c914a87c6611c10748aeb04b58e8f");
        else if(id == FANTOM_CHAIN_ID) set("0x049d68029688eabf473097a2fc38ef61633a3c7a");
    });
    return () => { unsubscribe(); };
});

export const USDC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d");
        else if(id == TOMO_CHAIN_ID) set("0xcca4e6302510d555b654b3eab9c0fcb223bcfdf0");
        else if(id == XDAI_CHAIN_ID) set("0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83");
        else if(id == POLYGON_CHAIN_ID) set("0x2791bca1f2de4661ed88a30c99a7a9449aa84174");
        else if(id == FANTOM_CHAIN_ID) set("0x04068DA6C83AFCFA0e13ba15A6696662335D5B75");
    });
    return () => { unsubscribe(); };
});

export const SHIB = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce");
    });
    return () => { unsubscribe(); };
});

export const MATIC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xcc42724c6683b7e57334c4e856f4c9965ed682bd");
        else if(id == POLYGON_CHAIN_ID) set("0x0000000000000000000000000000000000001010");
    });
    return () => { unsubscribe(); };
});

export const BUSD = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x4Fabb145d64652a948d72533023f6E7A623C7C53");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xe9e7cea3dedca5984780bafc599bd69add087d56");
    });
    return () => { unsubscribe(); };
});

export const CRO = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b");
    });
    return () => { unsubscribe(); };
});

export const WBTC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x2260fac5e5542a773aa44fbcfedf7c193bc2c599");
        else if(id == TOMO_CHAIN_ID) set("0x503b2ddc059b81788fd1239561596614b27faade");
        else if(id == POLYGON_CHAIN_ID) set("0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6");
        else if(id == FANTOM_CHAIN_ID) set("0x321162Cd933E2Be498Cd2267a90534A804051b11");
    });
    return () => { unsubscribe(); };
});

export const UNI = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xbf5140a22578168fd562dccf235e5d43a02ce9b1");
        else if(id == XDAI_CHAIN_ID) set("0x4537e328bf7e4efa29d05caea260d7fe26af9d74");
        else if(id == HECO_CHAIN_ID) set("0x22c54ce8321a4015740ee1109d9cbc25815c46e6");
        else if(id == POLYGON_CHAIN_ID) set("0xb33eaad8d922b1083446dc23f610c2567fb5180f");
    });
    return () => { unsubscribe(); };
});

export const LTC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == BINANCE_SMART_CHAIN_ID) set("0x4338665cbb7b2485a8855a139b75d5e34ab0db94");
        else if(id == HECO_CHAIN_ID) set("0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4");
    });
    return () => { unsubscribe(); };
});

export const UST = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0xa47c8bf37f92aBed4A126BDA807A7b7498661acD");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0x23396cf899ca06c4472205fc903bdb4de249d6fc");
    });
    return () => { unsubscribe(); };
});

export const LINK = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x514910771af9ca656af840dff83e8264ecf986ca");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd");
        else if(id == XDAI_CHAIN_ID) set("0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2");
        else if(id == HECO_CHAIN_ID) set("0x9e004545c59d359f6b7bfb06a26390b087717b42");
        else if(id == POLYGON_CHAIN_ID) set("0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39");
        else if(id == FANTOM_CHAIN_ID) set("0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8");
    });
    return () => { unsubscribe(); };
});

export const DAI = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x6b175474e89094c44da98b954eedeac495271d0f");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3");
        else if(id == XDAI_CHAIN_ID) set("0x44fA8E6f47987339850636F88629646662444217");
        else if(id == POLYGON_CHAIN_ID) set("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063");
        else if(id == FANTOM_CHAIN_ID) set("0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E");
        else if(id == MOONRIVER_CHAIN_ID) set("0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844");
    });
    return () => { unsubscribe(); };
});

export const NEAR = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x1fa4a73a3f0133f0025378af00236f3abdee5d63");
    });
    return () => { unsubscribe(); };
});

export const BCH = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf");
        else if(id == HECO_CHAIN_ID) set("0xef3cebd77e0c52cb6f60875d9306397b5caca375");
    });
    return () => { unsubscribe(); };
});

export const ATOM = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == MAIN_NET) set("0x8D983cb9388EaC77af0474fA441C4815500Cb7BB");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0x0eb3a705fc54725037cc9e008bdede697f62f335");
    });
    return () => { unsubscribe(); };
});

export const TRX = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b");
    });
    return () => { unsubscribe(); };
});

export const FTM = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x4e15361fd6b4bb609fa63c81a2be19d873717870");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xad29abb318791d579433d831ed122afeaf29dcfe");
    });
    return () => { unsubscribe(); };
});

export const MANA = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x0f5d2fb29fb7d3cfee444a200298f468908cc942");
        else if(id == XDAI_CHAIN_ID) set("0x7838796B6802B18D7Ef58fc8B757705D6c9d12b3");
    });
    return () => { unsubscribe(); };
});

export const AXS = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0xbb0e17ef65f82ab018d8edd776e8dd940327b28b");
    });
    return () => { unsubscribe(); };
});

export const FTT = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9");
    });
    return () => { unsubscribe(); };
});

export const SAND = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => { 
        if(id == MAIN_NET) set("0x3845badAde8e6dFF049820680d1F14bD3903a5d0");
    });
    return () => { unsubscribe(); };
});

export const FIL = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153");
        else if(id == HECO_CHAIN_ID) set("0xae3a768f9ab104c69a7cd6041fe16ffa235d1810");
    });
    return () => { unsubscribe(); };
});

export const BTCB = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c");
    });
    return () => { unsubscribe(); };
});

export const ETC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x3d6545b08693dae087e957cb1180ee38b9e3c25e");
    });
    return () => { unsubscribe(); };
});

export const XTZ = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == BINANCE_SMART_CHAIN_ID) set("0x16939ef78684453bfdfb47825f8a5f714f12623a");
    });
    return () => { unsubscribe(); };
});

export const AAVE = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == MAIN_NET) set("0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9");
        else if(id == BINANCE_SMART_CHAIN_ID) set("0xfb6115445bff7b52feb98650c87f44907e58f802");
        else if(id == XDAI_CHAIN_ID) set("0xDF613aF6B44a31299E48131e9347F034347E2F00");
        else if(id == HECO_CHAIN_ID) set("0x202b4936fe1a82a4965220860ae46d7d3939bb25");
        else if(id == POLYGON_CHAIN_ID) set("0xd6df932a45c0f255f85145f286ea0b292b21c90b");
        else if(id == FANTOM_CHAIN_ID) set("0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B");
    });
    return () => { unsubscribe(); };
});

export const GRT = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == MAIN_NET) set("0xc944e90c64b2c07662a292be6244bdf05cda44a7");
    });
    return () => { unsubscribe(); };
});

export const LRC = writable<string | undefined>(undefined, (set) => {
    const unsubscribe = chainId.subscribe(id => {
        if(id == MAIN_NET) set("0xbbbbca6a901c926f240b89eacb641d8aec7aeafd");
    });
    return () => { unsubscribe(); };
});

// Access Contract Addresses by Mapping

export const contracts = derived(
    [USDT, USDC, SHIB, MATIC, BUSD, WBTC, CRO, UNI, LTC, UST, LINK, DAI, NEAR, BCH, ATOM, TRX, FTM,
     MANA, AXS, FTT, SAND, FIL, BTCB, ETC, XTZ, AAVE, GRT, LRC], 
    ([$USDT, $USDC, $SHIB, $MATIC, $BUSD, $WBTC, $CRO, $UNI, $LTC, $UST, $LINK, $DAI, $NEAR, $BCH, $ATOM, $TRX, $FTM,
      $MANA, $AXS, $FTT, $SAND, $FIL, $BTCB, $ETC, $XTZ, $AAVE, $GRT, $LRC]) => (
    {
        'USDT': $USDT,
        'USDC': $USDC,
        'SHIB': $SHIB,
        'MATIC': $MATIC,
        'BUSD': $BUSD,
        'WBTC': $WBTC,
        'CRO': $CRO,
        'UNI': $UNI,
        'LTC': $LTC,
        'UST': $UST,
        'LINK': $LINK,
        'DAI': $DAI,
        'NEAR': $NEAR,
        'BCH': $BCH,
        'ATOM': $ATOM,
        'TRX': $TRX,
        'FTM': $FTM,
        'MANA': $MANA,
        'AXS': $AXS,
        'FTT': $FTT,
        'SAND': $SAND,
        'FIL': $FIL,
        'BTCB': $BTCB,
        'ETC': $ETC,
        'XTZ': $XTZ,
        'AAVE': $AAVE,
        'GRT': $GRT,
        'LRC': $LRC,
    }
));
