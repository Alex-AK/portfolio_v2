import React, { useState } from "react";
import styled from "styled-components";

// components
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import NavigationLink from "./NavigationLink";

// assets
import content from "../../content/main";

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
    width: 35%;
    max-width: 700px;
    margin-right: 20px;

    @media (max-width: 800px) {
      width: 50%;
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
