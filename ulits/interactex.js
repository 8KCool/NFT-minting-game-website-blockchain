import { config } from '../dapp.config'
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_URL));

const TokenContract = require('../artifacts/contracts/DexCoin.sol/DexCoin.json')
const tokenContract = new web3.eth.Contract(TokenContract.abi , config.tokenContract)

const ExchangeContract = require('../artifacts/contracts/DexExchange.sol/DexExchange.json')
const exchangeContract = new web3.eth.Contract(ExchangeContract.abi , config.exchangeContract)

export const getTokenBalance = async () => {
    if (!window.ethereum.selectedAddress) {
       return 0}
    else {const TokenBalance = await tokenContract.methods.balanceOf(window.ethereum.selectedAddress).call()
    return TokenBalance }
  }

  export const getBnbBalance = async () => {
    if (!window.ethereum.selectedAddress) {
       return 0
    }
    else {
        const BNBbalance = await web3.eth.getBalance(window.ethereum.selectedAddress)
    return BNBbalance 
    }
  }
//Buy dex coins
  export const doBuy = async (payableAmount) => {

    if (!window.ethereum.selectedAddress) {
      return {
        success: false,
        status: 'To be able to buy, you need to connect your wallet'
      }
    }
    const tx = {
      to: config.exchangeContract,
      from: window.ethereum.selectedAddress,
      value: parseInt(
        web3.utils.toWei(String(payableAmount), 'ether')
      ).toString(16), // hex
      data: exchangeContract.methods.buyTokens().encodeABI()
    }
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx]
      })
  
      return {
        success: true,
        status: (
          <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank">
            <p>✅ Check out your transaction on Etherscan:</p>
            <p>{`https://testnet.bscscan.com/tx/${txHash}`}</p>
          </a>
        )
      }
    } catch (error) {
      return {
        success: false,
        status: '😞 Smth went wrong:' + error.message
      }
    }
  
    }


    //sell dex coins
  export const doSell = async (tokenAmountToSell) => {

    if (!window.ethereum.selectedAddress) {
      return {
        success: false,
        status: 'To be able to buy, you need to connect your wallet'
      }
    }
    const tx = {
      to: config.exchangeContract,
      from: window.ethereum.selectedAddress,
      data: exchangeContract.methods.sellTokens(tokenAmountToSell).encodeABI()
    }
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx]
      })
  
      return {
        success: true,
        status: (
          <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank">
            <p>✅ Check out your transaction on BscScan:</p>
            <p>{`https://testnet.bscscan.com/tx/${txHash}`}</p>
          </a>
        )
      }
    } catch (error) {
      return {
        success: false,
        status: '😞 Smth went wrong:' + error.message
      }
    }
  
    }

    // approve to sell
    export const doApprove = async (tokenAmountToSell) => {
      
        const Spender = config.exchangeContract
        if (!window.ethereum.selectedAddress) {
          return {
            success: false,
            status: 'To be able to Approve, you need to connect your wallet'
          }
        }
        const tx = {
          to: config.tokenContract,
          from: window.ethereum.selectedAddress,
          data: tokenContract.methods.approve(Spender , tokenAmountToSell).encodeABI()
        }
        try {
          const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx]
          })
      
          return {
            success: true,
            status: (
              <a href={`https://testnet.bscscan.com/tx/${txHash}`} target="_blank">
            <p>✅ Check out your transaction on BscScan:</p>
            <p>{`https://testnet.bscscan.com/tx/${txHash}`}</p>
          </a>
            )
          }
        } catch (error) {
          return {
            success: false,
            status: '😞 Smth went wrong:' + error.message
          }
        }
        }

        //Get exchange rate

        export const getExchangeRate = async () => {
          const exchangeRate = await exchangeContract.methods.rate().call()
          return exchangeRate
        }