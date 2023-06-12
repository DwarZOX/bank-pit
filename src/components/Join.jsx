import Cards from './Cards'
import woman from '../assets/img/womanrb1.png'
import man from '../assets/img/manrb.png'
import BtnCustom from './BtnCustom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Join = ({join}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    })
  }, [])
  
  return (
    <>
          <div>
          <svg ref={join} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff500" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,170.7C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div className='bg-[#FFF500] flex flex-col items-center jusfity-center text-center md:text-start'> 
              <h1 data-aos='slide-up' className='text-[20px] md:text-[35px] md:-mt-20 md:z-10 font-bold'>Gabung Jadi Nasabah 
                <span className='inline-block sm:inline'> Sekarang Juga!</span>
              </h1>
              <p data-aos='slide-down' className='text-[14px] md:text-[24px] my-3 md:my-10'>Buka Rekening lebih cepat dan praktis. <br />
              Prosesnya bisa dilakukan secara digital lewat aplikasi.</p>
            <div data-aos='zoom-in-up' className='flex justify-center flex-wrap md:gap-14 lg:flex-row gap-8 overflow-hidden p-5'>
              <Cards isNo={true} no={"before:content-['1']"} className={" skew-y-3 hover:skew-y-0"} text={'Download aplikasi Bank PIT dan kemudian instal.'} img={woman}/>
              <Cards isNo={true} no={"before:content-['2']"} className={" -skew-y-3 md:skew-x-3 hover:skew-y-0 md:hover:skew-x-0"} text={'Isikan data identitas Anda!'} img={man}/>
              <Cards isNo={true} no={"before:content-['3']"} className={" -skew-y-3 hover:skew-y-0"} text={'Buat akun Rekening Anda!'} img={woman}/>
              <Cards isNo={true} no={"before:content-['4']"} className={" skew-y-3 md:-skew-x-3 hover:skew-y-0 md:hover:skew-x-0"} text={'Lakukan verifikasi Email!'} img={man}/>
            </div>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff500" fillOpacity="1" d="M0,320L34.3,288C68.6,256,137,192,206,170.7C274.3,149,343,171,411,176C480,181,549,171,617,165.3C685.7,160,754,160,823,176C891.4,192,960,224,1029,245.3C1097.1,267,1166,277,1234,256C1302.9,235,1371,181,1406,154.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
              </svg> 
            </div>
            <div className='container flex justify-center mx-auto my-10 mb-40 md:mb-0'>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center border-none md:border-2 md:rounded-xl bg-yellow-200 min-w-[230px]'>
                  <div data-aos='fade-down' className='flex flex-col items-center md:items-start gap-y-20 ml-3 mr-10'>
                    <h1 className='font-bold text-[32px] text-center'>Download aplikasi Bank PIT sekarang</h1>
                    <BtnCustom className={`py-2 px-3 border-[1.5px] box-border border-b-4 border-slate-600 rounded-lg active:border-b-[1.5px] bg-[#FCF740] font-bold w-1/2 `} value={'DOWNLOAD'}/>
                  </div>
                  <div data-aos='zoom-in-up' className='flex items-center justify-center overflow-hidden'>
                    <img data-aos='fade-left' src={woman} alt="/" className=' object-cover w-1/2 md:w-[90%] drop-shadow-[8px_8px_4px_rgba(0,0,0,0.60)]'/>
                  </div>
                </div>
            </div>
      </>
  )
}

export default Join