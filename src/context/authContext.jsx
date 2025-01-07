import { createContext, useState } from "react";

const INITIAL_NAME = localStorage.getItem("name") || "";
const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME);

  const handleName = (namabaru) => {
    setName(namabaru);
    localStorage.setItem("name", namabaru);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, name, setName: handleName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
