import React from 'react';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import ChartComponent from "../components/ChartComponent";
import Footer from "../components/Footer"
import {Link} from 'react-scroll/modules';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

  const data = [
	{ value: 30 },
	{ value: 22 },
	{ value: 5 },
	{ value: 11 },
	{ value: 7 },
	{ value: 4 },
	{ value: 6 },
	{ value: 5 },
	{ value: 10 }
  ];




import {
        doBuy,
        doSell,
        doApprove,
        getExchangeRate,
        getTokenBalance,
        getBnbBalance } from '../ulits/interactex'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

export default function Exchange() {

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [exchangeRate, setExchangeRate] = useState(0)
  const [tokenBalance, setTokenBalance] = useState(0)
  const [bnbBalance, setBnbBalance] = useState(0)

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

  useEffect ( () => {
    const init = async () => {
      setExchangeRate(await(getExchangeRate()))
      setTokenBalance(await(getTokenBalance(walletAddress)))
      setBnbBalance(await(getBnbBalance(walletAddress)))
      
    }
    init()
  }, [])
 



  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }


  const doBuyHandler = async () => {

    setIsMinting(true)
    const payableAmount = Math.round(payAmount*10**18 )/10**18    
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
    let {success} = await doApprove(tokenAmountToSell)
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

   const [nav, setNav] = useState(false);

   const handleNav = () => {
     setNav(!nav);
   };

return(
        <div className='w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#141414] to-[#330042]'>
      {/*navbar*/}
      <div className='sticky top-0 w-[800px] mx-10 md:mx-10 lg:mx-10 bg-black/30 backdrop-blur-sm overflow-hidden border-b-white rounded-md my-4'>
      <ul className='flex md:flex-row flex-col items-center items-center justify-between my-2'>
        <li className='md:ml-10 lg:ml-10 ml-2'>
          <a href='/'><img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
          </a>
        </li>
 
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md text-[20px]'>
          <a className="mx-4 cursor-pointer hover:text-blue-400" href='/'> <h1> Home</h1></a>
            <a className="mx-4 cursor-pointer hover:text-blue-400" href='/mintingPortal'> <h1> Mint NFTs</h1></a>
          </div>

        <li>
        
            { walletAddress ?  (
            <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
            <h1 className='mx-4 uppercase tracking-wide'>Connected: {walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)}</h1> </div>
            ) : (
            <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:text-black cursor-pointer' onClick={connectWalletHandler}>
            <h1 className='mx-4 uppercase tracking-wide'>Connect Wallet</h1></div>
            )
            }

          
          
        </li>
        <li>
        <div onClick={handleNav}
          className=' md:hidden rounded-md p-2 bg-white mr-2 cursor-pointer' >
            <AiOutlineMenu size={18} />
          </div>
        </li>

      </ul>
      
      </div>

      {/*Title*/}
        <h1 className="tracking-wide font-Righteous uppercase font-bold text-3xl md:text-4xl text-brand-02 bg-clip-text mt-4 pt-3 ">
            Instant Dex coin Exchange</h1>
            <h1 className="tracking-wide font-Righteous uppercase font-bold text-2xl md:text-3xl text-brand-02 bg-clip-text my-2">
            Swap $Dex with BNB</h1>

        <div className=' flex flex-row items-center justify-between border'>
          {/* <img src='/bg2.jpg'
          className='absolute inset-auto block object-cover'/> */}

            <div className='flex flex-col items-center mx-8 my-4'>

            <div className=' w-[300px] h-[300px] my-4'>
		        <ChartComponent data={data} />
            
            </div>

            
            <Link href='/mintingPortal'><button className="w-full bg-yellow-300 hover:bg-blue-600 text-black font-bold py-2 px-6 rounded-full my-4">
                 Mint DexBattle NFTs
          </button>
          </Link>
           
            </div>

            <div className='flex flex-col items-center mx-8 my-4 backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150 bg-gray-200/10 filter"] rounded-md py-4'>
            <div className='flex flex-col items-center mx-6 '>
                <h1 className=' mb-4 font-Kanit text-[22px] text-gray-100 '>{walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : 'CONNECT YOUR WALLET'}</h1>

                <div className='w-full max-w-xs bg-[#D9CCCC] rounded-md border pb-4'>
                <div className='w-full h-full flex justify-between border border-gray-400'>
                        <button className={toggleState === 1? ' bg-[#D9CCCC] text-black text-[18px] font-Kanit py-2 w-full  border-b-4  border-black' : " bg-[#D9CCCC] border text-gray-700 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(1)}>
                        BUY </button>

                        <button className={toggleState === 2 ? 'bg-[#D9CCCC] text-black text-[18px] font-Kanit py-2 px-auto w-full border-b-4 border-black' : "bg-[#D9CCCC] border text-gray-700 py-2 text-[18px] font-Kanit px-10 "}
                        onClick={() => toggleTab(2)}>
                        SELL </button>
                    </div> 

                <form class="mx-6">
                  <div class="my-4">
                 
                    <h1 class="block text-gray-700 text-[16px] font-bold">
                      Balance: {Number.parseFloat(tokenBalance / 10**18).toFixed(4)} $Dex
                    </h1>
                    <div className='mb-6 w-full h-[40px]'>
                        {/* input feild here*/ }
                      <div className='flex flex-row '>
                        <div className='w-[40px] h-[40px]'>
                          < img src='/coin.png' className='object-cover'/>

                        </div>
                        <div>
                        <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-md" id="dexBalance" type="number" value={exchangeAmount} onChange={handler}/>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h1 class="block text-gray-700 text-[16px] font-bold" >
                      Balance : {Number.parseFloat(bnbBalance / 10**18).toFixed(4)} BNB
                    </h1>
                    
                     <div className='mb-6 w-full h-[40px]'>
                        {/*autofill feild here*/ }
                      <div className='flex flex-row '>
                        <div className='w-[40px] h-[40px]'>
                          < img src='/bnb.png' className='object-cover'/>

                        </div>
                    <div className='w-full'>
                    <div className='shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-md'> {payAmount}</div>
                    </div>

                    </div>
                    </div>   
                    
                  </div>
                  <div class="flex flex-col items-center justify-between">

                  <h1 className='mt-4 mb-2 w-full font-Kanit text-red-600 text-[17px]'>
                        Only 5 dex coins per transaction is allowed!
                   </h1>
                    
                   <h1 className='my-4 w-full font-Kanit text-gray-900 text-[17px]'>
                        Current Rate : {exchangeRate} $Dex per 1 BNB
                   </h1>
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
                  status.success ? 'border-green-500 text-gray-700' : 'border-red-600 text-gray-700'
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
        <div className='w-screen mt-10'>
        <Footer/>
        </div>
        </div>
    )}