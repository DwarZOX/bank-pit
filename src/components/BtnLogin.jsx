import { useState,useEffect } from 'react'
import {FiLogIn, FiLogOut} from 'react-icons/fi'
import {IoMdArrowDropleft,IoMdArrowDropdown} from 'react-icons/io'
import {MdSupervisedUserCircle} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css'
import { useStateContext } from '../context/StateContext'
import instance from '../api/api'


  const BtnLogin = ({login,isClicked,onclick,setOnclick,setShowProfile,setShowAccount,setIsShowProgram,setIsShowJoin,setIsShowHelp}) => {
    // const [iconIsChanged, setIconIsChanged] = useState(false)
    const [changed, setChanged] = useState(false)
    const [clicked, setClicked] = useState(false)
    const {role,displayName,loggedIn,setLoggedIn} = useStateContext()

    const iconChangedStyle = () => changed ? 'rounded-full text-white px-1 py-[1.8px] md:py-2 md:px-3' : 'py-2 px-2 md:py-2 md:px-3'
    
    useEffect(() => {
        if(loggedIn){
          setChanged(true)
        }
    }, [])
    

    const handleShow = (show) => {
          if(show === 'Profile'){
            setShowProfile(true)
            isClicked(false)
          } else if (show === 'Account'){
            isClicked(false)
            setShowAccount(true)
          } else {
            isClicked(false)
          }
    } //end func handleShow
       
        
      const userOrAdmin = () => {
        if(role === 'user'){
            return (
              clicked || onclick &&
              ( <div className='group border-2 border-[#FCF785] px-5 mt-5 md:px-0 md:mt-0 shadow-[0px_0px_5px_rgba(0,0,0,0.3)] md:border-none md:shadow-none rounded-xl z-50'><ul className="mt-[10px] md:mt-[12.8px] md:ml-[-98px] md:absolute bg-[#FCF785] md:px-5 md:py-6 md:rounded-b-md group-focus:hidden">
                            <li className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 md:w-[200px] md:text-center flex md:inline justify-center hover:bg-[#FCF745] gap-x-5">
                              <span className='hidden md:flex items-center justify-center'><MdSupervisedUserCircle className='text-[28px] md:text-[40px] text-center'/></span>
                          <div className='hover:bg-[#FCF745] '>
                              <p className="text-[15px] md:border-b-[1.9px] border-slate-700 pt-2 md:py-2 capitalize">Hai, {displayName}</p></div>
                            </li>
                            <Link className="text-md md:text-md" onClick={()=>handleShow("Profile")}><li className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 md:w-[200px] md:text-center hover:bg-[#FCF745] flex md:flex-col md:items-center justify-center gap-x-5 md:gap-y-5">
                              Profil Saya
                            </li></Link>
                            <Link className="text-md md:text-md" onClick={()=>handleShow("Account")}><li className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 md:w-[200px] md:text-center hover:bg-[#FCF745] flex md:flex-col md:items-center justify-center gap-x-5 md:gap-y-5">
                              Rekening & Mutasi
                            </li></Link>
                            <Link className="text-md md:text-md flex justify-center items-center gap-x-2" onClick={handleLoggout} ><li className=" py-2 md:w-[200px] md:text-center hover:bg-[#FCF745]">
                              KELUAR <FiLogOut className='inline'/>
                            </li></Link></ul>
                </div>)
                )
        } else if(role === 'admin'){
          return (
            clicked || onclick &&
            ( <div className='group border-2 border-[#FCF785] px-5 mt-5 md:px-0 md:mt-0 shadow-[0px_0px_5px_rgba(0,0,0,0.3)] md:border-none md:shadow-none rounded-xl z-50'><ul className="mt-[10px] md:mt-[12.8px] md:ml-[-98px] md:absolute bg-[#FCF785] md:px-5 md:py-6 md:rounded-b-md group-focus:hidden">
                          <li className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 md:w-[200px] md:text-center flex md:inline justify-center hover:bg-[#FCF745] gap-x-5">
                            <span className='hidden md:flex items-center justify-center'><MdSupervisedUserCircle className='text-[28px] md:text-[40px] text-center'/></span>
                        <div className='hover:bg-[#FCF745] '>
                            <p className="text-[15px] md:border-b-[1.9px] border-slate-700 pt-2 md:py-2 capitalize">Hai,Admin {displayName}</p></div>
                          </li>
                          <Link className="text-md md:text-md" onClick={()=>handleShow("Dashboard")} to={'/dashboard'}><li className="border-b-[1.9px] cursor-pointer border-slate-700 py-2 md:w-[200px] md:text-center hover:bg-[#FCF745] flex md:flex-col md:items-center justify-center gap-x-5 md:gap-y-5">
                            Dashboard
                          </li></Link>
                          <Link className="text-md md:text-md flex justify-center items-center gap-x-2" onClick={handleLoggout} ><li className=" py-2 md:w-[200px] md:text-center hover:bg-[#FCF745]">
                            KELUAR <FiLogOut className='inline'/>
                          </li></Link></ul>
              </div> )
                )
        }
      } //end func userOrAdmin

      const handleClick = () => {
         setIsShowHelp(false)
         setIsShowJoin(false)
         setIsShowProgram(false)
        if(loggedIn){
          setOnclick(true)
          setClicked(!clicked)
        } else if (!loggedIn) {
          login(true)
          isClicked(false)
        }
      } //end handleClick

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
                url: '/logoutuser',
                headers: { 
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              };
              
              instance
              .request(config)
              .then((response) => {
                console.log(response.data.message);
                localStorage.clear()
                setLoggedIn(false)
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
          setOnclick(false)
       } //end func handleLoggout

    
  return (
    <>
      <button className={`bg-black max-w-fit max-h-fit md:max-h-[40px] text-[#FFF500] rounded-lg border-[1.5px] border-b-4 border-slate-600 active:border-b-0 flex ${iconChangedStyle()} items-center gap-x-1 group`} onClick={handleClick}>{loggedIn?(<span className='flex pr-1 text-white'><IoMdArrowDropleft className={`text-[28px] md:text-[38px] ${!clicked?'group-focus:transition-all group-focus:duration-700 group-focus:rotate-[-90deg]' : 'group-focus:rotate-0 group-focus:transition-all group-focus:duration-700'} `} /> <MdSupervisedUserCircle className='text-[28px] md:text-[38px]'/></span>):(<span className='flex items-center pr-1 max-w-min text-white'>MASUK<FiLogIn/></span>)}
      </button>

      {userOrAdmin()}
      
    </>
  )
}

export default BtnLogin