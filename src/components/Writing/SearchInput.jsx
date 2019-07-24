import React from 'react';
import styled from 'styled-components';

// import searchIcon from '../../assets/search-icon.png';
import Button from '../Landing/Button';

const SearchInput = ({ input, setInput, clearSearch }) => {
  return (
    <Styles>
      {/* <img src={searchIcon} alt='Search Icon' /> */}
      <input
        aria-label='search input'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button clearSearch={clearSearch} title='clear' full_width non_link>
        Clear
      </Button>
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  display: flex;
  margin-bottom: 15px;

  img {
    width: 18px;
    height: 18px;
    position: absolute;
    margin: 11px 0 0 2px;
  }

  input {
    border: none;
    background: #fcfcfa;
    border-bottom: 1px solid #d3d3d3;
    margin: 10px 0 5px 0;
    padding: 0 0 3px 2px;
    width: 200px;
    font-size: 13px;

    @media (max-width: 800px) {
      width: 150px;
      font-size: 14px;
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
