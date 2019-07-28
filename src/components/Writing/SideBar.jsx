// package imports
import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import NewsletterForm from './NewsletterForm';

const SideBar = ({ input, applyFilter, setInput, clearSearch }) => {
  return (
    <Styles>
      <div className='fixed-sidebar'>
        <label htmlFor='search input' className='section-title top-title'>
          Search Writing
        </label>
        <SearchInput
          input={input}
          clearSearch={clearSearch}
          setInput={setInput}
        />
        <label htmlFor='newsletter input' className='section-title'>
          Weekly Newsletter
        </label>
        <NewsletterForm />
        <h4 className='section-title'>Filter Writing By Category</h4>
        <h5 onClick={() => applyFilter('Case Study')}>Project Case Studies</h5>
        <h5 onClick={() => applyFilter('Client Projects')}>Client Projects</h5>
        {/*
        <h5 onClick={() => applyFilter('Personal Projects')}>Personal Projects</h5>
        <h5 onClick={() => applyFilter('Top 10 Articles')}>Top 10 Articles</h5>
        <h5 onClick={() => applyFilter('Personal Writing')}>Personal Writing</h5>
        <h5 onClick={() => applyFilter('Book Summaries')}>Book Summaries</h5> */}
      </div>
    </Styles>
  );
};

export default SideBar;

const Styles = styled.div`
  position: absolute;

  .fixed-sidebar {
    min-height: 80vh;
    position: fixed;
    width: 275px;
    margin: 40px 0 15px 10px;
    padding: 10px 25px 0 0;
    border-right: 1px solid #d3d3d3;

    @media (max-width: 800px) {
      width: 225px;
    }

    @media (max-width: 600px) {
      display: none;
    }

    .section-title {
      margin: 20px 0 10px 0;
      font-size: 15px;
      font-weight: 500;

      &:first-child {
        margin-top: 0;
      }
    }

    h5 {
      font-size: 14px;
      margin: 0 0 7px 0;
      &:hover {
        cursor: pointer;
      }
    }
  }

  label {
    display: block;
    margin: 0;
  }
`;
