import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = props => {
  return (
    <>
      <NavLink to={`/${props.text}`}>
        <p style={{ marginBottom: 0 }}>{props.text}</p>
      </NavLink>
    </>
  );
};

export default NavigationLink;
