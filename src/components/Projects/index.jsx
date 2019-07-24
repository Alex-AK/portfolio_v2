import React, { useState } from 'react';
import content from '../../content/main';
import Project from './Project';
import PageTitle from '../Navigation/PageTitle';
import styled from 'styled-components';

const Projects = ({ window_width }) => {
  const [state] = useState({
    projects: content.projects
  });

  return (
    <>
      {window_width <= 600 && <PageTitle title='Projects' />}
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
  margin-top: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 30px auto 0 auto;
  }
`;
