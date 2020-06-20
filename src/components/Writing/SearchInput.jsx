import React from "react";
import styled from "styled-components";

// import searchIcon from '../../assets/search-icon.png';
import Button from "../General/Button";

const SearchInput = ({ input, setInput, clearSearch }) => {
  return (
    <Styles>
      <input
        aria-label="search input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button clearSearch={clearSearch} title="clear" extra_small non_link />
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  display: flex;

  img {
    width: 18px;
    height: 18px;
    position: absolute;
    margin: 11px 0 0 2px;
  }

  input {
    margin: 0 0 5px 0;
    padding: 5px;
    height: 25px;
    width: 200px;

    @media (max-width: 800px) {
      width: 150px;
    }

    &:focus {
      outline: none;
    }
  }
`;
