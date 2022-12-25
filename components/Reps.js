import React from 'react'

function Reps () {
    return (
    <div className='flex flex-col items-center mx-16'>
     <h1 className="font-Kanit md:text-[64px] text-[40px] text-center text-white mt-[100px]"> Our representatives</h1>

{/*content*/}


<ul className="text-blue-400 font-Kanit text-50px max-h-screen justify-evenly flex flex-col md:mx-16">
    <li>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            
            <div class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">UAE</h5>
                        <h5 class="mb-2 text-[30px] font-bold tracking-tight text-gray-700 dark:text-white">Name here</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.svg" classname='h-[60px] w-[60px]'/>
                            <hl className='font-Kanit text-[30px]'>number here</hl>
                        </div>
                    </div>
            </div>

            <div class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg m-3" src="/placeholder.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-[40px] font-bold tracking-tight text-gray-900 dark:text-white">UAE</h5>
                        <h5 class="mb-2 text-[30px] font-bold tracking-tight text-gray-700 dark:text-white">Name here</h5>
                        <div className="flex justify-between">
                            <img src="/whatsapp.svg" classname='h-[60px] w-[60px]'/>
                            <hl className='font-Kanit text-[30px]'>number here</hl>
                        </div>
                    </div>
            </div>


        </div>
    </li>
    {/* <li>Morocco</li>
    <li>Egypt</li>
    <li>Turkey</li>
    <li>Sri Lanka</li>
    <li>Pakistan</li> */}
</ul>
     </div>
    )}
export default Reps