import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Main,Help,PassForgot,NotFound,Dashboard} from '../pages'
import Logout from '../components/modals/Logout'


const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/help' element={<Help />}/>
            <Route path='/help/passforgot' element={<PassForgot />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            {/* <Route path='/logout' element={<Main />}/> */}
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing