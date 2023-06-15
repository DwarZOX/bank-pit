import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const Input = ({type,className,classNameWrap,placeholder,label,labelValue,value,classNameLabel,eyeIcon,eventOnChange,disable}) => {
  const [showPW, setShowPW] = useState(false)
  const {setIsShow} = useStateContext()
  const handleOnChange = (e) => {
    eventOnChange(e.target.value)
    setIsShow(false)
  }
  return (<>
      <label htmlFor={label} className={`${classNameLabel} block`}>{labelValue}</label>
      <div className={`flex justify-between items-center ${classNameWrap} border-b-2 border-black`}>
        <input type={showPW? 'text' : type} id={label} className={`${className} focus:outline-0`} placeholder={placeholder} value={value} onChange={(e)=>handleOnChange(e)} disabled={disable}/>
        {eyeIcon && (<span className='mx-2 cursor-pointer' onClick={()=>setShowPW(!showPW)}>{showPW?(<AiOutlineEye className='text-[28px] md:text-[30px] lg:text-[33px]'/>) : (<AiOutlineEyeInvisible className='text-[28px] md:text-[30px] lg:text-[33px]'/>)}</span>)}
      </div>
      </>
  )
}

export default Input