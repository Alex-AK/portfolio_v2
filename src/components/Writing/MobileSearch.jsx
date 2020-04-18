import React from "react";
import styled from "styled-components";

// components
import Button from "../General/Button";

const SearchInput = ({ input, setInput, clearSearch }) => {
  return (
    <Styles>
      <input
        placeholder="Search Writing"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button clearSearch={clearSearch} title="clear" extra_small non_link>
        Clear
      </Button>
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  position: fixed;
  display: flex;
  top: 100px;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
  background: #fcfcfa;
  z-index: 5;

  input {
    border: none;
    background: #fcfcfa;
    border-top: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-radius: 4px 0 0 4px;
    margin: 0 -2px 5px 0;
    padding: 5px;
    height: 25px;
    width: 80%;
    font-size: 13px;

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
