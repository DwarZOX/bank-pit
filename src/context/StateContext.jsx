import { createContext, useContext, useState } from "react";


const Context = createContext()

export const StateContext = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [role, setRole] = useState('')
    const [displayName, setDisplayName] = useState('')
return (
    <Context.Provider value={{loggedIn,setLoggedIn,role,setRole,displayName,setDisplayName}}>
        {children}
    </Context.Provider>
)
}

export const useStateContext = () => useContext(Context)