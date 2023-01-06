import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:mx-16 mx-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl md:text-[60px] text-blue-400  mt-[100px] mb-4'>Comics</h1>

            <div className='w-full h-auto md:my-6 my-2 md:px-16 px-4 flex flex-col items-center justify-start'>
                <img src='/comicCover.png' className='w-full h-full filter blur-sm object-cover absolute'/>
                <div className='flex flex-col items-center justify-center relative top-10'>
                <h1 className='text-white font-Kanit text-[48px] text-centertop-10 px-4 py-2 border border-white rounded-md'> Coming Soon!</h1>
                </div>
            </div>
            </div>
        </div>
    )
}