import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import SideBar from './SideBar';

const Writing = () => {
  return (
    <>
      <h2 className='page-title'>Writing</h2>
      <Styles>
        <SideBar />
        <Content />
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;
