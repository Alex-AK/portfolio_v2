import React from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/search-icon.png';

const SearchInput = ({ input, setInput, clearSearch }) => {
  return (
    <Styles>
      <img src={searchIcon} alt='Search Icon' />
      <input
        placeholder='Search Writing'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={clearSearch}>Clear</button>
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  position: fixed;
  display: flex;
  top: 90px;
  width: 100%;
  padding-bottom: 10px;
  background: #fcfcfa;
  z-index: 5;

  img {
    width: 20px;
    height: 20px;
    position: fixed;
    margin: 4px 0 0 2px;
  }

  input {
    border: none;
    background: #fcfcfa;
    border-bottom: 1px solid #d3d3d3;
    margin: 5px 1% 5px 1%;
    padding: 0 0 3px 30px;
    width: 74%;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 22%;
    height: 22px;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    margin-top: 5px;

    &:focus {
      outline: none;
    }
  }
`;
