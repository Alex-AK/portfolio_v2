import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fuse from "fuse.js";
import * as contentful from "contentful";

// components
import Content from "./Content";
import Loader from "../General/Loader";
import MobileSearch from "./MobileSearch";
import PageTitle from "../General/PageTitle";
import SideBar from "./SideBar";

const Writing = ({ window_width, location }) => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries()
      .then(({ items }) => {
        setPosts(items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // if navigating to writing page through a topic link, get topic.
  useEffect(() => {
    if (location.state) {
      setInput(location.state.queryString);
    }
  }, [location]);

  // filter options
  const fuse_options = {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      "fields.title",
      "fields.introduction",
      "fields.projectGoals",
      "fields.searchTerms",
    ],
  };

  // filter search input
  const fuse = new Fuse(posts, fuse_options);
  let result = fuse.search(input);

  const applyFilter = (filter) => {
    setInput(filter);
    window.scroll(0, 0);
  };
  const clearSearch = () => {
    setInput("");
    window.scroll(0, 0);
  };

  return (
    <>
      <PageTitle title="writing" />
      <h1 className="SEO">Alex King - Software Developer - Seattle Wa.</h1>

      <Styles>
        {window_width > 600 ? (
          <SideBar
            input={input}
            applyFilter={applyFilter}
            clearSearch={clearSearch}
            setInput={setInput}
          />
        ) : (
          <MobileSearch
            input={input}
            applyFilter={applyFilter}
            clearSearch={clearSearch}
          />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <Content posts={input.length > 0 ? result : posts} />
        )}
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.div`
  display: flex;
`;
