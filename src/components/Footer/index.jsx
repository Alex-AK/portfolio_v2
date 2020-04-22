import React from "react";
import styled from "styled-components";

// assets
import email from "../../assets/envelope-50.png";
import github from "../../assets/github-64.png";
import linkedIn from "../../assets/linkedin-50.png";

const Footer = () => {
  return (
    <Styles>
      <a
        href="https://github.com/alex-ak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="github icon" />
      </a>
      <a
        href="mailto:hello@alex-ak.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={email} alt="email icon" />
      </a>
      <a
        href="https://linkedin.com/in/alex-ak"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} alt="linkedIn icon" />
      </a>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto 0 auto;
    left: 0;
  }

  img {
    width: 28px;
    margin: 0 15px;
  }

  a {
    text-decoration: none;
    z-index: 3;
  }
`;
