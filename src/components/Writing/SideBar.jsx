// package imports
import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Styles>
      {/* insert search bar here */}
      <h4>Search</h4>
      {/* filtering by category, how will this work with hooks? */}
      <h5>Project Overviews</h5>
      <h5>Top 10 Articles</h5>
      <h5>Personal Writing</h5>
      <h5>Book Summaries</h5>
    </Styles>
  );
};

export default Sidebar;

const Styles = styled.div`
  width: 300px;
  min-width: 220px;
  max-height: 80vh;
  margin: 15px 0 15px 10px;
  padding-right: 20px;
  border-right: 1px solid black;

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
`;
