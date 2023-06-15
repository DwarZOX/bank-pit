import { Link } from 'react-router-dom'
import LogoPIT from '../../assets/img/logopit1.png'
import LogoAnimate from '../../assets/video/logo-animate.mp4'
import Input from '../Input'
import { SlClose } from 'react-icons/sl'
import Swal from 'sweetalert2'
import BtnCustom from '../BtnCustom'
import { useEffect, useState } from 'react'
import { useStateContext } from '../../context/StateContext'
import instance from '../../api/api'

// const Login = ({close,setLoggedIn,setRole,setDisplayName}) => {
  const Login = ({close}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
    const {setRole,setDisplayName,setLoggedIn} = useStateContext()
  


  const handleClose = () => {
        close(false)
    }
    const handleLogin = (e) => {
      close(false)
        e.preventDefault()
        if(username === '' && password === ''){
          const Toast = Swal.mixin({
           toast: true,
           position: 'top',
           showConfirmButton: false,
           timer: 3000,
           timerProgressBar: true,
           // didOpen: (toast) => {
           //   toast.addEventListener('mouseenter', Swal.removeTimer)
           //   toast.addEventListener('mouseleave', Swal.resumeTimer)
           // }
         })
         Toast.fire({
           icon: 'warning',
           title: 'Nama pengguna dan kata sandi tidak boleh kosong!'
         })
         return false
       } else if(username === ''){
         const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          // didOpen: (toast) => {
          //   toast.addEventListener('mouseenter', Swal.removeTimer)
          //   toast.addEventListener('mouseleave', Swal.resumeTimer)
          // }
        })
        Toast.fire({
          icon: 'warning',
          title: 'Nama pengguna tidak boleh kosong!'
        })
        return false
      } else if ( password === ''){
        const Toast = Swal.mixin({
         toast: true,
         position: 'top',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         // didOpen: (toast) => {
         //   toast.addEventListener('mouseenter', Swal.removeTimer)
         //   toast.addEventListener('mouseleave', Swal.resumeTimer)
         // }
       })
       Toast.fire({
         icon: 'warning',
         title: 'Kata sandi tidak boleh kosong!'
       })
       return false
     } else {
       
    let data = new FormData();
    data.append("username", username);
    data.append("password", password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/login",
      headers: {},
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        setLoggedIn(true)
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("role", response.data.data[0].role);
        localStorage.setItem("full_name", `${response.data.data[0].nama_depan} ${response.data.data[0].nama_belakang}`);
        // setRole(response.data.data[0].role)
        
        // setDisplayName(`${response.data.data[0].nama_depan} ${response.data.data[0].nama_belakang}`)
        // localStorage.setItem("user", response.data.user.name);
        // if (rememberMe) {
        //   localStorage.setItem("email", email);
        //   localStorage.setItem("password", password);
        // } else {
        //   localStorage.removeItem("email");
        //   localStorage.removeItem("password");
        // }
        
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    // didOpen: (toast) => {
                    //   toast.addEventListener('mouseenter', Swal.stopTimer)
                    //   toast.addEventListener('mouseleave', Swal.resumeTimer)
                    // }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: `Selamat datang, ${response.data.data[0].nama_depan} `
                  })
      })
      .catch((error) => {
        console.error(error)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          // didOpen: (toast) => {
          //   toast.addEventListener('mouseenter', Swal.removeTimer)
          //   toast.addEventListener('mouseleave', Swal.resumeTimer)
          // }
        })
        Toast.fire({
          icon: 'warning',
          title: 'Nama Pengguna atau Kata Sandi Salah'
        })
      });
    // setLoggedIn(true)
}
    }
  return (
    <div className={`bg-black bg-opacity-50 w-full fixed z-30`}>
        <div className='rounded-md md:rounded-2xl w-[295px] md:w-[695px] h-[400px] bg-white flex flex-col md:flex-row justify-between md:justify-evenly items-center m-auto top-0 left-0 right-0 bottom-0 absolute'>
                <span className='absolute right-1 top-1 z-10'><Link onClick={()=>handleClose()}><SlClose className='text-[20px] md:text-[25px] lg:text-[28px]'/></Link></span>
                <div className='absolute m-auto md:left-0 md:right-0 md:bottom-0 md:top-0 md:relative flex flex-col-reverse'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='inline w-full' viewBox="0 0 500 500" width="100%" id="blobSvg" filter="blur(0px)" transform="rotate(46)"><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10s" repeatCount="indefinite" values="M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M443.46373,322.92581Q424.06453,395.85162,352.29275,408.54192Q280.52096,421.23222,209.43547,432.55323Q138.34998,443.87423,108.93547,378.01696Q79.52096,312.15968,50.50966,239.62741Q21.49835,167.09515,80.22256,112.52096Q138.94677,57.94677,211.78709,57.03792Q284.62741,56.12906,342.97339,89.43146Q401.31936,122.73387,432.09114,186.36693Q462.86293,250,443.46373,322.92581Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z"></animate></path><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10s" repeatCount="indefinite" values="M404.21696,312.89783Q400.5999,375.79567,344.18719,420.60848Q287.77447,465.42129,222.25959,438.51488Q156.7447,411.60848,114.36806,363.06382Q71.99143,314.51917,65.98083,247.80853Q59.97023,181.09788,105.72982,130.10217Q151.4894,79.10645,216.18088,77.25959Q280.87235,75.41272,335.88295,103.82341Q390.89355,132.2341,399.36378,191.11705Q407.83401,250,404.21696,312.89783Z;M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;M429,328Q437,406,362,433Q287,460,218,442Q149,424,122.5,365Q96,306,74.5,242Q53,178,94.5,115Q136,52,206.5,73Q277,94,347.5,101.5Q418,109,419.5,179.5Q421,250,429,328Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M404.21696,312.89783Q400.5999,375.79567,344.18719,420.60848Q287.77447,465.42129,222.25959,438.51488Q156.7447,411.60848,114.36806,363.06382Q71.99143,314.51917,65.98083,247.80853Q59.97023,181.09788,105.72982,130.10217Q151.4894,79.10645,216.18088,77.25959Q280.87235,75.41272,335.88295,103.82341Q390.89355,132.2341,399.36378,191.11705Q407.83401,250,404.21696,312.89783Z"></animate></path><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10s" repeatCount="indefinite" values="M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z;M428.39652,310.63781Q395.12039,371.27562,337.58607,396.3189Q280.05174,421.36219,204.00896,441.94775Q127.96619,462.5333,107.32787,385.81839Q86.68955,309.10348,96.33581,253.18955Q105.98207,197.27562,134.68904,148.26665Q163.396,99.25769,224.43929,74.05174Q285.48258,48.8458,334.83632,93.40548Q384.19006,137.96516,422.93135,193.98258Q461.67264,250,428.39652,310.63781Z;M414.53769,321.38989Q420.37096,392.77979,350.00938,405.59743Q279.64779,418.41507,213.62261,422.99375Q147.59743,427.57242,94.94338,376.434Q42.28934,325.29559,42.19191,249.67298Q42.09448,174.05036,91.48437,117.78308Q140.87426,61.5158,214.61636,47.15422Q288.35846,32.79263,348.05974,75.5158Q407.76103,118.23897,408.23272,184.11949Q408.70441,250,414.53769,321.38989Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M402.96858,305.89372Q383.43068,361.78743,330.92976,387.4658Q278.42884,413.14418,202.60721,438.39372Q126.78558,463.64325,93.53789,391.42791Q60.29021,319.21257,78.64603,256.64233Q97.00185,194.07209,128.64418,144.10813Q160.28651,94.14418,219.21534,92.06839Q278.14418,89.9926,343.5342,103.10536Q408.92421,116.21812,415.71534,183.10906Q422.50647,250,402.96858,305.89372Z"></animate></path></svg>
            <img src={LogoPIT} alt="Logo PIT" className='w-[80px] md:w-[180px] md:absolute md:inline-block md:left-0 md:right-0 md:top-0 md:bottom-0 m-auto' /></div>
            <div className='my-[110px]  md:mx-10 flex flex-col z-10'>
                <form className='flex flex-col' onSubmit={handleLogin}>
                    <Input type={'text'} placeholder={''} className={'py-2 px-1 md:w-[300px] bg-transparent'} labelValue={'Nama Pengguna'} label={'username'} value={username} eventOnChange={setUsername}/>
                    <Input type={'password'} classNameLabel={'mt-9'} placeholder={''} className={'py-2 px-1 md:w-[300px] bg-transparent'} label={'password'} labelValue={'Kata Sandi'} eyeIcon={true} value={password} eventOnChange={setPassword}/>
                    <BtnCustom type={'submit'} className={'px-3 py-2 md:mt-10 my-5 rounded-md bg-[red] text-white w-full md:w-[190px] self-center font-700'} value={'Masuk'}/>
                    <Link className='flex items-center justify-center text-[red] font-bold' to={'/help/passforgot'}>Lupa Kata Sandi ?</Link>
                </form>
            </div>
        </div>
        <div className='w-full h-screen' onClick={handleClose}></div>
    </div>
  )
}

export default Login