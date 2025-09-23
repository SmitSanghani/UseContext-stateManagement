import React from 'react'
import { UsercontextProvider } from './context/Usercontext'
import Login from './component/Login'
import Profile from './component/Profile'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <UsercontextProvider>
          <Login/>
          <Profile/>
          <Navbar/>
      </UsercontextProvider>
    </div>
  )
}

export default App