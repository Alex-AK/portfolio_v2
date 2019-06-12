import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import coffee_menu from '../../assets/coffee-background-landing.jpg';
import content from '../../content/main';

import Button from './Button';

const Landing = props => {
  const [about] = useState(content.landing);
  const [navigation] = useState(content.navigation);
  return (
    <Styles>
      <img src={coffee_menu} alt='coffee menu' />
      <div>
        <h1>{about.title}</h1>
        <h3>{about.sub_title}</h3>
        <div className='buttons'>
          {navigation.map(button => {
            return <Button title={button} />;
          })}
        </div>
      </div>
    </Styles>
  );
};

export default Landing;

const Styles = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84.7vh;
  position: relative;
  margin: 0 auto;

  h3 {
    width: 650px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  p {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 500;
  }

  img {
    position: fixed;
    z-index: -1;
    opacity: 0.08;
    left: 15%;
    top: 7%;
    height: 600px;

    @media (max-width: 1600px) {
      top: 4%;
      left: 4%;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .buttons {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
