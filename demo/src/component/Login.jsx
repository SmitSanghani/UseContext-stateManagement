import React from "react";
import { useContext } from "react";
import { Usercontext } from "../context/Usercontext";
import { useState } from "react";

const Login = () => {
  const { user, login } = useContext(Usercontext);

  const [username, setusername] = useState();
  const [password, setpssword] = useState();

  const submit = () => {
    const success = login(username, password);

    if (!success) {
      alert(`invalid`);
    }
  };

  if (user) {
    return <h1>are you login</h1>
  }
  return (
    <div>
      Login
      <br />
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="enter password"
        onChange={(e) => {
          setpssword(e.target.value);
        }}
      /> <br />
      <button
        onClick={submit}
      >
        submit
      </button>
    </div>
  );
};

export default Login;
