import React, { useState } from 'react'
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import mclogo from '../assets/img/mastercardlogo.png'
import ibslogo from '../assets/img/ibsyariahlogo.png'

const Contact = ({show}) => {
  const [showKantor, setShowKantor] = useState(false)
  const [showKontak, setShowKontak] = useState(false)
  return (
    <div className={`relative ${show ? 'z-0' : 'z-10'}`}>
      
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#ffffff"></stop><stop offset="95%" stopColor="#ffffff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,150 0,150 C 90.1307692307692,150.2051282051282 180.2615384615384,150.4102564102564 274,146 C 367.7384615384616,141.5897435897436 465.0846153846154,132.56410256410254 524,132 C 582.9153846153846,131.43589743589746 603.3999999999999,139.33333333333334 683,131 C 762.6000000000001,122.66666666666666 901.3153846153848,98.1025641025641 1001,112 C 1100.6846153846152,125.8974358974359 1161.3384615384614,178.25641025641025 1228,191 C 1294.6615384615386,203.74358974358975 1367.3307692307694,176.87179487179486 1440,150 C 1440,150 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#ffffff"></stop><stop offset="95%" stopColor="#ffffff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 64.15641025641025,287.2128205128205 128.3128205128205,274.425641025641 209,293 C 289.6871794871795,311.574358974359 386.9051282051282,361.51025641025643 477,345 C 567.0948717948718,328.48974358974357 650.0666666666665,245.5333333333334 740,245 C 829.9333333333335,244.4666666666666 926.8282051282054,326.3564102564102 994,353 C 1061.1717948717946,379.6435897435898 1098.6205128205129,351.04102564102567 1168,333 C 1237.3794871794871,314.95897435897433 1338.6897435897436,307.47948717948714 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
            <defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#ffffff"></stop><stop offset="95%" stopColor="#ffffff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,450 0,450 C 103.5,464.4948717948718 207,478.9897435897436 278,479 C 349,479.0102564102564 387.5,464.53589743589737 450,456 C 512.5,447.46410256410263 599,444.8666666666667 697,450 C 795,455.1333333333333 904.5,467.99743589743593 998,470 C 1091.5,472.00256410256407 1169,463.14358974358976 1240,458 C 1311,452.85641025641024 1375.5,451.42820512820515 1440,450 C 1440,450 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
            </svg>

          <div className=' bg-transparent absolute bottom-10 flex flex-col md:flex-row md:justify-around'>
            <button className='w-1/1 md:w-1/4 md:cursor-default' onFocus={()=>setShowKantor(!showKantor)} onBlur={()=>setShowKantor(!showKantor)}>
              <h1 className='border-2 md:my-10 md:border-none border-yellow-500 md:bg-inherit bg-yellow-400'><span className='font-bold'> Bank </span><span className='font-bold text-[red]'>PIT</span> Kantor Pusat</h1>
              <p className={`${showKantor?'h-[100px]':'h-0 opacity-0'} md:opacity-100 transition-all duration-500 md:inline-block rounded-br-full rounded-bl-full bg-slate-300 md:bg-inherit cursor-text`}>
              Desa Tirtohargo, dsn Kalangan, Rt/Rw 01/00, Gegunung, Tirtohargo, Kretek, Bantul Regency, Special Region of Yogyakarta 55772
              </p>
            </button>
            <button className='flex w-1/1 md:w-1/2 flex-col md:flex-row md:justify-around md:mt-0 md:cursor-default' onFocus={()=>setShowKontak(!showKontak)}  onBlur={()=>setShowKontak(!showKontak)}>
            <div className='w-[100%]'>
              <h1 className='md:my-10 font-bold border-2 md:border-none border-yellow-500 md:bg-inherit bg-yellow-400'>Hubungi Kami</h1>
              <p className={`${showKontak?'h-[100px]':'h-0 opacity-0'} md:opacity-100 transition-all duration-500 md:inline-block w-[100%] rounded-br-full rounded-bl-full bg-slate-300 md:bg-inherit cursor-text`}>
              Telp.333-000 | +6289876928138
              <span className='flex flex-col gap-y-2 mt-0'>
              <Link to={'https://instagram.com/edwardsprtmn/'}className='hover:text-white md:mt-5'><MdEmail className=' text-[22px] cursor-pointer hover:text-white inline-block'/> support@bankpit.com
              </Link>
              <Link to={'https://instagram.com/edwardsprtmn/'} target='_blank'  className='hover:text-white'><AiFillInstagram className=' text-[26px] cursor-pointer hover:text-white -ml-0.5 inline-block'/> bankpit.id
              </Link> 
              </span>
              </p>
            </div>
            <div className='w-1/2 self-center mt-5'>
              <div className='flex justify-center items-center md:my-20 cursor-auto'>
                <Link to={'https://www.mastercard.co.id/id-id.html'} target='_blank' className='flex justify-evenly cursor-default'><img src={mclogo} alt="mastercard logo" className='w-[60%] md:w-1/3 cursor-pointer' /></Link>
                <img src={ibslogo} alt="ib syariah logo" className='w-[21%] md:w-[33px]'/>
              </div>
            </div>
          </button>
          </div>
    </div>
  )
}

export default Contact