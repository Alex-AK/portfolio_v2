import React from 'react';
import NavigationLink from './NavLink';
import styled from 'styled-components';

const Navigation = props => {
  return (
    <Styles>
      {props.navigation.map(link_text => {
        return <NavigationLink key={link_text} text={link_text} />;
      })}
    </Styles>
  );
};

export default Navigation;

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  margin: 0 auto;
  border: 1px solid red;
`;
