import React from "react";
import Login from "./component2/Login.jsx";
import Profile from "./component2/Profile.jsx";
import Navbar from "./component2/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
const App = () => {
  return (
    // <UserProvider>
    //   <div>
    //     <h1>useContext Example</h1>
    //     <Login />
    //     <Profile />
    //   </div>
    // </UserProvider>
    <AuthProvider>
      <Login/>
      <Profile/>
      <Navbar/>
    </AuthProvider>
  );
};

export default App;
