import React, { useState } from 'react';
import styled from 'styled-components';
import writing from '../../content/writing';

import Post from './Post';

const Content = () => {
  const [posts] = useState(writing);
  return (
    <Styles>
      {posts.map(post => {
        return <Post key={post.title} post={post} />;
      })}
    </Styles>
  );
};

export default Content;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 30px 0 280px;

  @media (max-width: 800px) {
    margin: 20px 30px 0 220px;
  }
  @media (max-width: 600px) {
    margin: 20px 30px 0 20px;
  }
`;
