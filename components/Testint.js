import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getNumberMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  isWlMintState,
  doWlMint,
  doPublicMint,
  doApprove          } from '../ulits/interact'



export default function Mint(){
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [NumberMinted, setNumberMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isWlMint, setIsWlMint] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())
      setNumberMinted (await getNumberMinted())

      setPaused(await isPausedState())
      setIsPublicSale(await isPublicSaleState())
      const isWlMint = await isWlMintState()
      setIsWlMint(isWlMint)
      
      setMaxMintAmount(
        isWlMint ? config.WlMaxMintAmount : config.maxMintAmount
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }

  const wlMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await doApprove(Amount) && await doWlMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
   /* global Bigint */

  const publicMintHandler = async () => {
    setIsMinting(true)
    const Amount = BigInt(config.rate * mintAmount)
    const { success, status } = await doApprove(Amount) && await doPublicMint(mintAmount) 

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
 
  


  return ( 

    <div class="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4">

        <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div class="relative">
            <img class="w-full rounded-xl" src="/characters/Regen.png" alt="Colors" />
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Legendry</p>
          </div>
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Regan</h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <p>Supply:500</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Minted:100</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Available:400</p>
            </div>
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
          </div>
        </div>

        <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div class="relative">
            <img class="w-full rounded-xl" src="/characters/Regen.png" alt="Colors" />
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Legendry</p>
          </div>
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Regan</h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <p>Supply:500</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Minted:100</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Available:400</p>
            </div>
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
          </div>
        </div>

        <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div class="relative">
            <img class="w-full rounded-xl" src="/characters/Regen.png" alt="Colors" />
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Legendry</p>
          </div>
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Regan</h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <p>Supply:500</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Minted:100</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Available:400</p>
            </div>
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
          </div>
        </div>

        <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div class="relative">
            <img class="w-full rounded-xl" src="/characters/Regen.png" alt="Colors" />
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Legendry</p>
          </div>
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Regan</h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <p>Supply:500</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Minted:100</p>
            </div>
            <div class="flex space-x-1 items-center">
              <p>Available:400</p>
            </div>
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg hover:bg-purple-700">Mint now</button>
          </div>
        </div>

      </div>
    </div>
    
        )
}
