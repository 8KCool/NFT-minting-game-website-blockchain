import { config } from '../dapp.config'
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_URL)); 


const NFTcontract = require('../artifacts/contracts/DexBattle.sol/DexBattle.json')
const nftContract = new web3.eth.Contract(NFTcontract.abi, config.nftContract)



//Get supply Amounts
export const getMaxLeaderSupply = async () => {
  const maxSupply = await nftContract.methods.maxLeaderSupply().call() 
  return maxSupply
}

export const getMaxLegendarySupply = async () => {
  const maxSupply = await nftContract.methods.maxLegendarySupply().call() 
  return maxSupply
}

export const getMaxEpicSupply = async () => {
  const maxSupply = await nftContract.methods.maxEpicSupply().call() 
  return maxSupply
}

export const getMaxRareSupply = async () => {
  const maxSupply = await nftContract.methods.maxRareSupply().call() 
  return maxSupply
}

export const getMaxUncommonSupply = async () => {
  const maxSupply = await nftContract.methods.maxUncommonSupply().call() 
  return maxSupply
}

export const getMaxCommonSupply = async () => {
  const maxSupply = await nftContract.methods.maxCommonSupply().call() 
  return maxSupply
}

//Get dex costs
export const getLeaderCost = async () => {
  const cost = await nftContract.methods.Leader_items_cost().call() 
  return cost
}

export const getLegendaryCost = async () => {
  const cost = await nftContract.methods.Legendary_items_cost().call() 
  return cost
}

export const getEpicCost = async () => {
  const cost = await nftContract.methods.Epic_items_cost().call() 
  return cost
}

export const getRareCost = async () => {
  const cost = await nftContract.methods.Rare_items_cost().call() 
  return cost
}

export const getUncommonCost = async () => {
  const cost = await nftContract.methods.Uncommon_items_cost().call() 
  return cost
}

export const getCommonCost = async () => {
  const cost = await nftContract.methods.Common_items_cost().call() 
  return cost
}


// total minted amount
export const getTotalMinted = async (id) => {
  const totalMinted = await nftContract.methods.totalSupply(id).call()
  return totalMinted
}

//paused?
export const isPausedState = async () => {
  const paused = await nftContract.methods.paused().call()
  return paused
}


export const doMint = async (cost, id) => {

  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: 'To be able to mint, you need to connect your wallet'
    }
  }

  const nonce = await web3.eth.getTransactionCount(
    window.ethereum.selectedAddress,
    'latest'
  )

  const tx = {
    to: config.nftContract,
    from: window.ethereum.selectedAddress,
    value: parseInt(
      web3.utils.toWei(String (cost), 'ether')
    ).toString(16), // hexf
    gas: String(25000),
    data: nftContract.methods.mint(id).encodeABI(),
    nonce: nonce.toString(16)
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




    export const doApprove = async (Amount) => { 
      
      const Spender = config.nftContract
      if (!window.ethereum.selectedAddress) {
        return {
          success: false,
          status: 'To be able to Approve, you need to connect your wallet'
        }
      }
      const tx = {
        to: config.tokenContract,
        from: window.ethereum.selectedAddress,
        data: tokenContract.methods.approve(Spender , Amount).encodeABI()
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


  

 

