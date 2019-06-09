import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import Sidebar from './Sidebar';

const Writing = () => {
  return (
    <>
      <h2 className='page-title'>Writing</h2>
      <Styles>
        <Sidebar />
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
