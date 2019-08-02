import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import content from '../../content/main';

import alex_photo from '../../assets/alex_king_portfolio.jpg';

const About = props => {
  const [about] = useState(content.landing);
  return (
    <>
      <Styles>
        <img src={alex_photo} alt='Alex King, Software Developer' />

        <div>
          <h1>{about.title}</h1>
          <h3>
            {about.sub_title} Take a look at my{' '}
            <Link to='/projects' className='hyperlink'>
              projects,
            </Link>{' '}
            and{' '}
            <Link to='/writing' className='hyperlink'>
              writing.
            </Link>{' '}
            If you'd like to work with me{' '}
            <Link to='/contact' className='hyperlink'>
              reach out.
            </Link>{' '}
          </h3>
          <h3 style={{ marginTop: 20 }}>
            <Link to='/contact' className='hyperlink'>
              Looking for mentorship?
            </Link>{' '}
            I'm available.
          </h3>
        </div>
      </Styles>
    </>
  );
};

export default About;

const Styles = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: baseline;
  }
  @media (max-width: 450px) {
    margin: -20px 0 -100px 0;
  }

  @media (max-width: 350px) {
    margin: 0;
  }

  img {
    border-radius: 100%;
    width: 190px;
    margin-right: 80px;

    @media (max-width: 1000px) {
      width: 160px;
      margin-right: 40px;
    }

    @media (max-width: 800px) {
      margin: 0 0 40px 3%;
      width: 160px;
    }
  }

  div {
    @media (max-width: 800px) {
      margin: 0 3%;
    }
  }

  h3 {
    width: 600px;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  p {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 500;
  }
`;
