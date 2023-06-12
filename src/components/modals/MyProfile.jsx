import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";
import instance from "../../api/api";
import { useEffect } from "react";
import { useState } from "react";

const MyProfile = ({ setShow }) => {
  const [data, setData] = useState('')
  
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/profil',
      headers: { 
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    
    instance.request(config)
    .then((response) => {
      setData(response.data.profil)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  

  return (
    <div className={`w-full bg-black bg-opacity-50 fixed z-30`}>
        <div className='rounded-md md:rounded-2xl w-[295px] md:w-[695px] h-[400px] bg-white m-auto top-0 left-0 right-0 bottom-0 absolute overflow-auto scroll-smooth scrollbar-hide'>
                <span className='absolute right-1 top-1'><Link onClick={()=>handleClose()}><SlClose className='text-[20px] md:text-[25px] lg:text-[28px]'/></Link></span>
                <h1 className="text-center font-bold my-3">Infomasi Pribadi</h1>
            <div className="flex flex-col justify-center items-center md:inline md:w-1/2">
            <div className="px-6 py-4 text-center">
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Depan</h1>
            <p className="font-bold capitalize">{data.nama_depan}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Belakang</h1>
            <p className="font-bold capitalize">{data.nama_belakang}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Jenis Kelamin</h1>
            <p className="font-bold capitalize">{data.jenis_kelamin}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nomor Seluler</h1>
            <p className="font-bold capitalize">{data.no_hp}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Email</h1>
            <p className="font-bold">{data.email}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nama Pengguna</h1>
            <p className="font-bold">{data.username}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Nomor Rekening</h1>
            <p className="font-bold">{data.no_unique}</p>
          </div>
          <div className="mb-4 md:flex justify-between">
            <h1 className="text-gray-600 font-semibold italic">Tempat, Tanggal Lahir</h1>
            <p className="font-bold capitalize">{data.tempat + ', ' + data.tanggal + ' ' + data.bulan + ' ' + data.tahun}</p>
          </div>
          <div className="mb-4 md:flex md:justify-between md:gap-x-10">
            <h1 className="text-gray-600 font-semibold italic">Alamat Lengkap</h1>
            <p className="font-bold capitalize">{data.alamat_lengkap}</p>
          </div>
        </div>
        </div></div>
        <div className='h-screen' onClick={handleClose}></div>
    </div>
  );
};

export default MyProfile;
