import React from "react";
import styled from "styled-components";

// components
import Button from "../General/Button";
import DisplayCount from "./DisplayCount";

const SearchInput = ({ input, setInput, clearSearch, resultLength }) => {
  return (
    <Styles>
      <div>
        <input
          placeholder="Search Writing"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button clearSearch={clearSearch} title="clear" extra_small non_link>
          Clear
        </Button>
      </div>

      <DisplayCount resultLength={resultLength} />
    </Styles>
  );
};

export default SearchInput;

const Styles = styled.div`
  position: fixed;
  top: 100px;
  width: 100%;
  padding-bottom: 10px;
  background: #fcfcfa;
  z-index: 5;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
  }

  input {
    margin: 0 -2px 5px 0;
    padding: 5px;
    height: 25px;
    width: 80%;

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
