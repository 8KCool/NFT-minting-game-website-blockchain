import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-y-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:mx-16 mx-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl text-[60px] text-blue-400 mt-[100px] mb-4'>Comics</h1>
                
            <div className='flex flex-col items-center justify-center mt-8'>
                    <h1 className='font-Kanit lg:text-[48px] text-[36px] text-center py-2 px-4 text-white font-medium tracking-wider border boder-white rounded-md'>Coming Soon!</h1>
            </div>   
            <img src='comicCover.png' className='md:w-[800px] md:h-[800px] lg:w-[800px] lg:h-[800px] w-[400px] h-[400px] md:my-8 my-4 filter blur-sm rounded-md border border-gray-300'/>
          
            </div>
        </div>
    )
}

