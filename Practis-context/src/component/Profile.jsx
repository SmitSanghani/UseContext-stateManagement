import React, { useContext } from 'react'
import { UserContext } from '../context/Usercontext'

const Profile = () => {
  const { User } = useContext(UserContext)
  return (
    <div>
      <h2>Profile</h2>
      {User ? <p>Welcome, {User}!</p> : <p>User not logged in.</p>}
    </div>
  )
}

export default Profile