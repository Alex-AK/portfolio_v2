import React from 'react';
import styled from 'styled-components';
import email from '../../assets/envelope-50.png';
import github from '../../assets/github-64.png';
import linkedIn from '../../assets/linkedin-50.png';

const Footer = () => {
  return (
    <Styles>
      <img src={github} alt='github icon' />
      <img src={email} alt='email icon' />
      <img src={linkedIn} alt='linkedIn icon' />
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
`;
