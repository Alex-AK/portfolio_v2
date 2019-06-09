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
        <h3>{props.content.sub_title}</h3>
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

  div {
    @media (max-width: 600px) {
      margin: 0 5%;
    }
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

  h3 {
    width: 600px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .buttons {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;
