
const Cards = ({dataAos,isNo,no,className,text,img}) => {
  return (
    <div data-aos={dataAos} className={`${className} shadow-[0px_0px_12px] rounded-lg overflow-hidden h-[50vh] max-w-[240px] cursor-pointer bg-yellow-500`}>
        <div className={`${isNo ? `${no} before:text-center before:top-0 before:left-0 before:absolute before:w-6 before:h-6 before:rounded-tl-md before:text-white before:bg-yellow-700 before:-inset-1` : 'before:bg-black'} h-[30vh] bg-slate-400  overflow-hidden border-b-2 border-0 border-black`}>
          <img src={img} alt="/" className='object-cover'/>
        </div>
        <div className='my-7 mx-4'>
          <h1 className='text-[15px] font-bold'>{text}</h1>
        </div>
    </div>
  )
}

export default Cards