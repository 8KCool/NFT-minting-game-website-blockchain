import Image from 'next/image';
import {Link} from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { social } from '../info.config';


function Navbar () {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
    <div className='fixed z-[100] w-full h-auto bg-black/30 backdrop-blur-sm overflow-hidden border-b-white'>
      <ul className='flex flex-row items-center justify-between my-4 mx-10'>
        <a href='/'>
          <li>
          <img className = 'w-auto h-[55px]' 
            src = '/Dex.png'
          />
        </li>
        </a>
          <div className='hidden bg-gray-700/30 py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md lg:text-[20px] md:text-[16px] text-sm'>
            <a className="cursor-pointer bg-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent" href='/'><h1 className='mx-4'>Home</h1></a>
            <a className="cursor-pointer bg-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent" href='/Aboutus' ><h1 className='mx-4'>About Us </h1></a>
            <a className="cursor-pointer bg-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent" href='/Contactus' ><h1 className='mx-4'>Contact Us </h1></a>
            <a className="cursor-pointer bg-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent" href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'><h1 className='mx-4'>Whitepaper</h1></a>
          </div>

        <li>
        <a href='/mintingPortal'>
        <div className='hidden py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white font-semibold border border-white hover:bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 hover:text-black  hover:font-semibold'>
            <h1 className='mx-4 uppercase tracking-wide'>Mint now</h1>

          </div>
          </a>
        </li>
        <li className='md:hidden'>
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
      <a className="cursor-pointer" href='/'>
                
                  <Image
                    src="/Dex.png"
                    width='45'
                    height='45'
                    alt='/'
                    className="rounded-md"
                  />
                
              </a>
              <div onClick={handleNav}
              className='fixed md:right-[-100%] rounded-full bg-gray-400 hover:shadow-lg hover:shadow-gray-600 p-3 cursor-pointer '>
              <AiOutlineClose size={18} />
             </div>
          </div>
          <div className='border-b py-4 flex flex-col mt-4'>
              <p className='uppercase text-[18px] text-white font-Kanit text-center'>
              Dex Battle
              </p>
            </div>
            <div  className='py-4 flex flex-col '>
        <ul className='uppercase text-gray-200 font-Kanit text-center'>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/'>Home</a>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/Aboutus' >About us</a>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <a onClick={() => setNav(false)} href='/Contactus' >Contact Us</a>
            </li>
            <li>
            <a className="cursor-pointe"  href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'>Whitepaper</a>
            </li>
            <li>
        <div className='py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-blue-200 hover:text-black mt-4'>
            <a href='/mintingPortal'><h1 className='mx-4 uppercase tracking-wide hover:font-semibold'>MINT NOW</h1> </a>

          </div>
          </li>
            
          </ul>

        </div>
        {/* <div className='flex w-full justify-evenly'>            
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-6">
              <li className="cursor-pointer px-2">
                <a href="https://opensea.io" target="_blank" rel="noreferrer">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                      fill="gray"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href="https://twitter.com/PepeY00tsYC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="gray "
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href="https://discord.gg/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="gray "
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
              </li>
              
            </ul>
          </nav>
            
          </div> */}
        </div>
        

      </div>

    </div>
  )
}

export default Navbar
