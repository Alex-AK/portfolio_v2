import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ title }) => {
  return (
    <Styles>
      <div>
        <h2 className='page-title'>
          <span>{title}</span>
        </h2>
      </div>
    </Styles>
  );
};

export default PageTitle;

const Styles = styled.div`
  position: relative;

  .page-title {
    padding: 25px 0;
    position: fixed;
    width: 1180px;
    top: 70px;
    background: #fcfcfa;
    padding-left: 100px;
    z-index: 1;
    overflow: hidden;

    @media (max-width: 800px) {
      padding-left: 40px;
    }

    span {
      padding: 0 20px;
    }

    &:before,
    &:after {
      position: absolute;
      top: 51%;
      overflow: hidden;
      width: 100%;
      height: 1px;
      content: '\a0';
      background: #d3d3d3;
    }
    &:before {
      margin-left: -100%;
    }
  }
`;
