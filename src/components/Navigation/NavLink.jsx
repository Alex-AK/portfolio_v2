import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = props => {
  return (
    <NavLink to={`${props.text}`}>
      <p>{props.text}</p>
    </NavLink>
  );
};

export default NavigationLink;
