import { css } from 'styled-components';

export const Global = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #282828;
    background: #fcfcfa;
    font-family: -apple-system, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    font-size: 40px;
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
    line-height: 1.35;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  .heavy {
    font-weight: 500;
  }

  .page-title {
    margin: 40px 10px;
    padding-left: 100px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media (max-width: 800px) {
      padding-left: 40px;
      margin: 20px 0 0 0;
    }

    div {
      display: inline;
      padding: 0 20px;
    }

    &:before,
    &:after {
      position: absolute;
      top: 51%;
      overflow: hidden;
      width: 100%;
      height: 1px;
      content: '\a0';
      background: #d3d3d3;
    }
    &:before {
      margin-left: -100%;
    }
  }

  p {
    margin-bottom: 8px;
    line-height: 1.25;
    max-width: 750px;

    @media (max-width: 800px) {
      font-size: 15px;
      max-width: 100%;
    }
  }

  .divider {
    height: 1px;
    width: 500px;
    margin: 40px auto 30px auto;
    background: #d3d3d3;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    &:last-child {
      display: none;
    }

    @media (max-width: 800px) {
      width: 90%;
      margin: 20px auto;
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
`;
