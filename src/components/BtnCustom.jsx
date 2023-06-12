const BtnCustom = ({value,type,event,className}) => {
  return (
    <button type={type} className={`${className}`} onClick={event}>{value}</button>
  )
}

export default BtnCustom