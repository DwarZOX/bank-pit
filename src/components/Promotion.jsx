import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Promotion = ({promotion}) => {
  useEffect(() => {
    AOS.init({duration:1200})
  }, [])
  
  return (
    <div ref={promotion} className="my-20 relative -z-10">
        <h1 data-aos='fade-down' className="text-[23px] lg:text-[36px] font-bold text-center my-5">Promosi</h1>
        <div className="md:flex">
          <div data-aos='fade-right' className="container mx-auto h-60 flex justify-center items-center shadow-inner rounded-md bg-slate-100 w-[80%] md:w-1/3 mb-10">
              <h1 className="text-[23px] font-bold italic animate-pulse duration-500 transition-all rounded-md bg-slate-500 p-3 text-white">SEGERA HADIR</h1>
          </div>
          <div data-aos='fade-right' className="container mx-auto h-60 flex justify-center items-center shadow-inner rounded-md bg-slate-100 w-[80%] md:w-1/2">
              <h1 className="text-[23px] animate-pulse font-bold italic duration-500 transition-all rounded-md bg-slate-500 p-3 text-white">SEGERA HADIR</h1>
          </div>
        </div>
    </div>
  )
}

export default Promotion