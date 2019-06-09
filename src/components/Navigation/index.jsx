import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import styled from 'styled-components';
import Logo from './Logo';
import content from '../../content/main';

const Navigation = props => {
  const [navigation] = useState(content.navigation);

  return (
    <Styles>
      <Logo />
      <div className='links'>
        {navigation.map(link_text => {
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
  position: sticky;
  top: 0;
  background: #fcfcfa;
  opacity: 0.95;
  z-index: 2;

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-right: 20px;

    a {
      padding: 0 3px 8px 3px;
    }

    a:hover {
      border-bottom: 3px solid #f4e4d4;
      padding-bottom: 5px;
    }

    @media (max-width: 800px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      display: none;
    }

    .active {
      border-bottom: 3px solid #f4e4d4;
      padding-bottom: 5px;
    }
  }
`;
