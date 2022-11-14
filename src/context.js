import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

 export const AppProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(true);

  const hideSideBar = () => {
    setShowSideBar(false);
  };

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const hideSubMenu = () => {
    setShowSubMenu(false);
  };

  const openSubMenu = () => {
    setShowSubMenu(true);
  };

  return (
    <AppContext.Provider
      value={{
        showSideBar,
        showSubMenu,
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