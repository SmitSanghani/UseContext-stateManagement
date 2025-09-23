import React from "react";
import { UserProvider } from "./context/Usercontext.jsx";
import Login from "./component/Login.jsx";
import Profile from "./component/Profile.jsx";
const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>useContext Example</h1>
        <Login />
        <Profile />
      </div>
    </UserProvider>
  );
};

export default App;
