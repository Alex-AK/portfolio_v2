import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  return (
    <>
      <Link to={`${props.title}`}>
        <div className='button nav'>
          <span>{props.title}</span>
          <svg>
            <polyline class='o1' points='0 0, 150 0, 150 55, 0 55, 0 0' />
            <polyline class='o2' points='0 0, 150 0, 150 55, 0 55, 0 0' />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default Button;
