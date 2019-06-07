import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = props => {
  return (
    <Link to={`${props.text}`}>
      <p>{props.text}</p>
    </Link>
  );
};

export default NavLink;
