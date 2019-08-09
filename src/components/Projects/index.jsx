import React, { useState } from 'react';
import content from '../../content/main';
import Project from './Project';
import PageTitle from '../General/PageTitle';
import styled from 'styled-components';

const Projects = ({ window_width }) => {
  const [state] = useState({
    projects: content.projects
  });

  return (
    <>
      <PageTitle title='Projects' />
      <h1 className='SEO'>
        Alex King - Software Developer - Project Page - Seattle, Wa.
      </h1>
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
