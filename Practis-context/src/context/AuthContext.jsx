import { Children, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ Children }) => {
  const [User, setUser] = useState();

  // login function
  const login = (username, password) => {
    if (username === "smit" && password === "123") {
      setUser({ username: "smit", email: "smit@gmail.com" });
      return true;
    }
    return false;
  };

  //   logout function

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ User, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};
