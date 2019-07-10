import React from 'react';
import Images from './Images';
import Content from './Content';
import styled from 'styled-components';

const Project = props => {
  const { title, intro, content, images, links } = props.project;

  return (
    <>
      <Styles>
        <Images images={images} title={title} />
        <Content
          title={title}
          intro={intro}
          p_1={content.p_1}
          p_2={content.p_2}
          p_3={content.p_3}
          p_4={content.p_4}
          links={links}
        />
      </Styles>
      <div className='divider'>
        <span />
      </div>
    </>
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
