import React from 'react';
import NavigationLink from './NavigationLink';
import styled from 'styled-components';
import Logo from './Logo';

const Navigation = props => {
  return (
    <Styles>
      <Logo />
      <div className='links'>
        {props.navigation.map(link_text => {
          return <NavigationLink key={link_text} text={link_text} />;
        })}
      </div>
    </Styles>
  );
};

export default Navigation;

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 auto;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-right: 20px;

    @media (max-width: 800px) {
      width: 60%;
    }
  }
`;
