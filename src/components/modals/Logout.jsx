
import Swal from 'sweetalert2'
import 'animate.css'
import { useEffect } from 'react'
const Logout = ({setLoggout}) => {
    useEffect(() => {
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
          Swal.fire(
            'Keluar!',
            'Anda Berhasil Keluar.',
            'success'
          )
      setLoggout(false)
        }
      })
    }, [])
    
    
  return (<></>)
}

export default Logout