import React from "react";
import Head from 'next/head';
import Navbar from "../components/NavAbout";

export default function buyThroughReps () {
    return (
        <div>
            <Head>
        <title>DexBattle-Representative</title>
        <meta name="Description" content="Dex Battle Game!" />
        <link rel="icon" href="/Dex.png" />
      </Head>

      <Navbar/>
            <h1 className="font-Kanit md:text-[64px] text-[40px] text-center text-white mt-8"> Our representatives</h1>

            {/*content*/}

            
            <ul className="text-blue-400 font-Kanit text-50px max-h-screen justify-evenly flex flex-col md:mx-16">
                <li>
                    
                    <div>
                        
                        <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/placeholder.png" alt=""/>
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UAE</h5>
                                    <h5 class="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Name here</h5>
                                    <div className="flex justify-between">
                                        <img src="/whatsapp.svg h-[40px] w-[40px]"/>
                                        <hl className='font-Kanit text-[30px]'>number here</hl>
                                    </div>
                                </div>
                        </a>


                    </div>
                </li>
                {/* <li>Morocco</li>
                <li>Egypt</li>
                <li>Turkey</li>
                <li>Sri Lanka</li>
                <li>Pakistan</li> */}
            </ul>
        </div>
    )
}



