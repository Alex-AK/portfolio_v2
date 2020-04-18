import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Styles>
      <Link to="/">
        <h1>AK</h1>
      </Link>
    </Styles>
  );
};

export default Logo;

const Styles = styled.div`
  h1 {
    margin: 0 0 0 20px;

    @media (max-width: 800px) {
      margin: 0 0 0 15px;
    }
  }
`;
