import React from 'react';
import Images from './Images';
import Content from './Content';
import styled from 'styled-components';

const Project = props => {
  const { images, title, intro, content } = props.project;

  return (
    <Styles>
      <Images images={images} title={title} />
      <Content
        title={title}
        intro={intro}
        p_1={content.p_1}
        p_2={content.p_2}
      />
    </Styles>
  );
};

export default Project;

const Styles = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 80px auto;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 40px auto 0 auto;
  }
`;
