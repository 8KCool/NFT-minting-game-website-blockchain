import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { initOnboard } from "../ulits/onboard"


function Navbar () {

    const [walletAddress, setWalletAddress] = useState('')

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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

  return ( 
    <div>
    <div className='fixed z-[100] w-screen md:mx-10 lg:mx-10 bg-black/30 backdrop-blur-sm overflow-hidden border-b-white rounded-md'>
      <ul className='flex md:flex-row flex-col items-center justify-between '>
        <li>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-full text-[20px]'>
            <a href='/'><h1 className='mx-4 md:mb-0 mb-2'>Home</h1></a>
            <a href='/mintingWithdex'><h1 className='mx-4 md:mb-0 mb-2'>Buy NFTs</h1></a>
            <a className="cursor-pointer hover:text-blue-400" href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'><h1 className='mx-4 md:mb-0 mb-2'>Whitepaper</h1></a>
          </div>

          <li className="hidden md:flex">
        
        { walletAddress ?  (
        <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
        <h1 className='mx-4 uppercase tracking-wide'>Connected: {walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)}</h1> </div>
        ) : (
        <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:text-black cursor-pointer' onClick={connectWalletHandler}>
        <h1 className='mx-4 uppercase tracking-wide'>Connect Wallet</h1></div>
        )
        }

      
      
    </li>

      </ul>
      
      </div>

    </div>
  )
}

export default Navbar
