import React from "react";
import styled from "styled-components";
import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  return (
    <Styles>
      <LoaderSpinner type="TailSpin" width={40} color="lightgrey" />
    </Styles>
  );
};

export default Loader;

const Styles: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  margin-left: 20%;

  @media (max-width: 600px) {
    margin: 0;
  }
`;
