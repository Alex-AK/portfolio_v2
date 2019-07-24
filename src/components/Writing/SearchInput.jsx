import React from 'react';
import styled from 'styled-components';

import searchIcon from '../../assets/search-icon.png';
import Button from '../Landing/Button';

const SearchInput = ({ input, setInput, clearSearch }) => {
  return (
    <Styles>
      <img src={searchIcon} alt='Search Icon' />
      <input
        placeholder='Search Writing'
        aria-label='search input'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button clearSearch={clearSearch} title='clear' full_width non_link>
        Clear
      </Button>
      {/* <button onClick={clearSearch}>Clear Search</button> */}
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  display: flex;
  margin-bottom: 20px;

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    margin: 4px 0 0 2px;
  }

  input {
    border: none;
    background: #fcfcfa;
    border-bottom: 1px solid #d3d3d3;
    margin: 5px 0 5px 0;
    padding: 0 0 3px 28px;
    width: 195px;
    font-size: 16px;

    @media (max-width: 800px) {
      width: 145px;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 240px;
    margin-bottom: 25px;
    border: 1px solid #d3d3d3;
    border-radius: 3px;

    @media (max-width: 800px) {
      width: 200px;
    }

    &:focus {
      outline: none;
    }
  }
`;
