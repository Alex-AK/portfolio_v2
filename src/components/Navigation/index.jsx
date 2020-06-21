import React, { useState } from "react";
import styled from "styled-components";

// components
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import NavigationLink from "./NavigationLink";

// assets
import content from "../../content/main";

// theme
import { colors } from "../../styles/Global";

const Navigation = ({ window_width }) => {
  const { navigation } = content;

  const [menuOpen, setMenu] = useState(false);

  return (
    <Styles>
      <Logo />
      <div className="links">
        {navigation.map((link_text) => {
          return <NavigationLink key={link_text} text={link_text} />;
        })}
      </div>
      {window_width <= 600 && (
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
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  margin: 0 auto;

  opacity: 0.98;
  z-index: 6;

  background: ${colors.background};

  @media (max-width: 600px) {
    height: 60px;
  }

  .links {
    display: flex;
    justify-content: space-between;

    width: 35%;
    max-width: 700px;
    margin-right: 20px;

    @media (max-width: 800px) {
      width: 50%;
    }

    @media (max-width: 600px) {
      display: none;
    }

    p {
      margin-bottom: 0;
    }
  }
`;
