import inforek from '../assets/img/inforek2.png'
import tabungan from '../assets/img/tabungan.png'
import transfer from '../assets/img/transfer.png'
import setorTunai from '../assets/img/setor-tunai.png'
import { useEffect, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Feature = () => {
    useEffect(() => {
      Aos.init({
        duration: 1200
      })
    }, [])
    
  return (
       <div className="my-40 md:my-60">
          <h1 data-aos='fade-right' className="text-[23px] lg:text-[36px] ml-4 md:ml-10 font-bold border-l-4 border-none">
            Fitur - fitur Bank PIT
          </h1>
          <div className="box flex justify-center max-w-fit gap-x-4 hover:gap-x-[2px] my-10 mx-auto">
          <section data-aos='fade-down'  className='feature-wrap flex justify-center relative hover:after:relative after:bg-black after:absolute after:w-full after:h-full after:left-0 after:right-0 after:inset-1 after:opacity-60 overflow-hidden'>
            <img src={inforek} className="item h-[80vh] w-[60px] md:w-[100px] hover:w-[300px] md:hover:w-full ease-in-out duration-250 flex items-center justify-center object-cover transition-all" />
            <h2 className="text-feature text-[30px] md:text-[34px] absolute text-white bottom-[15%] z-10">INFO REK</h2>
          </section>
          <section data-aos='fade-down'  className='feature-wrap flex justify-center relative hover:after:relative after:bg-black after:absolute after:w-full after:h-full after:left-0 after:right-0 after:inset-1 after:opacity-60 overflow-hidden'>
            <img src={tabungan} className="item h-[80vh] w-[60px] md:w-[100px] hover:w-[300px] md:hover:w-full ease-in-out duration-250 flex items-center justify-center object-cover transition-all" />
            <h2 className="text-feature text-[30px] md:text-[34px] absolute text-white bottom-[15%] z-10">TABUNGAN</h2>
          </section>
          <section data-aos='fade-up'  className='feature-wrap flex justify-center relative hover:after:relative after:bg-black after:absolute after:w-full after:h-full after:left-0 after:right-0 after:inset-1 after:opacity-60 overflow-hidden'>
            <img src={transfer} className="item h-[80vh] w-[60px] md:w-[100px] hover:w-[300px] md:hover:w-full ease-in-out duration-250 flex items-center justify-center object-cover transition-all" />
            <h2 className="text-feature text-[30px] md:text-[34px] absolute text-white bottom-[15%] z-10">TRANSFER</h2>
          </section>
          <section data-aos='fade-up'  className='feature-wrap flex justify-center relative hover:after:relative after:bg-black after:absolute after:w-full after:h-full after:left-0 after:right-0 after:inset-1 after:opacity-60 overflow-hidden'>
            <img src={setorTunai} className="item h-[80vh] w-[60px] md:w-[100px] hover:w-[300px] md:hover:w-full ease-in-out duration-250 flex items-center justify-center object-cover transition-all" />
            <h2 className="text-feature text-[30px] md:text-[34px] absolute text-white bottom-[5%] z-10">SETOR TUNAI</h2>
          </section>
        </div>
      </div>
  )
}

export default Feature