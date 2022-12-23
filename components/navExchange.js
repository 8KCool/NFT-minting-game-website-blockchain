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
      <ul className='flex flex-row items-center justify-between '>
        <li>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-full text-[20px]'>
            <a href='/'><h1 className='mx-4'>Home</h1></a>
            <a href='/mintingWithdex'><h1 className='mx-4'>Buy NFTs</h1></a>
            <a className="cursor-pointer hover:text-blue-400" href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'><h1 className='mx-4'>Whitepaper</h1></a>
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
        <li>
        <div onClick={handleNav}
          className=' md:hidden rounded-md p-2 bg-white mr-2 cursor-pointer' >
            <AiOutlineMenu size={18} />
          </div>
        </li>

      </ul>
      
      </div>
            {/* Mobile Menu */}
      {/* Overlay */}
      <div className={
         nav? 'z-[120] md:hidden fixed left-0 top-0 w-full h-screen bg-gray-400/10 backdrop-filter backdrop-blur-sm' : ""
        }>
        
        {/* Side Drawer Menu */}
      <div className ={
        nav? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500 border-r-2"
      :'fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen'
      }>
      <div className='flex w-full items-center justify-between'>
      <Link className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} duration={500}>
                <a>
                  <Image
                    src="/Dex.png"
                    width='45'
                    height='45'
                    alt='/'
                    className="rounded-md"
                  />
                </a>
              </Link>
              <div onClick={handleNav}
              className='fixed md:right-[-100%] rounded-full bg-gray-400 hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer '>
              <AiOutlineClose size={18} />
             </div>
          </div>
          <div className='border-b py-4 flex flex-col mt-4'>
              <p className='uppercase text-[18px] text-white font-Kanit text-center'>
              Dex Battle Minting
              </p>
            </div>
            <div  className='py-4 flex flex-col '>
        <ul className='uppercase text-gray-200 font-Kanit text-center'>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/'>Home</a>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <a className="mx-4 cursor-pointer hover:text-blue-400" href='/mintingWithdex'> <h1> Buy NFTs</h1></a>
            </li>
            <li>
            <a className="cursor-pointe"  href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'>Whitepaper</a>
            </li>
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
        

      </div>

    </div>
  )
}

export default Navbar
