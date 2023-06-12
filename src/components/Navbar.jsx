import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import LogoPIT from "../assets/img/logopit1.png";
import BtnLogin from "./BtnLogin";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./modals/Login";
import Logout from "./modals/Logout";
import MyProfile from "./modals/MyProfile";
import MyAccount from "./modals/MyAccount";
import { useStateContext } from "../context/StateContext";

  const Navbar = ({handleScrollTo,className= ''}) => {
  const [clicked, setClicked] = useState(false);
  const [onclick, setOnclick] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const [isShowProgram, setIsShowProgram] = useState(false)
  const [isShowJoin, setIsShowJoin] = useState(false)
  const [isShowHelp, setIsShowHelp] = useState(false)

  const {displayName,setDisplayName} = useStateContext()

  const toggleMenu = () => (clicked ? "opacity-100 top-[50px]"  : "opacity-0 top-[-1450px]");
  
  const dropdownRef = useRef(null);

  const handleClick = (menuName) => {

    if (menuName === "Program") {
      setIsShowProgram((prevState) => !prevState);
      setIsShowJoin(false)
      setIsShowHelp(false)
      setOnclick(false);
    } else if (menuName === "Gabung") {
      setIsShowJoin((prevState) => !prevState);
      setIsShowHelp(false)
      setIsShowProgram(false)
      setOnclick(false);
    } else if (menuName === "Bantuan") {
      setIsShowHelp((prevState) => !prevState);
      setIsShowProgram(false)
      setIsShowJoin(false)
      setOnclick(false);
    } else if (menuName === "toggleMenu") {
      setClicked(!clicked); 
    }
    }

  //   useEffect(() => {
  //     document.body.addEventListener('click', handleClickOutside);

  //     return () => {
  //       document.body.removeEventListener('click', handleClickOutside);
  //     };
  //   }, []);

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target) || clicked) {
  //     setClicked(false); 
  //     setOnclick(false);
  //     setIsShowProgram(false)
  //     setIsShowJoin(false)
  //     setIsShowHelp(false)

  //   }
  // };
  return (
    <>
      <div className={`w-full md:h-0 fixed md:absolute ${!clicked ? ('z-20') : ('z-50')} ${className}`}>
        <nav className=" bg-[#FFF500] md:flex md:justify-between px-4 md:px-10 md:items-center font-bold shadow-[4px_4px_12px_1px_rgba(0,0,0,0.25)] opacity-100">
          <div className="flex justify-between items-center">
            <img src={LogoPIT} alt="Logo" className="w-[50px] md:w-[60px] relative"/>
            <span className="text-3xl md:hidden">{clicked ? <GrClose onClick={()=>handleClick('toggleMenu')} /> : <FiMenu onClick={()=>handleClick('toggleMenu')} />}</span>
          </div> 
          <ul
            className={`bg-[#FCF785] z-50 md:z-10 w-full md:w-auto left-0 flex flex-col px-4 md:px-0 gap-y-5 py-5 md:py-0 md:flex-row absolute rounded-b-xl md:static md:bg-inherit md:gap-x-10 md:items-center md:opacity-100 ${toggleMenu()} transition-all ease-out duration-700 delay-500 box-border`}>
            <li>
              <button className="md:mr-5 cursor-pointer active:bg-[#FCF740] text-start" onClick={()=>handleClick('Program')}>
                    <p className="border-[1.5px] relative border-b-4 border-slate-600 rounded-lg active:border-b-[1.5px] px-1">PROGRAM</p>
                      <ul className={`${isShowProgram ? 'inline' : 'hidden'} mt-5 ml-2 md:ml-[-47px] md:absolute bg-[#FCF785] md:px-5 md:py-6 md:rounded-b-md-focus:bg-[#d] md:group-focus:bg-[#FCF785]`}>
                      <Link className="text-md md:text-md" to={'/'} onClick={()=>handleScrollTo('promotion',setClicked)}><li className="border-b-[1.9px] md:border-t-[1.9px] border-slate-700 py-2 md:w-[140px] md:text-center hover:bg-[#FCF745]">
                          Promosi
                        </li>
                        </Link>
                      </ul>
                </button>
            </li>
            <li>
              <button className=" md:mr-5 cursor-pointer text-start active:bg-[#FCF740]" onClick={()=>handleClick('Gabung')}>
                <p className="border-[1.5px] border-b-4 border-slate-600 rounded-lg active:border-b-[1.5px] max-w-fit px-1">GABUNG</p>
                <ul className={`${isShowJoin ?'inline':'hidden'} mt-5 ml-2 md:ml-[-50px] md:absolute bg-[#FCF785] md:px-5 md:py-6 md:rounded-b-md-focus:bg-[#d] md:group-focus:bg-[#FCF785]`}>
                  <Link className="text-md md:text-md " to={'/'} onClick={()=>handleScrollTo('join',setClicked)}><li className="border-b-[1.9px] md:border-t-[1.9px] border-slate-700 py-2 md:w-max-w-fit md:text-center hover:bg-[#FCF745]">
                    Jadi Nasabah Baru
                  </li></Link>
                </ul>
              </button>
            </li>
            <li className=" active:bg-[#FCF740] text-start">
              <button className="md:mr-5 cursor-pointer text-start">
                <p onClick={()=>handleClick('Bantuan')} className="border-[1.5px] border-b-4 border-slate-600 rounded-lg active:border-b-[1.5px] max-w-fit px-1">BANTUAN</p>
                <ul className={`${isShowHelp ?'inline':'hidden'} mt-5 ml-2 md:ml-[-46px] md:absolute bg-[#FCF785] md:px-5 md:py-6 md:rounded-b-md-hover:bg-[#d] md:group-focus:bg-[#FCF785]`}>
                  <div>
                    <Link className="text-md md:text-md:" to={'/help/passforgot'}><li className="border-b-[1.9px] md:border-t-[1.9px] border-slate-700 py-2 md:w-[140px] md:text-center hover:bg-[#FCF745]">
                      Lupa Kata Sandi
                    </li></Link>
                    <NavLink className="text-md md:text-md " to={'/help'}><li className="border-b-[1.9px] border-slate-700 py-2 md:w-max-w-fit md:text-center hover:bg-[#FCF745]">
                      Gagal Masuk Akun
                    </li></NavLink>
                  </div>
                </ul>
              </button>
            </li>
            <li>
              <BtnLogin displayName={displayName} login={setIsOpen} isClicked={setClicked} setShowProfile={setShowProfile} setShowAccount={setShowAccount} onclick={onclick} setOnclick={setOnclick} setIsShowProgram={setIsShowProgram} setIsShowJoin={setIsShowJoin} setIsShowHelp={setIsShowHelp}/>
            </li>
          </ul>
        </nav>
        <div className={`bg-black opacity-50 w-full h-screen fixed ${clicked ? ('top-20 transition-all ease-out delay-700') : (' top-[1050px]')} md:hidden absolute `} onClick={()=> setClicked(!clicked)}>
        </div>
      </div>
      
        {isOpen && (<Login close={setIsOpen}/>)}
        {/* <Logout setLoggout={setLoggout}/> */}
        {showProfile && (<MyProfile setShow={setShowProfile}/>)}
        {showAccount && (<MyAccount setShow={setShowAccount}/>)}
    </>
  );
};

export default Navbar;