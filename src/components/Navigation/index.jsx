import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import styled from 'styled-components';
import Logo from './Logo';
import content from '../../content';

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

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-right: 20px;

    a {
      padding: 0 3px 8px 3px;
    }

    a:hover {
      border-bottom: 3px solid #f4e4d4;
      padding-bottom: 5px;
    }

    @media (max-width: 800px) {
      width: 60%;
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
