import { createContext, useContext, useState } from "react";


const Context = createContext()

export const StateContext = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [role, setRole] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [isShow, setIsShow] = useState(false)
return (
    <Context.Provider value={{loggedIn,setLoggedIn,role,setRole,displayName,setDisplayName,isShow,setIsShow}}>
        {children}
    </Context.Provider>
)
}

export const useStateContext = () => useContext(Context)