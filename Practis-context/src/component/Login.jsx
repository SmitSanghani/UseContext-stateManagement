import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Usercontext'
const Login = () => {
     const [name, setName] = useState("");

     const {setUser}=useContext(UserContext)
     const HandelSubmit=(e)=>{
        e.preventDefault();
        setUser(name)
        setName("")
     }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={HandelSubmit}>
            <input type="text" placeholder='enter a Name' value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button type="submit">Set User</button>
        </form>
    </div>
  )
}

export default Login