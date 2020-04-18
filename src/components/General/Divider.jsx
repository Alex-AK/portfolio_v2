import React from "react";
import styled from "styled-components";

const Divider = () => {
  return (
    <Styles>
      <span />
    </Styles>
  );
};

export default Divider;

const Styles = styled.div`
  height: 1px;
  max-width: 500px;
  margin: 60px auto;
  background: #d3d3d3;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

  &:last-child {
    display: none;
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 20px auto;
  }
`;
