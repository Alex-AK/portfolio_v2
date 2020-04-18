import React from "react";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Styles>
      <h1 className="err_num">404</h1>
      <p>This page could not be found.</p>
    </Styles>
  );
};

export default ErrorPage;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84.75vh;

  .err_num {
    border-right: 1px solid black;
    margin: 0 15px 0 0;
    padding-right: 15px;
  }
`;
