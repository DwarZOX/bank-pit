import Input from './Input'

const Form = ({value,onChange,text,type,placeholder,newPass,setNewPass,setConfirmPass,confirmNewPass}) => {
  return (
    <>
          <p className="text-[15px] md:text-[19px] font-bold mb-16 px-10 md:px-0 md:my-10 text-center md:text-end">{text}</p>

          {type == 'password' ? 
          <>
          <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px]'} type={type} eyeIcon={true} value={newPass} eventOnChange={setNewPass} placeholder={'Masukan kata sandi'}/>
          <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px]'} classNameLabel={'md:mt-6'} type={'password'} eyeIcon={true} value={confirmNewPass} eventOnChange={setConfirmPass} placeholder={'Konfirmasi kata sandi'}/>
          </> : <Input className={'bg-transparent placeholder:text-slate-200 md:w-[280px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'} type={type} value={value} eventOnChange={onChange} placeholder={placeholder}/>
          }
        </>
  )
}

export default Form