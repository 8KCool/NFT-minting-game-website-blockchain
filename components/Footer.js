import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { social } from '../info.config';

function Footer () {
    return(

      <div class=" bg-gray-900 flex flex-col items-center">
          <div class="max-w-2xl mx-auto text-white py-10">
              <div class="text-center items-center">
                  <h3 class="text-3xl mb-3"> Download DexBattle </h3>
                  <p> Make your own story. </p>
                  <div class="md:flex items-center w-full justify-center my-10 ">
                    <a href={social.googlePlayStore}>
                      <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 md:mb-0 mb-4">
                          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8"/>
                          <div class="text-left ml-3">
                              <p class='text-xs text-gray-200'>Get it on </p>
                              <p class="text-sm md:text-base"> Google Play Store </p>
                                <p class='text-[10px] text-white'>{'(soon!)'}</p>
                          </div>
                      </div>
                      </a>
                      <a href={social.appleAppStore}>
                      <div class="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                          <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8"/>
                          <div class="text-left ml-3">
                              <p class='text-xs text-gray-200'>Download on </p>
                              <p class="text-sm md:text-base"> Apple App Store </p>
                                 <p class='text-[10px] text-white'>{'(soon!)'}</p>
                          </div>
                      </div>
                      </a>
                      
                      <a href={social.windows}><div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 my-2">
                    <img src="/icons/windows.png" class="w-7 md:w-8"/> 
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download for  </p>
                        <p class="text-sm md:text-base text-gray-200"> Windows </p>
                            <p class='text-[10px] text-white'>{'(soon!)'}</p>
                    </div>
                </div>
                </a>

                  </div>

              </div>
              <div class="w full gap-5 mt-8 flex flex-col md:flex-row lg:flex-raw md:justify-between items-center text-sm text-gray-400">
                  <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; All rights reserved Dexbattle, 2022 </p>
                  <div class="order-1 md:order-2">
                      <a href='/Contactus'><span class="px-2">Contact us</span></a>
                      <a href='/terms'><span class="px-2 border-l"></span>Terms of Service </a>
                      <a href='/privacyPolicy'><span class="px-2 border-l">Privacy Policy</span></a>
                  </div>
              </div>

              
          </div>
      </div>
    )
}

export default Footer



