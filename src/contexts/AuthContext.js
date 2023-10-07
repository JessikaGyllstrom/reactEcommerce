import { createContext, useState, useEffect } from "react";

//initial state
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({  userName: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // when changes to authdata add to localstorage
  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth));
    console.log("Passing data to local storage"+ auth)
  }, [auth]);
  // when auth changes set auth data in localStorage

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
