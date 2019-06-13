import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import content from '../../content/main';

const About = props => {
  const [about] = useState(content.landing);
  return (
    <Styles>
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
        <p>
          <Link to='/writing/mentorship' className='hyperlink'>
            Looking for mentorship?
          </Link>{' '}
          I'm available.
        </p>
      </div>
    </Styles>
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
    flex-direction: column-reverse;
  }

  div {
    @media (max-width: 800px) {
      margin: 0 5%;
    }
  }

  h3 {
    width: 600px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  p {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 500;
  }
`;
