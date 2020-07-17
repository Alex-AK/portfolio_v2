import React from "react";
import styled from "styled-components";

const Images = ({ images, title }) => {
  const { desktop, mobile } = images;

  return (
    <Styles>
      <img className="desktop" src={desktop} alt={` ${title} desktop view`} />
      <img className="mobile" src={mobile} alt={` ${title} mobile view`} />
    </Styles>
  );
};

export default Images;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  margin: 30px 20px;
  position: relative;

  @media (max-width: 1000px) {
    transform: scale(0.9);
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0 40px -20px;
  }

  .desktop {
    width: 400px;
    height: 228px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    @media (max-width: 1000px) {
      transform: scale(0.9);
    }
    @media (max-width: 800px) {
      margin-bottom: 20px;
    }
    @media (max-width: 600px) {
      transform: scale(0.8);
    }
  }

  .mobile {
    width: 150px;
    position: absolute;
    margin: 20px 0 0 180px;

    @-moz-document url-prefix() {
      margin: 20px 0 0 360px;
    }

    @media (max-width: 1000px) {
      transform: scale(0.9);
    }
    @media (max-width: 800px) {
      margin: 15px 0 0 300px;
    }
    @media (max-width: 600px) {
      transform: scale(0.7);
      margin: 15px 0 0 250px;
    }
  }
`;
