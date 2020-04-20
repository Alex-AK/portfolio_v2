import React from "react";
import styled from "styled-components";

const DisplayedCount = ({ resultLength }) => {
  return (
    <Styles className="sub_text">Displaying {resultLength} Results</Styles>
  );
};

export default DisplayedCount;

const Styles: any = styled.p``;
