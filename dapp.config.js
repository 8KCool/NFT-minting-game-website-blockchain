const RPC_URL = process.env.NEXT_PUBLIC_URL
/* global BigInt*/

const config = {
  title: 'dex test dapp',
  description: 'test minting Dapp',
  tokenContract: '0x7703A1B5D6FD3980FE2354e566109081a29C334B',
  nftContract: '0xDc18eE795cf892dD30D7A482E9856DE1d9BDc91b',
  exchangeContract: '0xDeA764B8bf5b0D3B1096d715a69B864f35A1A138'
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