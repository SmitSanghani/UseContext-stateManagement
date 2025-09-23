import { useState } from "react";
import { createContext } from "react";

export const Usercontext = createContext(null)

export const UsercontextProvider = ({children}) =>{

    const [user,setuser] = useState();

    // login function

    const login = (username,password)=>{
        if(username === "smit" && password === "123"){
            setuser({username:"smit",email:"smit@gmail.com"})
            return true;
        }
        return false
    }

    // logout function

    const logout = ()=>{
        setuser(null)
    }

    return <Usercontext.Provider value={{user,login,logout}}>
        {children}
    </Usercontext.Provider>
}