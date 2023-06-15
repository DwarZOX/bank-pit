import Input from './Input'

const Form = ({value,onChange,text,type,placeholder,newPass,setNewPass,setConfirmPass,confirmNewPass,isShow}) => {
  return (
    <>
          <p className="text-[15px] md:text-[19px] font-bold mb-16 px-10 md:px-0 md:my-10 text-center md:text-end">{text}</p>

          {type == 'password' ? 
          <>
          <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px]'} type={type} eyeIcon={true} value={newPass} eventOnChange={setNewPass} placeholder={'Masukan kata sandi'}/>
          <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px]'} classNameWrap={'mt-10 md:mt-0'} classNameLabel={'md:mt-6'} type={'password'} eyeIcon={true} value={confirmNewPass} eventOnChange={setConfirmPass} placeholder={'Konfirmasi kata sandi'}/>
          {isShow && <p className='text-red-600 mt-2'>Kata sandi tidak sama!</p>}
          </> : <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'} type={type} value={value} eventOnChange={onChange} placeholder={placeholder}/>
          }
        </>
  )
}

export default Form