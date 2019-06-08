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

    @media (max-width: 700px) {
      margin: 0 5%;
    }
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: #282828;
    padding: 0 3px 8px 3px;
    text-transform: uppercase;
    font-size: 14px;
  }

  .active {
    border-bottom: 2px solid #282828;
    padding-bottom: 6px;
  }

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (max-width: 500px) {
    }
  }

  h2 {
    font-size: 20px;
    line-height: 1.25;
    margin-bottom: 40px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
