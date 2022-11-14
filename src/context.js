import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

 export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const hideSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const hideSubMenu = () => {
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
        hideSideBar,
        openSideBar,
        hideSubMenu,
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