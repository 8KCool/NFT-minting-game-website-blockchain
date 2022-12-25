import React from 'react'
import Footer from './Footer'

function Reps () {
    return (
    
    <div>
    <div className='flex flex-col items-center mx-16'>
     <h1 className="font-Kanit md:text-[64px] text-[40px] text-center text-blue-400 mt-[100px]"> Our representatives</h1>

{/*content*/}


<ul className="text-blue-400 font-Kanit text-50px max-h-screen justify-evenly flex flex-col md:mx- mx-2">
    <li>
        
        <div className='flex md:flex-row flex-col md:my-8 my-2'>
    
            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray- md:mx-8 mx-2">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col items-start mx-4">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">UAE</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Mohammed Fahmy</h5>
                        <div className="flex justify-between items-center">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-md'/>
                            <hl className='font-Kanit text-[25px] ml-2'>+971554740803</hl>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:mx-8 mx-2">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 m-3" src="/placeholder.png" alt=""/>
                    <div class="flex flex-col items-start mx-4">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Morocco</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Abdeladim Nait Brahim</h5>
                        <div className="flex justify-between items-center">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-md'/>
                            <hl className='font-Kanit text-[25px] ml-2'>+21263688602</hl>
                        </div>
                    </div>
            </div>
            </div>

            <div className='flex md:flex-row flex-col md:mt-8 mt-4'>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:mx-8 mx-2">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col items-start mx-4">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Turkey</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Nadir Emre Yenigün</h5>
                        <div className="flex justify-between items-center">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-md'/>
                            <hl className='font-Kanit text-[25px] ml-2'>+905354199983</hl>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col items-center bg-[#eee3d3] border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:mx-8 mx-2">
                <img className="object-cover border border-gray-900 w-full rounded-lg h-96 md:h-auto md:w-48 m-3" src="/placeholder.png" alt=""/>
                    <div className="flex flex-col items-start mx-4">
                        <h5 className="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">Egypt</h5>
                        <h5 className="mb-2 text-[25px] font-bold tracking-tight text-gray-700 dark:text-white">Magdy Ahmed El Zanaty</h5>
                        <div className="flex justify-between items-center">
                            <img src="/whatsapp.png" className='h-[50px] w-[50px] rounded-md'/>
                            <hl className='font-Kanit text-[25px] ml-2'>+20100633105</hl>
                        </div>
                    </div>
                    
            </div>


        </div>
    </li>
    {/* <li></li>
    <li>Egypt</li>
    <li>Turkey</li>
    <li>Sri Lanka</li>
    <li>Pakistan</li> */}
</ul>

     </div>
     
     </div>
    )}
export default Reps