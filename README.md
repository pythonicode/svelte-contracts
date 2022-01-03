# Svelte-Contracts

## About

svelte-contracts is a library to easily create and manage [web3 contracts](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html) as [svelte readable stores](https://svelte.dev/docs#run-time-svelte-store-readable).

## Installation

<code>npm install svelte-contracts</code>

## Usage

### Create your own contracts

```js
import { createContract } from 'svelte-contracts';
const ERC20Token = createContract('0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce');
const symbol = await ERC20Token.methods.symbol().call();
console.log(symbol);

Output: 'SHIB'
```

### Use prebuilt contracts

Note: you must be connected to the blockchain  to use any prebuild contracts. Try [`svelte-web3`](https://www.npmjs.com/package/svelte-web3).

```js
import { supported } from 'svelte-contracts';
console.log(supported);

Output: ['USDT', 'USDC', 'BUSD', 'UNI', 'UST', 'DAI']
```

```js
import { USDC, USDT } from 'svelte-contracts';
await USDC.methods.transfer('0x7b76229515d374a537360BDFE1504aF5EE04c415').call();
await USDC.methods.approve('0x7b76229515d374a537360BDFE1504aF5EE04c415').call();
```
