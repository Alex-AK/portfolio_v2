import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationLink from './NavigationLink';

const MobileNavigation = props => {
  const [menuOpen, setMenu] = useState(false);

  return (
    <Styles>
      <div
        className={
          menuOpen
            ? 'hamburger-menu menu-open clickHamburgerMenu'
            : 'hamburger-menu'
        }
        onClick={() => setMenu(!menuOpen)}>
        <span />
        <span />
        <span />
      </div>
      {/* <nav>
        {props.navigation.map(link_text => {
          return <NavigationLink key={link_text} text={link_text} />;
        })}
      </nav> */}
    </Styles>
  );
};

export default MobileNavigation;

const Styles = styled.div`
  .hamburger-menu {
    width: 30px;
    height: 25px;
    margin-right: 30px;
    position: relative;
    cursor: pointer;
    display: inline-block;

    span {
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
      background-color: #282828;
      position: absolute;
      border-radius: 2px;
      transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      width: 100%;
      height: 4px;
      transition-duration: 500ms;
    }

    span:nth-child(1) {
      top: 0px;
      left: 0px;
    }

    span:nth-child(2) {
      top: 11px;
      left: 0px;
    }

    span:nth-child(3) {
      bottom: 0px;
      left: 0px;
    }
  }

  .menu-open {
    margin-right: 30px;
    z-index: 3;
  }

  .clickHamburgerMenu span:nth-child(1) {
    transform: rotate(45deg);
    top: 13px;
  }
  .clickHamburgerMenu span:nth-child(2) {
    transform: scale(0.1);
  }
  .clickHamburgerMenu span:nth-child(3) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;
