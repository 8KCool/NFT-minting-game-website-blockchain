import Image from 'next/image';
import {Link} from 'react-scroll/modules';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Navbar () {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

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
            <Link className="cursor-pointer hover:text-blue-400" acticeClass ="active" to='home' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'>Home</h1></Link>
            <Link className="cursor-pointer hover:text-blue-400" acticeClass ="active" to='nfts' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'> Characters</h1></Link>
            <Link className="cursor-pointer hover:text-blue-400" acticeClass ="active" to='dexcoin' spy={true} smooth={true} offset={-70} duration={500}><h1 className='mx-4'>Weapons</h1></Link>
            <a className="cursor-pointer hover:text-blue-400" href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'><h1 className='mx-4'>Whitepaper</h1></a>
          </div>

        <li>
        <div className=' py-2 px-4 backdrop-blur-md flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-blue-200 hover:text-black  hover:font-semibold'>
            <a href='/mint'><h1 className='mx-4 uppercase tracking-wide'>Connect Wallet</h1> </a>

          </div>
          
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
            <Link onClick={() => setNav(false)}  className="cursor-pointer" activeClass ="active" to='home' spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <Link onClick={() => setNav(false)}  className="cursor-pointer" activeClass ="active" to='nfts' spy={true} smooth={true} offset={-70} duration={500}>Characters</Link>            </li>
            <li  className='py-4 text-sm hover:text-white'>
            <Link onClick={() => setNav(false)} className="cursor-pointer" activeClass ="active" to='dexcoin' spy={true} smooth={true} offset={-70} duration={500}>Weapons</Link>
            </li>
            <li>
            <a className="cursor-pointe"  href='/DexBattleWhitepaper.pdf' download='DexBattleWhitepaper.pdf'>Whitepaper</a>
            </li>
            <li>
        <div className='hidden py-2 px-4 backdrop-blur-md md:flex flex-row font-Kanit text-white rounded-md border border-white hover:bg-blue-200 hover:text-black'>
            <a href='/mint'><h1 className='mx-4 uppercase tracking-wide hover:font-semibold'>Connect Wallet</h1> </a>

          </div>
          </li>
            
          </ul>

        </div>
        
        </div>
        

      </div>

    </div>
  )
}

export default Navbar
