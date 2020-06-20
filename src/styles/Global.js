import { css } from "styled-components";

export const colors = {
  background: "#fcfcfa",
  fontColor: "#282828",
  hover: "#f4e4d4",
  border: "#d3d3d3",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.05)",
};

export const Global = css`
  * {
    box-sizing: border-box;
  }

  html {
    /* 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    margin: 0;
    color: ${colors.fontColor};
    background: ${colors.background};
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 800px) {
      margin: 0 5px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    margin-bottom: 10px;
    padding: 0 3px 8px 3px;
    cursor: pointer;

    p {
      font-size: 1.4rem;
    }
  }

  .links {
    a {
      text-transform: capitalize;
    }

    a:hover {
      border-bottom: 3px solid ${colors.hover};
      padding-bottom: 5px;
    }
  }

  .active {
    border-bottom: 3px solid ${colors.hover};
    padding-bottom: 5px;
  }

  h1,
  h2,
  h3,
  h4,
  label {
    text-shadow: ${colors.textShadow};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  h1 {
    font-size: 3.6rem;
    margin-bottom: 20px;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 2.4rem;
    margin-bottom: 15px;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2rem;

    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    max-width: 600px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 8px;
    line-height: 1.5;
    letter-spacing: 0.4px;
    max-width: 750px;

    @media (max-width: 800px) {
      font-size: 15px;
      max-width: 100%;
    }
  }

  input {
    font-size: 1.6rem;
    border: none;
    background: inherit;
    border-top: 1px solid ${colors.border};
    border-left: 1px solid ${colors.border};
    border-bottom: 1px solid ${colors.border};
    border-radius: 4px 0 0 4px;
  }

  .hyperlink {
    border-bottom: 2.5px solid ${colors.hover};
    padding-bottom: 1px;
    transition: background-color 0.3s linear;
    cursor: pointer;
    margin: 0 7px;

    :hover {
      border-bottom: 2.5px solid ${colors.hover};
      background: ${colors.hover};
    }
  }

  .extra-top-margin {
    margin-top: 30px;
  }

  .no-right-margin {
    margin-right: 0;
  }

  .no-left-margin {
    margin-left: 0;
  }

  ul {
    margin-left: 20px;

    li {
      margin: 0 0 5px 10px;
      font-size: 1.4rem;
      list-style-type: circle;
      line-height: 1.2;
      letter-spacing: 0.15px;
    }
  }

  .SEO {
    color: transparent;
    text-shadow: none;
    height: 0;
    width: 0;
    margin: 0;
  }
`;
