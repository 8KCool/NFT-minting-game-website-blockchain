import Navbar from '../components/NavAbout'
export default function Comics(){
    return(
        <div className='flex flex-col items-center md:px-16 px-4'>
            <Navbar/>
            <div className='mt-[100px]'>
            <h1 className='font-Kanit text-2xl md:text-3xl uppercase text-blue-400'>Comics</h1>
            </div>
        </div>
    )
}