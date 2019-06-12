import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import coffee_menu from '../../assets/coffee-background-landing.jpg';
import content from '../../content/main';

import Button from './Button';

const Landing = props => {
  const [about] = useState(content.landing);
  return (
    <Styles>
      <div>
        <img src={coffee_menu} alt='coffee menu' />
        <div>
          <h1>{about.title}</h1>
          <h3>
            {about.sub_title}
            Take a look at my{' '}
            <Link to='/projects' className='hyperlink'>
              projects,
            </Link>{' '}
            <Link to='/services' className='hyperlink'>
              services,
            </Link>{' '}
            and{' '}
            <Link to='/writing' className='hyperlink'>
              writing.
            </Link>{' '}
            If you'd like to work with me, first check out my{' '}
            <Link to='/writing/values' className='hyperlink'>
              values
            </Link>{' '}
            then{' '}
            <Link to='/contact' className='hyperlink'>
              reach out.
            </Link>
          </h3>
          <p>
            Looking for mentorship? I'm available.{' '}
            <Link to='/writing/mentorship' className='hyperlink'>
              Read this first.
            </Link>
          </p>
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
  min-height: 93vh;
  position: relative;

  div {
    margin-right: 50px;

    @media (max-width: 800px) {
      margin: 0 5%;
    }
  }

  h3 {
    width: 650px;

    @media (max-width: 600px) {
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

// const Styles = styled.div`
//   max-width: 1200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 84.7vh;
//   position: relative;
//   margin: 0 auto;
// `;
