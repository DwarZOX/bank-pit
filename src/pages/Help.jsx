import { Link } from "react-router-dom"
import { Footer, Navbar } from "../components"

const Help = () => {
  return (
    <>
      <div className=" absolute right-0 left-0 top-0">
        <Navbar/>
      </div>
      <div className="flex mt-10">
        <svg id="wave" className="rotate-[180deg]" viewBox="0 0 1440 280" version="1.1" xmlns="http://www.w3.org/2000/svg"><h1>Pusat Bantuan</h1><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(80.752, 95.981, 3.641, 1)" offset="0%"></stop><stop stopColor="rgba(255, 245, 0, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-0)" d="M0,28L21.8,51.3C43.6,75,87,121,131,144.7C174.5,168,218,168,262,168C305.5,168,349,168,393,172.7C436.4,177,480,187,524,163.3C567.3,140,611,84,655,88.7C698.2,93,742,159,785,158.7C829.1,159,873,93,916,56C960,19,1004,9,1047,4.7C1090.9,0,1135,0,1178,28C1221.8,56,1265,112,1309,135.3C1352.7,159,1396,149,1440,149.3C1483.6,149,1527,159,1571,154C1614.5,149,1658,131,1702,121.3C1745.5,112,1789,112,1833,130.7C1876.4,149,1920,187,1964,172.7C2007.3,159,2051,93,2095,93.3C2138.2,93,2182,159,2225,168C2269.1,177,2313,131,2356,107.3C2400,84,2444,84,2487,79.3C2530.9,75,2575,65,2618,88.7C2661.8,112,2705,168,2749,196C2792.7,224,2836,224,2880,214.7C2923.6,205,2967,187,3011,163.3C3054.5,140,3098,112,3120,98L3141.8,84L3141.8,280L3120,280C3098.2,280,3055,280,3011,280C2967.3,280,2924,280,2880,280C2836.4,280,2793,280,2749,280C2705.5,280,2662,280,2618,280C2574.5,280,2531,280,2487,280C2443.6,280,2400,280,2356,280C2312.7,280,2269,280,2225,280C2181.8,280,2138,280,2095,280C2050.9,280,2007,280,1964,280C1920,280,1876,280,1833,280C1789.1,280,1745,280,1702,280C1658.2,280,1615,280,1571,280C1527.3,280,1484,280,1440,280C1396.4,280,1353,280,1309,280C1265.5,280,1222,280,1178,280C1134.5,280,1091,280,1047,280C1003.6,280,960,280,916,280C872.7,280,829,280,785,280C741.8,280,698,280,655,280C610.9,280,567,280,524,280C480,280,436,280,393,280C349.1,280,305,280,262,280C218.2,280,175,280,131,280C87.3,280,44,280,22,280L0,280Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(255, 245, 0, 1)" offset="0%"></stop><stop stopColor="rgba(238.862, 255, 0, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(#sw-gradient-1)" d="M0,140L21.8,140C43.6,140,87,140,131,135.3C174.5,131,218,121,262,98C305.5,75,349,37,393,42C436.4,47,480,93,524,93.3C567.3,93,611,47,655,32.7C698.2,19,742,37,785,56C829.1,75,873,93,916,121.3C960,149,1004,187,1047,177.3C1090.9,168,1135,112,1178,84C1221.8,56,1265,56,1309,46.7C1352.7,37,1396,19,1440,51.3C1483.6,84,1527,168,1571,205.3C1614.5,243,1658,233,1702,191.3C1745.5,149,1789,75,1833,74.7C1876.4,75,1920,149,1964,191.3C2007.3,233,2051,243,2095,228.7C2138.2,215,2182,177,2225,144.7C2269.1,112,2313,84,2356,70C2400,56,2444,56,2487,88.7C2530.9,121,2575,187,2618,186.7C2661.8,187,2705,121,2749,121.3C2792.7,121,2836,187,2880,214.7C2923.6,243,2967,233,3011,210C3054.5,187,3098,149,3120,130.7L3141.8,112L3141.8,280L3120,280C3098.2,280,3055,280,3011,280C2967.3,280,2924,280,2880,280C2836.4,280,2793,280,2749,280C2705.5,280,2662,280,2618,280C2574.5,280,2531,280,2487,280C2443.6,280,2400,280,2356,280C2312.7,280,2269,280,2225,280C2181.8,280,2138,280,2095,280C2050.9,280,2007,280,1964,280C1920,280,1876,280,1833,280C1789.1,280,1745,280,1702,280C1658.2,280,1615,280,1571,280C1527.3,280,1484,280,1440,280C1396.4,280,1353,280,1309,280C1265.5,280,1222,280,1178,280C1134.5,280,1091,280,1047,280C1003.6,280,960,280,916,280C872.7,280,829,280,785,280C741.8,280,698,280,655,280C610.9,280,567,280,524,280C480,280,436,280,393,280C349.1,280,305,280,262,280C218.2,280,175,280,131,280C87.3,280,44,280,22,280L0,280Z"></path>
        </svg>
        <h1 className="absolute top-[55px] md:top-[100px] left-4 md:left-10 text-[20px] md:text-[30px] font-bold">Pusat Bantuan</h1>
      </div>
      <div>
        <h1 className="font-bold text-[17px] md:text-[27px] ml-9">Gagal Masuk Akun </h1>
        <div className="bg-yellow-300 border-t-[3px] max-w-max p-6 pr-20 mx-4 md:mx-auto md:border-l-8 border-t-slate-800 md:border-t-0 md:border-l-slate-800 md:rounded-tr-full md:rounded-br-[900px] leading-5 md:leading-9">
          <ul className="list-disc text-[14px] md:text-[17px]">
            <li className="md:mt-10 mb-4">Pastikan nama pengguna/username sesuai saat pendaftaran akun rekening Anda</li>
            <li className="mb-4">Periksa pengisian huruf pada nama pengguna/username dengan huruf kecil semua</li>
            <li className="mb-4">Pastikan kata sandi/password sesuai saat pendaftaran akun rekening Anda</li>
            <li className="mb-4">Pastikan koneksi internet saat Anda akan Masuk/Login dengan keadaan baik dan cepat</li>
            <li className="mb-4">Lupa Kata Sandi/Password untuk Masuk ke Akun Rekening Anda</li>
          </ul>
        </div>
      </div>

      <h1 className="mt-20 font-bold text-[17px] md:text-[27px] text-center md:ml-9 md:text-start">Lupa Kata Sandi / Password Akun Rekening Bank Anda ?</h1>

      <div className="my-5 border-2 hover:animate-pulse hover:border-r-4 hover:md:border-r-slate-800 max-w-max container mx-auto px-10">

        <span className="mx-10">
          <p className="text-[14px] md:text-[19px]">Anda bisa mengatur ulang kata sandi/password <Link to={'/help/passforgot'} className="text-[15px] md:text-[27px] md:hover:text-red-700 font-bold underline">di sini</Link></p>
        </span>
      </div>
      
      <Footer/>
    </>
  )
}

export default Help