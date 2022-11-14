import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

 export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const openSubMenu = () => {
    setIsSubMenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        closeSideBar,
        openSideBar,
        closeSubMenu,
        openSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


//set up custom hook


export const useGlobalContext =()=>{
  return useContext(AppContext)
}