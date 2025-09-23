import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const Handelsubmit = () => {
    const success = login(username, password);
    if (!success) {
      alert("Invalid credentials! Try username: smit, password: 123");
    }
    setUsername("");
    setpassword("");
  };

  if (user) {
    return <p>You are already logged in as {user.username}.</p>;
  }
  return (
    <div>
      Login <br />
      <input
        type="text"
        placeholder="enter name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      /> <br />
      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      /> <br />
      <button onClick={Handelsubmit}>Login</button>
    </div>
  );
};

export default Login;
