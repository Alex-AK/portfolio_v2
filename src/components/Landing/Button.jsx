import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = props => {
  return (
    <Styles>
      <Link to={`${props.title}`}>
        <button>{props.title}</button>
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
