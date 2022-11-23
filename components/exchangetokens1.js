import React from 'react';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import Link from 'next/link'
import Navbar from '../components/Navbar';
import Head from 'next/head'

import {
          doBuy,
          doSell,
          doApprove,
        getExchangeRate } from '../ulits/interactex'

export default function Exchange() {

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [exchangeRate, setExchangeRate] = useState(0)


  useEffect ( () => {
    const init = async () => {
      setExchangeRate(await(getExchangeRate()))
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

  const [rateArrItems , setRateArrItems] = useState([])

  const addCurrentRate = () =>{
  setRateArrItems([...rateArrItems,{
    id:rateArrItems.length,
    value:1/exchangeRate
 }])
 console.log(rateArrItems)
  }

  const doBuyHandler = async () => {

    setIsMinting(true)
    console.log(exchangeRate)
    const payableAmount = payAmount
    const {success, status}= await doBuy(payableAmount)
    setStatus({
      success,
      message: status
    })
     

   

    setIsMinting(false)
    
  }

  const doSellHandler = async () => {
    setIsMinting(true)
    const tokenAmountToSell = BigInt(exchangeAmount*10**18)
    const {success} = await doApprove(tokenAmountToSell)
    if (success) {
    const {success, status}=await doSell(tokenAmountToSell)
    setStatus({
      success,
      message: status
    })
  }
    

   

    setIsMinting(false)
  }



  const [exchangeAmount, setExchangeAmount] = useState(0)

  const handler = e =>{
    setExchangeAmount (e.target.value)
  }

  const payAmount = exchangeAmount/exchangeRate

  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) =>{
    setToggleState (index);
   }

return(
        <div className="min-h-screen h-full w-full overflow-hidden flex flex-col bg-gradient-to-br from-[#141414] to-[#330042]">

         <Head>
        <title>Dex Battle Instant Exchange</title>
        <meta name="Description" content="This is the exchange for buy and sell dex coins with bnb!" />
        <link rel="icon" href="/dex.png" />
      </Head>
        <div className="relative w-full h-full flex flex-col items-center justify-center py-2">

          <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
	   <div className="z-1 md:max-w-5xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
            bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
  
	    <h1 className="tracking-wide font-Righteous uppercase font-bold text-3xl md:text-4xl text-brand-02 bg-clip-text mt-4 border-2 border-blue-300 p-3 rounded-md">
            Instant Dex coin Exchange</h1>

            <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
              

            <div className=' w-[300px] h-[300px] my-4'>
                <img src='/dexcoin.jpeg'
                className='object-cover'/>
            </div>
                

                
                {/* Increment and decrement */}

                <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0 ">
                <div className='flex flex-col items-center mx-8 my-4 bg-[#D9CCCC] rounded-md py-4'>
            <div className='flex flex-col items-center mx-6 '>
                <h1 className=' mb-4 font-Kanit text-[22px] text-gray-700 '>{walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : 'CONNECT YOUR WALLET'}</h1>

                <div className='w-full max-w-xs bg-[#afaff8] rounded-md border pb-4'>
                <div className='w-full h-full flex justify-between border border-gray-400'>
                        <button className={toggleState === 1? ' bg-[#afaff8] text-black text-[18px] font-Kanit py-2 w-full  border-b-4  border-black' : " bg-[#D9CCCC] border text-gray-400 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(1)}>
                        BUY </button>

                        <button className={toggleState === 2 ? 'bg-[#afaff8] text-black text-[18px] font-Kanit py-2 px-auto w-full border-b-4 border-black' : "bg-[#D9CCCC] border text-gray-400 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(2)}>
                        SELL </button>
                    </div> 

                <form class="mx-6">
                  <div class="my-4">
                 
                    <h1 class="block text-gray-700 text-sm font-bold mb-2">
                      Balance
                    </h1>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dexBalance" type="number" value={exchangeAmount} onChange={handler}/>
                  </div>
                  <div class="my-4">
                    <h1 class="block text-gray-700 text-sm font-bold mb-2" >
                      Balance
                    </h1>
                    
                    
                    <div className='shadow appearance-none border bg- rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'> {payAmount}</div>
                  </div>
                  <div class="flex items-center justify-between">
                   {walletAddress ? ( <button className="w-full bg-blue-400 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button"
                   onClick={toggleState === 1 ? doBuyHandler : doSellHandler }>
                      { toggleState === 1 ? "Buy DEX coins" : "Sell Dex Coins"}
                    </button> ) : ( <button className="w-full bg-blue-400 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={connectWalletHandler}>
                      Connect Wallet
                    </button> )}  
                  </div>

                  {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-gray-400'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4"`}
              >
                <p className="flex flex-col space-y-2 text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}



                </form>
                
              </div>
            </div>
            </div>
                </div>
              </div>

              {/*Status*/}
        
              {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-red-700'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4"`}
              >
                <p className="flex flex-col space-y-2 text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}
    
                {/* Contract Address */}
              

            </div>
            </div>
  
  </div>

</div>

        
    )}