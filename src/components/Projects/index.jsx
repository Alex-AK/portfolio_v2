import React, { useState } from 'react';
import content from '../../content/main';
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
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
