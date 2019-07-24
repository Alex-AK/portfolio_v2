import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import styled from 'styled-components';
import Logo from './Logo';
import content from '../../content/main';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

const Navigation = props => {
  const [navigation] = useState(content.navigation);
  const [menuOpen, setMenu] = useState(false);

  return (
    <Styles>
      <Logo />
      <div className='links'>
        {navigation.map(link_text => {
          return <NavigationLink key={link_text} text={link_text} />;
        })}
      </div>
      {props.window_width <= 600 && (
        <>
          <MobileMenuButton
            navigation={navigation}
            menuOpen={menuOpen}
            setMenu={setMenu}
          />
          {menuOpen && (
            <MobileMenu
              navigation={navigation}
              setMenu={setMenu}
              menuOpen={menuOpen}
            />
          )}
        </>
      )}
    </Styles>
  );
};

export default Navigation;

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background: #fcfcfa;
  opacity: 0.98;
  z-index: 6;

  @media (max-width: 600px) {
    height: 60px;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 50%;
    max-width: 700px;
    margin-right: 20px;

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
    a {
      padding: 0 3px 8px 3px;
      font-weight: 500;
      text-transform: uppercase;

      &:hover {
        border-bottom: 3px solid #f4e4d4;
        padding-bottom: 5px;
      }
    }

    p {
      margin-bottom: 0;
      font-size: 14px;
    }
  }
`;
