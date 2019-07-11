import React from 'react';
import styled from 'styled-components';

import NavigationLink from './NavigationLink';
import Logo from './Logo';

const MobileMenu = props => {
  return (
    <Styles>
      {props.navigation.map(link_text => {
        return (
          <div className='mobile-links'>
            <NavigationLink
              key={link_text}
              text={link_text}
              isMobile
              menuOpen={props.menuOpen}
              setMenu={props.setMenu}
            />
          </div>
        );
      })}
    </Styles>
  );
};

export default MobileMenu;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: #fcfcfa;

  .mobile-links {
    margin-bottom: 15px;

    .active {
      border-bottom: 3px solid #f4e4d4;
      padding-bottom: 5px;
    }

    a {
      font-weight: 500;
      text-transform: uppercase;
    }

    p {
      margin-bottom: 0;
      padding: 0 3px 8px 3px;
      font-size: 14px;

      &:hover {
        border-bottom: 3px solid #f4e4d4;
        padding-bottom: 5px;
      }
    }
  }
`;
