import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import NavigationLink from "./NavigationLink";

const MobileMenu = ({ navigation, menuOpen, setMenu }) => {
  return (
    <Styles>
      <Link to="/" onClick={() => setMenu(!menuOpen)}>
        <p>Home</p>
      </Link>

      {navigation.map((link_text) => {
        return (
          <NavigationLink
            key={link_text}
            text={link_text}
            isMobile
            menuOpen={menuOpen}
            setMenu={setMenu}
          />
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

  text-align: center;

  .active {
    border-bottom: 3px solid #f4e4d4;
    padding-bottom: 5px;
  }

  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
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
`;
