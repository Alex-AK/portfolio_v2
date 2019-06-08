import React from 'react';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Styles>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </Styles>
  );
};

export default ErrorPage;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87vh;

  h1 {
    border-right: 1px solid black;
  }
`;
