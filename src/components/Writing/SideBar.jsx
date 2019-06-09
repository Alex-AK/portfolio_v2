// package imports
import React from 'react';
import styled from 'styled-components';

// other imports

const FilterBar = () => {
  return (
    <SideBar>
      {/* insert search bar here */}
      <h4>Search</h4>
      {/* insert filtering here */}
    </SideBar>
  );
};

export default FilterBar;

const SideBar = styled.div`
  width: 300px;
  margin: 15px 0 15px 10px;
  padding-right: 20px;
  border-right: 1px solid black;
  @media (max-width: 600px) {
    display: none;
  }

  h4 {
    padding: 0 0 5px 5px;
    margin: 10px 15px 0 15px;
    border-bottom: 1px solid black;
  }
`;
