import React from 'react';
import styled from 'styled-components';

import Post from './Post';

const Content = ({ posts }) => {
  return (
    <Styles>
      {posts.length > 0 ? (
        posts.map(post => {
          return <Post key={post.fields.title} post={post.fields} />;
        })
      ) : (
        <div className='no-content'>
          <h3>No writing with matching search criteria.</h3>
        </div>
      )}
    </Styles>
  );
};

export default Content;

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 30px 0 290px;

  &:last-child {
    margin-bottom: 50px;
  }

  @media (max-width: 800px) {
    margin: 40px 30px 0 230px;
  }
  @media (max-width: 600px) {
    margin: 80px 0 0 0;
  }

  .no-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75vh;
  }
`;
