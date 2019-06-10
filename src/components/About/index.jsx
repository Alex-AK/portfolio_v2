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
        <h3>{about.sub_title}</h3>
        <p>
          Mellow natured adventure seeker who thrives in team settings with a
          passion for quality. Take a look at my{' '}
          <Link to='/projects' className='hyperlink'>
            projects
          </Link>{' '}
          and
          <Link to='/writing' className='hyperlink'>
            writing
          </Link>
          . I'm available for hire.
        </p>
        <p>p.s. I'm available for presentations and mentorship.</p>
      </div>
      <img src={about.image} alt='Alex King Portrait' />
    </Styles>
  );
};

export default About;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87vh;
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

  div {
    width: 60%;
    margin-right: 40px;
    @media (max-width: 800px) {
      width: 90%;
      margin: 0 5%;
    }
  }

  img {
    height: 200px;
    border-radius: 50%;
    @media (max-width: 800px) {
      display: 150px;
    }
    @media (max-width: 600px) {
      margin-bottom: 70px;
    }
  }

  h3 {
    width: 600px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;
