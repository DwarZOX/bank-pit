import Cards from './Cards'
import man1 from '../assets/img/manrb.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1200})
  }, [])
  
  return (
  <>
    <div className="about-us mt-10 flex flex-col justify-center items-center overflow-hidden">
        
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="150%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#fff500"></stop><stop offset="95%" stopColor="#fdd500"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 92.89952153110048,168.71770334928232 185.79904306220095,137.4354066985646 270,164 C 354.20095693779905,190.5645933014354 429.7033492822967,274.9760765550239 523,274 C 616.2966507177033,273.0239234449761 727.3875598086125,186.66028708133973 839,161 C 950.6124401913875,135.33971291866027 1062.7464114832537,170.3827751196172 1163,187 C 1263.2535885167463,203.6172248803828 1351.6267942583731,201.80861244019138 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0 w-full" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#fff500"></stop><stop offset="95%" stopColor="#fdd500"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 93.00478468899522,357.7894736842105 186.00956937799043,315.5789473684211 287,325 C 387.99043062200957,334.4210526315789 496.96650717703346,395.4736842105263 593,397 C 689.0334928229665,398.5263157894737 772.1244019138757,340.52631578947364 860,343 C 947.8755980861243,345.47368421052636 1040.5358851674641,408.42105263157896 1138,428 C 1235.4641148325359,447.57894736842104 1337.732057416268,423.7894736842105 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>

        <div className="-mt-20 md:-mt-40 flex flex-col items-center gap-y-10 my-5">
          <h1 data-aos="fade-down" className="text-[23px] md:text-[33px] lg:text-[40px] font-bold">Apa Itu Bank PIT ?</h1>
          <p data-aos="fade-down-right" className="text-center mx-2 text-[14px] sm:text-[20px] sm:mx-10 md:text-[21px] md:mx-20 lg:mx-40 md:mt-20">Bank PIT adalah sebuah aplikasi perbankan yang dapat melakukan berbagai transaksi finansial dan tentunya dilakukan dengan konsep transaksi yang syariah.</p>
        </div>
    </div>
        
    <div className="w-full h-full overflow-x-scroll scroll text-center scroll-smooth scrollbar-hide px-5">
      <div data-aos="flip-down" className="flex flex-nowrap md:justify-center md:items-center p-5">
        <div className="flex-shrink-0">
          <div data-aos="zoom-in-right" className="max-w-xs">
            <Cards isNo={false} text={'Menerapkan konsep nilai-nilai islami.'} img={man1} className={'-z-10 inline-block'} />
          </div>
        </div>
        <div className="flex-shrink-0 mx-5 md:mx-10">
          <div data-aos="zoom-in" className="max-w-xs">
            <Cards isNo={false} text={'Mudahnya dalam bertransaksi finansial.'} img={man1} className={'-z-10 inline-block'} />
          </div>
        </div>
        <div className="flex-shrink-0 pr-5 md:pr-0">
          <div data-aos="zoom-in-left" className="max-w-xs">
            <Cards isNo={false} text={'Penggunaan Aplikasi yang sangat mudah.'} img={man1} className={'-z-10 inline-block'} />
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default About

