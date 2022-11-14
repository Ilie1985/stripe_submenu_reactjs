import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubmenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    console.log("hello world");
    openSubMenu();
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt=" stripe logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>

          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>

          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn"> Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
