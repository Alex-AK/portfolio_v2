import React from "react";
import styled from "styled-components";

// component imports
import More from "../General/More";
import Divider from "../General/Divider";

// helper function imports
import {
  renderIntroduction,
  renderSummary,
  mapImages,
  mapFeatures,
  renderTechnologyAndContributors,
  renderEnd,
} from "./renderContentModule";

const Post = ({ post }) => {
  // de-structure incoming content
  // ordered in display order
  const { title, introduction, content, features, mainImage, images } = post;
  const { projectSummary, contributors, technology, links, inspired } = post;

  return (
    <>
      <Styles>
        {introduction &&
          renderIntroduction(title, mainImage, introduction, content)}

        {features && mapFeatures(features)}

        {images && mapImages(images)}

        {projectSummary && renderSummary(projectSummary)}

        {(technology || contributors) &&
          renderTechnologyAndContributors(technology, contributors)}

        {links && <More links={links} />}

        {renderEnd(inspired)}
      </Styles>

      <Divider />
    </>
  );
};

export default Post;

const Styles = styled.div`
  margin: 20px 20px 40px 20px;

  @media (max-width: 1100px) {
    p,
    li {
      max-width: 100%;
    }
  }

  h4 {
    margin: 30px 0 15px 0;
    font-weight: 500;
  }

  .introduction {
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }

    .landing-image {
      margin-bottom: 10px;
      display: inline;
      float: right;

      img {
        margin: 0 0 10px 50px;
        width: 400px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        border: 1px solid #d3d3d3;
        border-radius: 3px;

        @media (max-width: 950px) {
          width: 100%;
          margin: 10px 0;
        }
      }
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 30px 0;

    @media (max-width: 800px) {
      width: 100%;
    }

    img {
      width: 750px;
      margin: 10px 0;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      border: 1px solid #d3d3d3;

      @media (max-width: 1100px) {
        width: 100%;
      }
    }
  }
  .caption {
    text-align: center;
    font-size: 13px;
    margin-bottom: 20px;
  }

  .testimonial {
    font-style: italic;
    margin: 20px 0;
    padding: 10px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    font-size: 14px;
  }

  .contributors-technology {
    display: flex;
    margin: 5px 0;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    div {
      width: 50%;

      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }

  .end {
    font-weight: 500;
    margin: 40px 0 -30px 100px;
    text-align: right;

    @media (max-width: 800px) {
      margin: 20px 0 -30px 0;
    }

    a {
      font-size: 11px;
      text-transform: capitalize;
    }

    p {
      font-size: 11px;
    }
  }

  a {
    /* for markdown anchor tag styling */
    /* this simply replicates the .hyperlink class */
    border-bottom: 2.5px solid #f4e4d4;
    padding-bottom: 1px;
    cursor: pointer;

    &:hover {
      border-bottom: none;
    }
  }
`;
