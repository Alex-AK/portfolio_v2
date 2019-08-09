import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  const buildButton = props => {
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

  return props.non_link ? (
    buildButton(props)
  ) : (
    <Link to={`${props.title}`}>{buildButton(props)}</Link>
  );
};

export default Button;
