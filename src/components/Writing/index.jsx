import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import * as contentful from 'contentful';

import Content from './Content';
import SideBar from './SideBar';

const Writing = props => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: '23hwvl7gwky6',
      accessToken: '1Jki7kkgqje214FW_I8WKQX6Nk6tGarswGSzhBwvctE'
    });

    client
      .getEntries({ content_type: 'projectCaseStudy' })
      .then(res => setPosts(res.items))
      .catch(err => console.log(err));
  }, []);

  // if navigating to writing page through a topic link, get topic.
  let topic = props.history.location.pathname.slice(9);

  useEffect(() => {
    setInput(topic);
  }, [topic]);

  // filter options
  const fuse_options = {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      'fields.title',
      'fields.introduction',
      'fields.projectGoals',
      'fields.searchTerms'
    ]
  };

  // filter search input
  const fuse = new Fuse(posts, fuse_options);
  let result = fuse.search(input);

  const clearSearch = () => {
    setInput('');
  };

  return (
    <>
      <h2 className='page-title'>
        <div>Writing</div>
      </h2>
      <Styles>
        <SideBar input={input} setInput={setInput} clearSearch={clearSearch} />
        <Content posts={input.length > 0 ? result : posts} />
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.div`
  display: flex;
`;
