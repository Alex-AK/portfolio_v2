import React from 'react';
import { Link } from 'react-router-dom';

const renderButton = props => {
  return (
    <div
      className={`button nav ${props.extra_small &&
        'extra_small'} ${props.full_width && 'full_width'}`}
      onClick={(props.extra_small || props.full_width) && props.clearSearch}>
      <span>{props.title}</span>

      <svg>
        <polyline className='o1' points='0 0, 150 0, 150 55, 0 55, 0 0' />
        <polyline className='o2' points='0 0, 150 0, 150 55, 0 55, 0 0' />
      </svg>
    </div>
  );
};

const Button = props => {
  return props.non_link ? (
    renderButton(props)
  ) : (
    <Link to={`${props.title}`}>{renderButton(props)}</Link>
  );
};

export default Button;
