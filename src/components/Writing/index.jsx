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
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
    });

    client
      .getEntries({ content_type: 'projectCaseStudy' })
      .then(res => setPosts(res.items.reverse()))
      .catch(err => console.log(err));
  }, []);

  // if navigating to writing page through a topic link, get topic.
  useEffect(() => {
    if (props.location.state) {
      setInput(props.location.state.queryString);
    }
  }, [props.location]);

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
    window.scroll(0, 0);
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
