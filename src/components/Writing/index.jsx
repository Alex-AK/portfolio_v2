import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';

import writing from '../../content/writing';

import Content from './Content';
import SideBar from './SideBar';

const Writing = props => {
  const [input, setInput] = useState('');
  const [posts] = useState(writing);

  // if navigating to writing page through a topic link, get topic.
  let topic = props.history.location.pathname.slice(9);

  useEffect(() => {
    setInput(topic);
  }, []);

  // filter options
  const fuse_options = {
    shouldSort: true,
    threshold: 0.5,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: ['title', 'author.firstName']
  };

  // filter search input
  const fuse = new Fuse(posts, fuse_options);
  let result = fuse.search(input);

  return (
    <>
      <h2 className='page-title'>
        <div>Writing</div>
      </h2>
      <Styles>
        <SideBar input={input} setInput={setInput} />
        <Content posts={input.length > 0 ? result : posts} />
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.div`
  display: flex;
`;
