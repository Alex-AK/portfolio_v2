// package imports
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const SideBar = () => {
  const [input, setInput] = useState('');

  return (
    <Styles>
      <div className='fixed-sidebar'>
        {/* insert search bar here */}
        <SearchInput input={input} setInput={setInput} />
        {/* filtering by category, how will this work with hooks? */}
        <h5 onClick={() => setInput('Client Projects')}>Client Projects</h5>
        <h5 onClick={() => setInput('Personal Projects')}>Personal Projects</h5>
        <h5 onClick={() => setInput('Top 10 Articles')}>Top 10 Articles</h5>
        <h5 onClick={() => setInput('Personal Writing')}>Personal Writing</h5>
        <h5 onClick={() => setInput('Book Summaries')}>Book Summaries</h5>
      </div>
    </Styles>
  );
};

export default SideBar;

const Styles = styled.div`
  position: absolute;

  .fixed-sidebar {
    position: fixed;
    min-height: 80vh;
    width: 260px;
    margin: 15px 0 15px 10px;
    padding-right: 20px;
    border-right: 1px solid #d3d3d3;

    @media (max-width: 800px) {
      width: 210px;
    }

    @media (max-width: 600px) {
      display: none;
    }

    h4 {
      padding: 0 0 5px 5px;
      margin-bottom: 10px;
      border-bottom: 1px solid black;
    }

    h5 {
      font-size: 14px;
      margin: 0 0 10px 5px;
    }
  }
`;
