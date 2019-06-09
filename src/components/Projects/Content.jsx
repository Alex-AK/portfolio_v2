import React from 'react';
import styled from 'styled-components';
import More from './More';
const Content = ({ title, intro, p_1, p_2, links }) => {
  return (
    <Styles>
      <h3>{title}</h3>
      <p>{intro}</p>
      <p>{p_1}</p>
      <p>{p_2}</p>
      <More links={links} />
    </Styles>
  );
};

export default Content;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 50%;
  max-width: 600px;
  margin: 60px 40px 0 50px;

  @media (max-width: 800px) {
    width: 96%;
    margin: 0 auto;
  }
`;
