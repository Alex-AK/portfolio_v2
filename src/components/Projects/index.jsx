import React, { useState } from 'react';
import content from '../../content/main';
import Project from './Project';
import PageTitle from '../Navigation/PageTitle';
import styled from 'styled-components';

const Projects = () => {
  const [state] = useState({
    projects: content.projects
  });

  return (
    <>
      <PageTitle title='Projects' />
      <Styles>
        {state.projects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </Styles>
    </>
  );
};

export default Projects;

const Styles = styled.div`
  margin-top: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 60px auto 0 auto;
  }
`;
