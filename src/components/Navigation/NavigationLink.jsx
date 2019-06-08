import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = props => {
  return (
    <Styles>
      <NavLink to={`${props.text}`} activeClassName='selected'>
        <p>{props.text}</p>
      </NavLink>
    </Styles>
  );
};

export default NavigationLink;

const Styles = styled.div`
  a {
    text-decoration: none;
    font-weight: 700;
  }
  .selected {
    font-size: 50px;
  }
`;
