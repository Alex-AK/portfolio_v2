import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Styles>
      <div>
        <h1 className="err_num">404</h1>
        <p>This page could not be found.</p>
      </div>

      <Link to="/">Return Home</Link>
    </Styles>
  );
};

export default ErrorPage;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 84.75vh;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    .err_num {
      border-right: 1px solid black;
      margin: 0 15px 0 0;
      padding-right: 15px;
    }

    p {
      margin: 0;
    }
  }
`;
