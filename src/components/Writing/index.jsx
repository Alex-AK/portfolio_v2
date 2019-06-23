import React from 'react';
import styled from 'styled-components';

import Content from './Content';
import SideBar from './SideBar';

const Writing = () => {
  return (
    <>
      <h2 className='page-title'>
        <div>Writing</div>
      </h2>
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
`;
