import React, { useState } from "react";
import App from "../App.jsx";
import { useLocation } from "react-router-dom";

export const NavContext = React.createContext();

export default function NavLinkContext({ children }) {
  const [activeLink, setActiveLink] = useState("/home");

  const handleClick = (path, pathname) => {
    if (!(pathname == path)) $("html, body").animate({ scrollTop: 0 }, 1000);
    setActiveLink(path);
  };

  return (
    <NavContext.Provider value={{ activeLink, handleClick }}>
      {children}
    </NavContext.Provider>
  );
}
