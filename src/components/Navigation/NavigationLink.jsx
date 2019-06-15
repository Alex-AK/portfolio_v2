import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = props => {
  return (
    <>
      {props.isMobile ? (
        <NavLink
          to={`/${props.text}`}
          onClick={() => props.setMenu(!props.menuOpen)}>
          <p>{props.text}</p>
        </NavLink>
      ) : (
        <NavLink to={`/${props.text}`}>
          <p>{props.text}</p>
        </NavLink>
      )}
    </>
  );
};

export default NavigationLink;
