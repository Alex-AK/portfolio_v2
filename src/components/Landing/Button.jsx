import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  return (
    <Link to={`${props.title}`}>
      <button>{props.title}</button>
    </Link>
  );
};

export default Button;
