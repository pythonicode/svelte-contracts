/**
 *      Svelte Stores for Smart Contract Addresses
 *                   by Anthony Riley
 */

// Dependencies
import { readable, derived, get, Readable } from 'svelte/store';
import { chainId, web3, connected } from 'svelte-web3';

import * as blockchain from './blockchain.json';

export const createContract = (address: string, abi=blockchain.ethereum.ERC20ABI) => {
    const store = derived([web3, connected], ([w3, $connected], set) => {
        if ($connected && w3.eth) set(new w3.eth.Contract(abi, address));
        else set(undefined);
    });
    return store;
}

export const USDT: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.USDT.ABI, blockchain.ethereum.USDT.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.USDT.ABI, blockchain.binance.USDT.address));
        else if(chain == blockchain.tomo.chainId) set(new w3.eth.Contract(blockchain.tomo.USDT.ABI, blockchain.tomo.USDT.address));
        else if (chain == blockchain.gnosis.chainId) set(new w3.eth.Contract(blockchain.gnosis.USDT.ABI, blockchain.gnosis.USDT.address));
        else if (chain == blockchain.heco.chainId) set(new w3.eth.Contract(blockchain.heco.USDT.ABI, blockchain.heco.USDT.address));
        else if (chain == blockchain.polygon.chainId) set(new w3.eth.Contract(blockchain.polygon.USDT.ABI, blockchain.polygon.USDT.address));
        else if (chain == blockchain.fantom.chainId) set(new w3.eth.Contract(blockchain.fantom.USDT.ABI, blockchain.fantom.USDT.address));
    });
    return () => { unsubscribe(); }
});

export const USDC: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.ERC20ABI, blockchain.ethereum.USDC.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.USDC.ABI, blockchain.binance.USDC.address));
        else if(chain == blockchain.tomo.chainId) set(new w3.eth.Contract(blockchain.tomo.USDC.ABI, blockchain.tomo.USDC.address));
        else if (chain == blockchain.gnosis.chainId) set(new w3.eth.Contract(blockchain.gnosis.USDC.ABI, blockchain.gnosis.USDC.address));
        else if (chain == blockchain.heco.chainId) set(new w3.eth.Contract(blockchain.heco.USDC.ABI, blockchain.heco.USDC.address));
        else if (chain == blockchain.polygon.chainId) set(new w3.eth.Contract(blockchain.polygon.USDC.ABI, blockchain.polygon.USDC.address));
        else if (chain == blockchain.fantom.chainId) set(new w3.eth.Contract(blockchain.fantom.USDC.ABI, blockchain.fantom.USDC.address));
    });
    return () => { unsubscribe(); }
});

export const BUSD: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.ERC20ABI, blockchain.ethereum.BUSD.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.BUSD.ABI, blockchain.binance.BUSD.address));
    });
    return () => { unsubscribe(); }
});

export const UNI: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.UNI.ABI, blockchain.ethereum.UNI.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.UNI.ABI, blockchain.binance.UNI.address));
        else if (chain == blockchain.gnosis.chainId) set(new w3.eth.Contract(blockchain.gnosis.UNI.ABI, blockchain.gnosis.UNI.address));
        else if (chain == blockchain.heco.chainId) set(new w3.eth.Contract(blockchain.heco.UNI.ABI, blockchain.heco.UNI.address));
        else if (chain == blockchain.polygon.chainId) set(new w3.eth.Contract(blockchain.polygon.UNI.ABI, blockchain.polygon.UNI.address));
    });
    return () => { unsubscribe(); }
});

export const UST: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.UST.ABI, blockchain.ethereum.UST.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.UST.ABI, blockchain.binance.UST.address));
    });
    return () => { unsubscribe(); }
});

export const LINK: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.LINK.ABI, blockchain.ethereum.LINK.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.LINK.ABI, blockchain.binance.LINK.address));
        else if (chain == blockchain.gnosis.chainId) set(new w3.eth.Contract(blockchain.gnosis.LINK.ABI, blockchain.gnosis.LINK.address));
        else if (chain == blockchain.heco.chainId) set(new w3.eth.Contract(blockchain.heco.LINK.ABI, blockchain.heco.LINK.address));
        else if (chain == blockchain.polygon.chainId) set(new w3.eth.Contract(blockchain.polygon.LINK.ABI, blockchain.polygon.LINK.address));
        else if (chain == blockchain.fantom.chainId) set(new w3.eth.Contract(blockchain.fantom.LINK.ABI, blockchain.fantom.LINK.address));
    });
    return () => { unsubscribe(); }
});

export const DAI: Readable<any> = readable(undefined, (set) => {
    const unsubscribe = chainId.subscribe(chain => { 
        const w3 = get(web3);
        if(chain == blockchain.ethereum.chainId) set(new w3.eth.Contract(blockchain.ethereum.DAI.ABI, blockchain.ethereum.DAI.address));
        else if(chain == blockchain.binance.chainId) set(new w3.eth.Contract(blockchain.binance.DAI.ABI, blockchain.binance.DAI.address));
        else if (chain == blockchain.gnosis.chainId) set(new w3.eth.Contract(blockchain.gnosis.DAI.ABI, blockchain.gnosis.DAI.address));
        else if (chain == blockchain.polygon.chainId) set(new w3.eth.Contract(blockchain.polygon.DAI.ABI, blockchain.polygon.DAI.address));
        else if (chain == blockchain.fantom.chainId) set(new w3.eth.Contract(blockchain.fantom.DAI.ABI, blockchain.fantom.DAI.address));
    });
    return () => { unsubscribe(); }
});

interface KeyValue {
    [key: string]: any  
}

const supported_contracts: KeyValue = {
    'USDT': USDT,
    'USDC': USDC,
    'BUSD': BUSD,
    'UNI': UNI,
    'UST': UST,
    'LINK': LINK,
    'DAI': DAI,
};

export const supported = Object.keys(supported_contracts);

// Access Contract by Mapping

// export const contracts = derived(Object.values(supported_contracts), 
//     ([...supported_contracts]) => ({
        
//     })
// );
