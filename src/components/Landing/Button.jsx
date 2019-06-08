import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = props => {
  return (
    <Styles>
      <Link to={`${props.title}`}>
        <div className='button'>
          <span>{props.title}</span>
          <svg>
            <polyline class='o1' points='0 0, 150 0, 150 55, 0 55, 0 0' />
            <polyline class='o2' points='0 0, 150 0, 150 55, 0 55, 0 0' />
          </svg>
        </div>
      </Link>
    </Styles>
  );
};

export default Button;

const Styles = styled.div`
  button {
    width: 100px;
  }

  p {
    border: 1px solid red;
  }
`;
