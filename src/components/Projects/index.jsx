import React, { useEffect } from "react";
import styled from "styled-components";

// components
import Divider from "../General/Divider";
import Project from "./Project";
import PageTitle from "../General/PageTitle";

// assets
import content from "../../content/main";

const Projects = ({ window_width }) => {
  const { projects } = content;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 className="SEO">Alex King - Software Developer - Seattle, Wa.</h1>

      <PageTitle title="Projects" />

      <Styles>
        {projects.map((project) => (
          <div key={project.title}>
            <Project project={project} />
            <Divider />
          </div>
        ))}
      </Styles>
    </>
  );
};

export default Projects;

const Styles = styled.div`
  margin-top: 40px;

  &:last-child {
    margin-bottom: 80px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 30px auto 0 auto;
  }
`;
