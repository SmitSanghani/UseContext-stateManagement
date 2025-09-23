import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  return (
    <div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "space-between"
        }}
     >
        <h1>My App</h1>
        <div>
          {user ? (
            <>
              <span>Welcome, {user.username}!</span>
              <button
                style={{ marginLeft: "10px" }}
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <span>Please login</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar