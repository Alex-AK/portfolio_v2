import { css } from "styled-components";

export const Global = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #282828;
    background: #fcfcfa;
    font-family: -apple-system, "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 800px) {
      margin: 0 5px;
    }
  }

  a {
    color: #282828;
    text-decoration: none;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 20px;
    max-width: 600px;

    line-height: 1.4;
    letter-spacing: 0.5px;

    margin-bottom: 25px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.02);

    @media (max-width: 800px) {
      font-size: 16px;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  .heavy {
    font-weight: 500;
  }

  p {
    margin-bottom: 8px;
    line-height: 1.5;
    letter-spacing: 0.35px;
    max-width: 750px;

    @media (max-width: 800px) {
      font-size: 15px;
      max-width: 100%;
    }
  }

  .hyperlink {
    border-bottom: 2.5px solid #f4e4d4;
    padding-bottom: 1px;
    cursor: pointer;

    &:hover {
      border-bottom: none;
    }
  }

  ul {
    margin-left: 20px;

    li {
      margin: 0 0 5px 10px;
      font-size: 14px;
      list-style-type: circle;
      line-height: 1.25;
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
