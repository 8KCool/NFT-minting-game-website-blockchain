import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {social} from "../info.config";
// import video1 from '../assests/Main.mp4';

export default function Main() {

useEffect(() => {
    Aos.init({ duration : 1500,
               offset: 100,
               delay : 500})
    }, []); 

    return(
    <div id="home"className='overflow-hidden flex flex-col items center'>
        <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <img
          src="/webimage2.png"
          className="w-screen object-cover"
        />
        <div className='mt-6 left-[40px] absolute fex flex-col'>

          <div className='flex flex-row items-center text-start'>
            <div className='mr-6  border-b-4 border-brand-yellow'>
                <h1 className='font-Kanit md:text-[60px] lg:text-[60px] text-[30px] text-white font-semibold uppercase'> Make your own story <br/>
                <span className='md:text-[75px] text-[35px] text-white'>IN <span className='bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent'>DEXBATTLE</span></span></h1>

                <div class="md:flex justify-start mt-10 mb-[60px]">
            <a href={social.googlePlayStore}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 my-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Get it on </p>
                        <p class="text-sm md:text-base text-gray-200"> Google Play Store </p>
                    </div>
                </div></a>
                <a href={social.appleAppStore}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 my-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on </p>
                        <p class="text-sm md:text-base text-gray-200"> Apple App Store </p>
                    </div>
                </div></a>
                <a href={social.downloadForWindows}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 my-2">
                    <img src="/icons/windows.png" class="w-7 md:w-8"/> 
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download for  </p>
                        <p class="text-sm md:text-base text-gray-200"> Windows </p>
                    </div>
                </div></a>
            </div>

                         {/* social media icons */}
           <div className='flex w-100 justify-between my-6 '>            
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-6">
              <li className="cursor-pointer px-2">
                <a href={social.opensea} target="_blank" rel="noreferrer">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d= " M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                      fill="White" ></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="White "
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
                  href={social.discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    stroke="currentColor"
                    fill="White "
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 md:w-8 md:h-8" 
                  fill="white"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"> 
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" id="mainIconPathAttribute" fill="#ffffff"></path> </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href={social.telegram}
                  target="_blank"
                  rel="noreferrer"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 className="w-6 h-6 md:w-8 md:h-8"  
                 fill="white" 
                 viewBox="0 0 16 16" 
                 id="IconChangeColor"> 
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" id="mainIconPathAttribute" fill="#ffffff">
                  </path> </svg>
                </a>
              </li>

              <li className="cursor-pointer px-2">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 448 512" 
                 class="md:w-8 md:h-8 w-6 h-6">
                  <path fill="white" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

                </a>
              </li>
              
            </ul>
          </nav>
            
          </div>
            
            

            </div>

            <div className='w-[600px] h-[600px] mt-[80px]'>
              <img src='webimage1.png'
              className='object-cover'/>
            </div>

          </div>
        </div>
       
        </div>
        
        <div data-aos ="fade-up"className='flex md:flex-row flex-col md:mx-16 justify-between bg-gray-700/40 backdrop-blur-sm rounded-lg items-center'>
          <div className='flex flex-col my-4 md:w-[70%] md:mx-10 mx-4'>
            <h1 data-aos="fade-right" className='md:text-5xl text-3xl font-Kanit text-white tracking-wide'>What is DexBattale?</h1>
            <h1 data-aos="fade-right" className='text-[18px] font-Kanit text-gray-400 text-justify mt-6'>
            Welcome to the ever-evolving Dex battle universe! Hone your shooting skills, compete in tournaments, and complete missions with your
Clan to earn NFTs and coveted rewards. Collect weapons, and so much more items. But most importantly, have fun and work together
Dex battle is a community-owned skill-based shooter with different PvP and PvE game modes for every type of player. The core shooter
game is set on top of a land control-oriented, social strategy game with a deep emphasis on clans, alliances, and social mechanics. The
game economy rewards social behavior and is designed to be an endless experience built by and for the player community.
Thus, Metaverse structures can be applied immensely in the Dex battle but it all depends on the player&apos;s feedback when the voting takes
place. Dex battle metaverse will bring the best experience ever when players combine a shooting skill-based game with a wisdom strategy
for each character. It is fun beyond the limit.
            </h1>

            <h1 data-aos="fade-up" className='text-3xl font-Kanit text-white tracking-wide mt-6'>Features</h1>
            <h1 data-aos="fade-up" className='text-[16px] font-Kanit text-gray-400 text-justify mt-4'>
            Dex battle features blockchain-based digital assets known as &ldquo;NFTs&ldquo; that operate on an eco-friendly proof-of-stake blockchain. Because
blockchain technology enables actual digital ownership, Dex battle characters may be exchanged not just on the specific Dex battle
marketplace, but also on a variety of other platforms. Given the massive trading volume and profits generated by these NFT markets, this
is a wonderful financial incentive for merely profit-driven users and a chance for next-generation green investment. With NFTs now
selling for millions of dollars, these fees may outweigh the revenue earned by in-game transactions.
            </h1>

          </div>

          <div className='w-full flex-row items-end'>

            <video src={require('../assests/Main.mp4')} autoPlay muted loop
                    className='w-full h-full border-gray-400 rounded-lg' />
             {/* <img
            data-aos="flip-up"
            src='/DexBattle PNG/DexBattle-nostore.jpg'
            className='md:mx-10 h-full w-full md:w-[70%] border border-gray-400 rounded-lg'/> */}

            </div>

           

        </div>

      </div>
    )
}