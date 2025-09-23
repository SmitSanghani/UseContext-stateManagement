import React from 'react'
import { useContext } from 'react'
import { Usercontext } from '../context/Usercontext'
import { useState } from 'react'

const Login = () => {

    const {user} = useContext(Usercontext)

    const [username,setusername] = useState()
    const [password,setpssword]=useState()


    const 
  return (
    <div>Login</div>
  )
}

export default Login