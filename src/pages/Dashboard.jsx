import { useEffect, useState } from 'react'
import LogoPIT from '../assets/img/logopit1.png'
import { MdSupervisedUserCircle,MdSearch } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../components'
import instance from '../api/api'
import { data } from 'autoprefixer'
import { useStateContext } from '../context/StateContext'
import Swal from 'sweetalert2'
const Dashboard = () => {
    const [active, setActive] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [elem, setElem] = useState('')
    const [search, setSearch] = useState('')
    const [dataInfo, setDataInfo] = useState('')
    const [dataHistory, setDataHistory] = useState('')
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    const {role,setRole,displayName,setDisplayName,setLoggedIn} = useStateContext()
    const toggleShow = () => isShow ? 'translate-x-0' : 'translate-x-[-220px]'

    useEffect(() => {
        const checkIsAdmin = () => {
            const userToken = localStorage.getItem("token")
            const role = localStorage.getItem("role")
            const fullName = localStorage.getItem("full_name")
            if(userToken && (userToken !== null) && role === 'admin') {
              setLoggedIn(true)
              setRole(role)
              setDisplayName(fullName)
            } else {
                return navigate('/')
            }
          }
          checkIsAdmin()

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/datauser',
            headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}` },
              data : data
            };
          
          instance.request(config)
          .then((response) => {
            setCount(response.data.data.length)
          })
          .catch((error) => {
            console.log(error);
          });
    }, [])
    

    const handleSearch = (e) => {
        e.preventDefault()  
        let data = new FormData();
data.append('search', search);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/search',
  headers: { 
    Authorization: `Bearer ${localStorage.getItem("token")}` },
  data : data
};

instance.request(config)
.then((response) => {
  setDataInfo(response.data.username)
  setDataHistory(response.data.no_ref)
})
.catch((error) => {
  console.log(error);
});
    }
    
    const elemWillDisplay = () => {
        if(elem === 'nasabah') {
                        return <>
            <div className='flex flex-col md:flex-row md:justify-evenly md'>
                        <h1 className='font-bold text-[19px] md:text-[25px] mt-0 md:mt-4'>History Transaksi Nasabah </h1>
                        <div className='flex bg-slate-100 h-10 rounded-xl mx-10 md:mx-5 border-2 md:my-5'><Input className={'bg-transparent border-none w-[200px] md:w-[500px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'} placeholder={'Cari dengan no_ref'} type={'number'} value={search} eventOnChange={setSearch} classNameWrap={'border-none'}/><button  onClick={handleSearch}><MdSearch className='text-[35px] text-slate-500'/></button></div>
                    </div>

                    {dataHistory ? (<div className='border-2 border-yellow-400 mx-3 md:mx-40 mt-10 md:mt-20 max-h-[76vh] md:max-h-[70vh] rounded-lg overflow-y-auto'>
                    <div className="px-6 py-4 text-center">
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">No_Reff</h1>
            <p className="font-bold capitalize">{dataHistory.no_ref}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">ID Pengguna</h1>
            <p className="font-bold capitalize">{dataHistory.id_user}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Pengguna</h1>
            <p className="font-bold capitalize">{dataHistory.username}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Jumlah</h1>
            <p className="font-bold capitalize">{dataHistory.uang}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Transaksi</h1>
            <p className="font-bold capitalize">{dataHistory.transaksi}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Waktu</h1>
            <p className="font-bold">{dataHistory.waktu}</p>
          </div>
                    </div>
                    </div>) : (<h1 className='text-[19px] font-bold mt-[50%] md:mt-[25%] italic bg-slate-500 w-fit py-2 px-3 rounded-3xl mx-auto text-white'>Data tidak ada</h1>)}
                    
        </>
            
        } else if(elem === 'cari'){
           return <>
                <div className='flex flex-col md:flex-row md:justify-evenly md'>
                            <h1 className='font-bold text-[19px] md:text-[25px] mt-0 md:mt-4'>Infomasi Nasabah </h1>
                            <div className='flex bg-slate-100 h-10 rounded-xl mx-10 md:mx-5 border-2 md:my-5'><Input className={'bg-transparent border-none w-[200px] md:w-[500px]'} placeholder={'Cari dengan nama pengguna'} value={search} eventOnChange={setSearch} classNameWrap={'border-none'}/><button onClick={handleSearch}><MdSearch className='text-[35px] text-slate-500'/></button></div>
                        </div>

                        {dataInfo ? <div className='border-2 border-yellow-400 mx-3 md:mx-40 mt-10 md:mt-20 max-h-[76vh] md:max-h-[70vh] rounded-lg overflow-y-auto'>
                        <div className="px-6 py-4 text-center">
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Depan</h1>
            <p className="font-bold capitalize">{dataInfo.nama_depan}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Belakang</h1>
            <p className="font-bold capitalize">{dataInfo.nama_belakang}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Jenis Kelamin</h1>
            <p className="font-bold capitalize">{dataInfo.jenis_kelamin}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nomor Seluler</h1>
            <p className="font-bold capitalize">{dataInfo.no_hp}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Email</h1>
            <p className="font-bold">{dataInfo.email}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Pengguna</h1>
            <p className="font-bold">{dataInfo.username}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nomor Rekening</h1>
            <p className="font-bold">{dataInfo.no_unique}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Tempat, Tanggal Lahir</h1>
            <p className="font-bold capitalize">{dataInfo.tempat + ', ' + dataInfo.tanggal + ' ' + dataInfo.bulan + ' ' + dataInfo.tahun}</p>
          </div>
          <div className="mb-4 md:flex md:justify-between md:gap-x-10">
            <h1 className="text-gray-600 font-semibold italic">Alamat Lengkap</h1>
            <p className="font-bold capitalize">{dataInfo.alamat_lengkap}</p>
          </div>
        </div>
                    </div> : <h1 className='text-[19px] font-bold mt-[50%] md:mt-[25%] italic bg-slate-500 w-fit py-2 px-3 rounded-3xl mx-auto text-white'>Data tidak ada</h1>}
            </>
        } else {
            return <>
            <div className='top-[100px] bg-yellow-900 inline rounded-xl p-5 text-white mx-10 md:mx-60 absolute left-0 right-0'>
                <h1 className='text-[20px] font-bold'>Jumlah Nasabah Bank PIT</h1>
                <p className='text-[30px] font-bold'>{count}</p>
            </div>
            </>
        }
    }

    const handleLoggout = () => {
        Swal.fire({
          text: 'Apakah Anda Yakin Keluar ?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#000',
          cancelButtonColor: '#D4D4D4',
          confirmButtonText: 'Ya!',
          cancelButtonText: 'Batal!',
          focusCancel: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: '/logoutadmin',
              headers: { 
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            };
            
            instance
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data.message));
              localStorage.clear()
              setLoggedIn(false)
              navigate('/')
              Swal.fire(
              'Keluar!',
              'Anda Berhasil Keluar.',
              'success'
            )
            })
            .catch((error) => {
              console.log(error);
            });
          }
        })
     } //end func handleLoggout

  return (
    <>
    <div className='relative'>
        <aside className={`sidebar ${toggleShow()} h-screen transition-all ease-in-out duration-500 md:translate-x-0 fixed top-0 left-0 flex flex-col w-[219px] bg-yellow-500 z-50 shadow-[3px_1px_15px_rgba(0,0,0,0.7)]`}>
            <nav className={`sidebar-nav flex-auto before:content-arrowLeft before:bg-yellow-300 before:rounded-r-full before:w-10 before:h-10 before:absolute before:-right-10 before:inline-block before:text-center md:before:hidden ${isShow && 'before:hidden'}`} onClick={()=>setIsShow(true)}>
                <header className="sidebar-header flex justify-around items-center h-[72px] bg-[#fff500] fixed w-full shadow-[-5px_3px_10px_rgba(0,0,0,0.7)]">
                    <img src={LogoPIT} alt="/" className="h-[55px]"/>
                    <span className="font-bold">Dashboard</span>
                </header>
                    <div className='my-40 py-10 flex flex-col items-center justify-center rounded-3xl gap-5 bg-yellow-300'>
                    <button onClick={()=>setElem('nasabah')} className=" h-[50px] w-[100%] text-[16px] rounded-md text-center bg-orange-400 font-bold hover:bg-orange-600">
                        History Nasabah
                     </button>
                    <button onClick={()=>setElem('cari')} className=" h-[50px] w-[100%] text-[16px] rounded-md text-center bg-orange-400 font-bold hover:bg-orange-600">
                        Info Nasabah
                     </button>
                    </div>
                    <div className="bottom-0 absolute w-full bg-[#FCF785] px-2 py-3 md:px-5 md:py-6 rounded-t-3xl shadow-inner">
                        <div className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 flex justify-around gap-x-5 items-center hover:bg-[#FCF745]">
                            <MdSupervisedUserCircle className='text-[28px] md:text-[40px]'/>
                            <p className="hover:bg-[#FCF745] text-[15px] md:py-[8px] capitalize"> Admin {displayName}</p>
                        </div>
                          <Link className="text-md md:text-md flex justify-center items-center gap-x-2 py-2 hover:bg-[#FCF745] border-b-[1.9px] border-slate-700" to={'/'}>
                            Back Home</Link>
                          <Link className="text-md md:text-md flex justify-center items-center gap-x-2 py-2 hover:bg-[#FCF745]" onClick={handleLoggout}>
                            KELUAR <FiLogOut/></Link>
                    </div>
            </nav>
        </aside>
        {isShow && <div className={`md:hidden bg-black h-screen opacity-50 z-50`} onClick={()=>setIsShow(false)}
            style={{ pointerEvents: 'auto' }}></div>}
                    <div className='content border-2 text-center absolute -z-10 md:z-0 top-0 left-0 right-0 bottom-0 w-auto md:border-0 md:relative md:ml-[220px]'>
                        {elemWillDisplay()}
                    </div>
        </div>
    </> 
  )
}

export default Dashboard