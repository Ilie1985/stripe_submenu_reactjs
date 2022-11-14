import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(page);

    setLocation(coordinates);
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
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//set up custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};
