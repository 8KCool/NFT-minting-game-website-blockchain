import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div>
            <Navbar/>
            <div  className='flex flex-col items-center md:px-16 px-4 overflow-hidden'>
            <h1 className='font-Kanit text-2xl md:text-3xl uppercase text-blue-400  mt-[100px]'>Comics</h1>
            </div>
        </div>
    )
}