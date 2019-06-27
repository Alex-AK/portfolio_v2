import React from 'react';
import styled from 'styled-components';
import More from './More';
const Content = ({ title, intro, p_1, p_2, p_3, p_4, links }) => {
  console.log(intro);
  return (
    <Styles>
      <h3 className='heavy'>{title}</h3>
      <p>{intro}</p>
      <ul>
        <li>{p_1}</li>
        <li>{p_2}</li>
        {p_3 && <li>{p_3}</li>}
        {p_4 && <li>{p_4}</li>}
      </ul>
      <More links={links} title={title} />
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

  ul {
    margin-left: 20px;

    li {
      margin-bottom: 8px;
      font-size: 14px;
      list-style-type: circle;
      line-height: 1.25;
    }
  }
`;
