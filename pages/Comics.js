import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='overflow-x-hidden'>
            <Navbar/>
            <div  className='flex flex-col items-center md:mx-16 mx-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl md:text-[60px] text-blue-400  mt-[100px] mb-4'>Comics</h1>
                
                <img src='comicCover.png' className='w-[800px] h-[800px] mt-8 filter blur-md absolute'/>
                <div className='flex flex-col items-center justify-center relative top-10'>
                    <h1 className='font-Kanit text-[48px] text-center py-2 px-4 text-white font-medium tracking-wider border boder-white rounded-md'>Comming Soon!</h1>
                </div>
            </div>
        </div>
    )
}

// give me a sec