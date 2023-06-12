
import { useState } from 'react'
import LogoPIT from '../assets/img/logopit1.png'
const Dashboard = () => {
    const [active, setActive] = useState(false)
  return (
    <div>
        {/* <aside className="sidebar fixed top-0 left-0 flex flex-col w-[219px] h-full bg-[#424233] ">
            <nav className="sidebar-nav flex-auto">
                <header className="sidebar-header flex items-center h-[72px] pr-[1.25rem] bg-[#fff500]">
                    <img src={LogoPIT} alt="/" className="h-[60px]"/>
                    <button className="relative flex gap-10 items-center h-[50px] w-[64px] text-[16px] px-[25px] text-white "><span className="flex-auto">Dashboard</span></button>
                </header>
                    <button className=" px-[25px] relative flex flex-auto gap-[25px] items-center h-[50px] w-[100%] text-[16px] bg-blue-800" onClick={()=>setActive(!active)}>
                        <span>Action</span>
                    </button>
                <div className={`sub-nav overflow-hidden ${active ? 'h-[150px]':'h-0'} transition-all duration-1000`}>
                    <button className="pl-[72px] relative flex flex-auto gap-[25px] items-center h-[50px] w-[100%] text-[16px] px-[25px] bg-blue-400">
                        <span>Accept</span>
                    </button>
                    <button className="pl-[72px] relative flex flex-auto gap-[25px] items-center h-[50px] w-[100%] text-[16px] px-[25px] bg-blue-400">
                        <span>Delete</span>
                    </button>
                </div>
            </nav>
        </aside> */}
        
    </div>
  )
}

export default Dashboard