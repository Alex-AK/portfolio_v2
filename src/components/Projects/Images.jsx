import React from 'react';
import styled from 'styled-components';

const Images = ({ images, title }) => {
  return (
    <Styles>
      <img
        className='desktop'
        src={images.desktop}
        alt={` ${title} desktop view`}
      />
      <img
        className='mobile'
        src={images.mobile}
        alt={` ${title} mobile view`}
      />
    </Styles>
  );
};

export default Images;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 50%;
  margin: 30px 0;
  position: relative;

  @media (max-width: 1000px) {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    width: 100%;
  }

  .desktop {
    width: 400px;
    height: 255px;
    @media (max-width: 1000px) {
      transform: scale(0.9);
    }
    @media (max-width: 800px) {
      margin-bottom: 20px;
    }
  }

  .mobile {
    width: 150px;
    position: absolute;
    margin: 30px 0 0 180px;
    @media (max-width: 1000px) {
      transform: scale(0.9);
    }
    @media (max-width: 800px) {
      margin: 20px 0 0 170px;
    }
  }
`;
