import React from "react";
import styled from "styled-components";

// components
import Content from "./Content";
import Images from "./Images";

const Project = ({ project }) => {
  const { title, intro, content, images, links } = project;
  const { p_1, p_2, p_3, p_4 } = content;

  return (
    <Styles>
      <Images images={images} title={title} />
      <Content
        title={title}
        intro={intro}
        p_1={p_1}
        p_2={p_2}
        p_3={p_3}
        p_4={p_4}
        links={links}
      />
    </Styles>
  );
};

export default Project;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0 80px 0;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 40px 0 0 0;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;
