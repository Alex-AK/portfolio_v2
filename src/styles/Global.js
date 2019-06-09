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
    font-size: 14px;
    font-weight: 500;
    color: #282828;
    text-decoration: none;
    text-transform: uppercase;
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
    line-height: 1.25;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  .page-title {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.25;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }
`;
