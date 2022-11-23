import React, { useState, useEffect } from "react";
import Chalist from "./CharacterData.json";
import Weaplist from './WeaponData.json'
import Cards from "./card";
import { initOnboard } from "../ulits/onboard"
import { config } from '../info.config'

import {Link} from 'react-scroll/modules';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import {
  isPausedState,
  doMint,
  doApprove          } from '../ulits/interact'

const Amazon = () => {
    const [searchTerm, setSearchTerm] = useState("")
  
  
  const [paused, setPaused] = useState(false)
  const [status, setStatus] = useState(null)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')


useEffect(() => {
    const init = async () => {

      //setTotalMinted(await getTotalMinted(id))

      setPaused(await isPausedState())
      //setIsPublicSale(await isPublicSaleState())
      
      
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

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };





   /* global Bigint */
  const handleClick = async (item) => {
    
    setIsMinting(true)
    const id= item.id
    console.log(id)
    let cost = 0
    if (item.id < 10 ) {
      cost = config.leader_items_cost
    }
    else if (item.id < 37 ){
      cost = config.common_items_cost
    }

    else if (item.id < 64 ){
      cost = config.uncommon_items_cost
    }

    else if (item.id < 99 ){
      cost = config.rare_items_cost
    }

    else if (item.id < 124 ){
      cost = config.epic_items_cost
    }

    else {
      cost = config.legendary_items_cost
    }
    console.log(cost)
    const price = BigInt(cost*10**18)
    let {success} = await doApprove(price) 
      if (success) {
        const {success , status} = await doMint(id) 

        setStatus({
          success,
          message:status
          
        })
        
      }
    
        
        
    
        setIsMinting(false)
   };


  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#141414] to-[#330042] justify-center items-center pb-10 flex flex-col overflow-hidden">

<div className='sticky top-0 w-screen mx-10 md:mx-10 lg:mx-10 bg-black/30 backdrop-blur-sm overflow-hidden border-b-white rounded-md my-4'>
      <ul className='flex flex-row items-center justify-between '>
        <li className='ml-6'>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
        <li>
        <form className='my-4'>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" id="searchInput" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Character, Weapon..."
        onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        </form>
        </li>
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-full text-[20px]'>
            <a className="cursor-pointer hover:text-blue-400" hfer='/'><h1 className='mx-4'>Home</h1></a>
            <Link className="cursor-pointer hover:text-blue-400" acticeClass ="active" to='characters' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Characters </h1></Link>
            <Link className="cursor-pointer hover:text-blue-400" acticeClass ="active" to='weapons' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'>Weapons</h1></Link>
            <a className="cursor-pointer hover:text-blue-400" hfer='/exchange'><h1 className='mx-4 '>Buy $Dex</h1></a>
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
      


        <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Characters</h1>
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg: my-4">
        { Chalist.filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              }).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </div>

    <h1 className='text-[40px] font-Kanit text-blue-400 tracking-wide uppercase my-[22px] font-semibold mt-4'>Weapons</h1>
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0 lg:mx-4 my-4">
        { Weaplist.filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              }).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </div>

    </div>
  );
};

export default Amazon ;