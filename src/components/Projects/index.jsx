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
      <h1>PROJECTS</h1>
      {state.projects.map(project => (
        <Project project={project} />
      ))}
    </Styles>
  );
};

export default Projects;

const Styles = styled.div`
  max-width: 1200px;
  margin: 60px auto 0 auto;

  h1 {
    width: 210px;
    margin: 0 auto;

    @media (max-width: 800px) {
      width: 160px;
    }
  }

  &:last-child {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 40px auto 0 auto;
  }
`;
