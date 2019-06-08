import React from 'react';
import styled from 'styled-components';
import email from '../../assets/envelope-50.png';
import github from '../../assets/github-64.png';
import linkedIn from '../../assets/linkedin-50.png';

const Footer = () => {
  return (
    <Styles>
      <a href='https://github.com/alex-ak' target='_blank'>
        <img src={github} alt='github icon' />
      </a>
      <a href='mailto:hello@alex-ak.com' target='_blank'>
        <img src={email} alt='email icon' />
      </a>
      <a href='https://linkedin.com/in/alex-ak' target='_blank'>
        <img src={linkedIn} alt='linkedIn icon' />
      </a>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 350px;
  margin: 0 auto;

  img {
    width: 25px;
    margin: 0 15px;
  }

  a {
    text-decoration: none;
  }
`;
