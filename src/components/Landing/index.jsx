import React from 'react';
import styled from 'styled-components';
import coffee_menu from '../../assets/coffee-background-landing.jpg';

import Button from './Button';

const Landing = props => {
  return (
    <Styles>
      <div>
        <img src={coffee_menu} alt='coffee menu' />
        <h1>{props.content.title}</h1>
        <h2>{props.content.sub_title}</h2>
        <div className='buttons'>
          {props.navigation.map(title => (
            <Button key={title} title={title} />
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default Landing;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  position: relative;

  img {
    position: fixed;
    z-index: -1;
    opacity: 0.2;
    left: 15%;
    top: 7%;
    height: 600px;

    @media (max-width: 1600px) {
      left: 3%;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }

  h2 {
    width: 600px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .buttons {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;
