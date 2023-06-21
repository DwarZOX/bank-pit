import { useEffect, useState } from "react"
import { SlClose } from "react-icons/sl"
import { Link } from "react-router-dom"
import instance from "../../api/api"

const MyAccount = ({setShow}) => {
  const [saldoUtama, setSaldoUtama] = useState('')
  const [saldoTabungan, setSaldoTabungan] = useState('')
  const [data, setData] = useState([])

  const [mutations, setMutations] = useState([]) 
  const [element, setElement] = useState('')

  useEffect(() => {
    if ( data.length > 10 ) {
      setMutations(data.slice(data.length -10 ,data.length))
    } else {
      setMutations(data)
    }
  }, [data])

  const handleClose = () => {
        setShow(false)
  } //end func handleClose
  
  const handleClick = (elem) => {
      setElement(elem)
      if(elem === 'saldo'){
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: '/ceksaldo',
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        };
        
        instance
        .request(config)
        .then((response) => {
          setSaldoUtama(response.data.saldo);
        })
        .catch((error) => {
          console.log(error);
        });
      } else if(elem === 'tabungan'){
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: '/cektabungan',
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        };
        
        instance
        .request(config)
        .then((response) => {
          setSaldoTabungan(response.data.saldo);
        })
        .catch((error) => {
          console.log(error);
        });
      } else if(elem === 'mutasi'){
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/data',
        headers: {  
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      };
      
      instance
      .request(config)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  } //end func handleClick
   
  const renderElement = () => {
      if (element === 'saldo'){
        return <div className="h-full my-20 py-5 text-center rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl md:rounded-l-3xl transition-all ease-in-out duration-500 bg-yellow-500">
          <h1 className="mb-2 font-bold">Saldo Rekening Utama</h1>
          <p>Rp.{saldoUtama}</p></div>
      } else if ( element === 'tabungan'){
        return <div className="h-full my-20 py-5 text-center rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl md:rounded-l-3xl transition-all ease-in-out duration-500 bg-yellow-500">
        <h1 className="mb-2 font-bold">Saldo Tabungan</h1>
        <p>Rp.{saldoTabungan}</p></div>
      } else if (element === 'mutasi'){
        return (<div className="relative bg-yellow-400 h-full md:w-[320px] md:h-[280px] overflow-y-auto scroll-smooth scrollbar-hide rounded-t-2xl md:rounded-b-2xl transition-all ease-in-out duration-500"><div className="flex items-center justify-center">
        <h1 className="fixed bg-orange-500 p-1 rounded-xl italic">10 Transaksi terakhir</h1></div>
        <div className="my-5 mx-3">
        {[...mutations].reverse().map((i) => {
          return <div key={i.id}>
                    <hr />
                    <p className="mt-3">No Reff : {i.no_ref}</p>
                    <p>Waktu : {i.waktu}</p>
                    <p>Transaksi : {i.keterangan}</p>
                    <p>Debit : {i.uang}</p>
                    <p className="mb-3">Keterangan : {i.transaksi}</p>
                    <hr />
                  </div>
        })}</div>
      </div>)} else {
        <h1>Pilih Transaksi</h1>
      }
      
  } //end func renderElement

  return (
    <div className={`w-full bg-black bg-opacity-50 fixed z-30`}>
        <div className='rounded-md overflow-auto scroll-smooth scrollbar-hide md:rounded-2xl w-[295px] md:w-[695px] h-[400px] bg-[#FFF500] m-auto top-0 left-0 right-0 bottom-0 absolute'>
                <span className='absolute right-1 top-1'><Link onClick={()=>handleClose()}><SlClose className='text-[20px] md:text-[25px] lg:text-[28px]'/></Link></span>
            <div className="flex flex-col md:flex-row items-center justify-between mt-7 md:mt-10 box-border ">
              <div className="w-full md:w-1/3 h-40 md:h-80 flex flex-col items-center justify-evenly bg-yellow-200 rounded-l-3xl md:rounded-l-none rounded-r-3xl">
              <div className="">
                <button className="bg-black max-w-fit max-h-fit md:max-h-[40px] text-[#FFF500] rounded-lg border-[1.5px] border-b-4 border-slate-600 active:border-b-0 md:p-1 group" onClick={()=>handleClick('saldo')}>Cek Saldo Rekening
                </button>
              </div>
              <div>
                <button className="bg-black max-w-fit max-h-fit md:max-h-[40px] text-[#FFF500] rounded-lg border-[1.5px] border-b-4 border-slate-600 active:border-b-0 md:p-1" onClick={()=>handleClick('tabungan')}>Cek Saldo Tabungan
                </button>
              </div>
              <div>
                <button className="bg-black max-w-fit max-h-fit md:max-h-[40px] text-[#FFF500] rounded-lg border-[1.5px] border-b-4 border-slate-600 active:border-b-0 md:p-1" onClick={()=>handleClick('mutasi')}>Cek Mutasi Rekening
                </button>
              </div></div>
              <div className="w-full relative h-[184px] md:h-full mt-7 md:w-[350px]">
                {renderElement()}
              </div>
            </div>
        </div>
        <div className='h-screen' onClick={handleClose}></div>
    </div>
  );
}

export default MyAccount