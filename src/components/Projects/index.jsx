import React, { useState } from 'react';
import content from '../../content';
import Project from './Project';
import styled from 'styled-components';

const Projects = () => {
  const [state] = useState({
    projects: content.projects
  });

  return (
    <Styles>
      <h2 className='page-title'>Client Projects</h2>
      {state.projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </Styles>
  );
};

export default Projects;

const Styles = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  &:last-child {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }

  .divider {
    height: 2px;
    width: 500px;
    margin: 60px auto 50px auto;
    background: #282828;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

    &:last-child {
      display: none;
    }

    @media (max-width: 800px) {
      width: 90%;
      margin: 20px auto;
    }
  }
`;
