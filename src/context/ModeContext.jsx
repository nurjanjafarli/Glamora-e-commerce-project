import { createContext, useEffect, useState } from "react";

export const GlobalDataContext = createContext();
export const GlobalDataProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(()=>{
localStorage.setItem("darkMode",darkMode)
  },[])
  return (
    <GlobalDataContext.Provider value={{ darkMode, setDarkMode, toggleMode }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
