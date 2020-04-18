import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ isMobile, text, menuOpen, setMenu }) => {
  return (
    <>
      {isMobile ? (
        <NavLink to={`/${text}`} onClick={() => setMenu(!menuOpen)}>
          <p>{text}</p>
        </NavLink>
      ) : (
        <NavLink to={`/${text}`}>
          <p>{text}</p>
        </NavLink>
      )}
    </>
  );
};

export default NavigationLink;
