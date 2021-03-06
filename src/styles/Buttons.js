import { css } from "styled-components";

// button animations from -
export const Buttons = css`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    cursor: pointer;

    svg {
      border-radius: 4px;
      height: 40px;
      width: 110px;
      fill: none;
      stroke-width: 5;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);

      .o1 {
        stroke: rgba(#ffb341, 0.7);
        fill: #f9eee5;
        transition: all 1s ease-in-out;
      }

      .o2 {
        stroke: white;
        stroke-dasharray: 20 420;
        stroke-dashoffset: 20;
        transition: all 1s ease-in-out;
      }
    }

    span {
      position: absolute;
      margin: auto 0;
      text-transform: capitalize;
      letter-spacing: 2px;
      font-size: 1.5rem;
      color: #282828;
    }

    &:hover {
      svg {
        fill: #f9f0e5;
      }
      .o1 {
        fill: rgba(#cc8110, 0.3);
      }

      .o2 {
        stroke-dashoffset: -420;
      }
    }
  }

  .nav {
    @media (max-width: 700px) {
      /* display: none; */
    }
  }

  .small {
    margin-top: 20px;

    svg {
      height: 30px;
      width: 90px;
    }

    span {
      font-size: 1.2rem;
      letter-spacing: 1.5px;
    }
  }

  .extra_small {
    margin: -5px 0 0 -2px;

    svg {
      height: 25px;
      width: 60px;
      box-shadow: none;
      border: 1px solid #d3d3d3;

      .o1 {
        fill: transparent;
      }
      border-radius: 0 4px 4px 0;
    }

    span {
      font-size: 1.2rem;
      letter-spacing: 1.5px;
    }
  }
`;
