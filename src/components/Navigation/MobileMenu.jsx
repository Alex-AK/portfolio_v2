import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import NavigationLink from "./NavigationLink";

// theme
import { colors } from "../../styles/Global";

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
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: ${colors.background};

  a {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 0;
  }
`;
