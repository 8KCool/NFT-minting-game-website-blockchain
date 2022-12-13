const RPC_URL = process.env.NEXT_PUBLIC_URL
/* global BigInt*/

const config = {
  title: 'dex test dapp',
  description: 'test minting Dapp',
  tokenContract: '0xD946e2db35bA6e2aC40F4D68a270a08c05BAe539',
  nftContract: '0x3C7DA571076b3d72489569ac2A286E5D066b4866',
  exchangeContract: '0x8ff92F5289414dA81eF95f165ac46d8f0Dd50a01',
  nftwithDexContract: '0xDc18eE795cf892dD30D7A482E9856DE1d9BDc91b' // replace this after deploy new contract
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 56, // bnb mainnet
  darkMode: true,
  walletSelect: {
    description:'Plaese select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'dexTest01 Dapp'
      },
      
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis'},
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'dex Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }