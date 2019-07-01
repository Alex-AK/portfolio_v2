import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import More from '../Projects/More';

const Post = ({ post }) => {
  // de-structure incoming content
  // ordered in display order
  const {
    title,
    introduction,
    projectGoals,
    features,
    images,
    projectSummary,
    roles,
    technology,
    links
  } = post;

  const mapImages = () => {
    return images.map(image => {
      return (
        <div className='image-container' key={image.fields.title}>
          <img src={image.fields.file.url} alt={image.fields.title} />
          <p className='caption'>{image.fields.description}</p>
        </div>
      );
    });
  };

  const mapFeatures = () =>
    features.map(feature => (
      <ul key={feature}>
        <li>{feature}</li>
      </ul>
    ));

  const mapRoles = () =>
    roles.map(role => (
      <ul key={role}>
        <li>{role}</li>
      </ul>
    ));

  const mapTechnology = () =>
    technology.map(tech => (
      <ul key={tech}>
        <li>{tech}</li>
      </ul>
    ));

  const renderTestimonial = () => {
    return (
      <div>
        {/* <p className='testimonial'>{testimonial}</p> */}
        {/* <p className='name'>{name}</p> */}
      </div>
    );
  };

  return (
    <>
      <Styles>
        <h3 className='post-title heavy'>{title}</h3>
        <p>{introduction}</p>
        <p>{projectGoals}</p>

        <h4>Features</h4>
        {features && mapFeatures()}

        <h4>Summary</h4>
        {projectSummary && <p>{projectSummary}</p>}

        {images && mapImages()}

        {/* {testimonial && renderTestimonial()} */}

        <h4>Project Roles</h4>
        {roles && mapRoles()}

        <h4>Technologies Used</h4>
        {technology && mapTechnology()}

        {links && <More links={links} />}

        <div className='end'>
          <p>
            Written by{' '}
            <Link to='/about' className='hyperlink'>
              Alex King
            </Link>
          </p>
          <p>
            Inspired by{' '}
            <Link to='/about' className='hyperlink'>
              Name Goes Here
            </Link>
          </p>
        </div>
      </Styles>
      <div className='divider'>
        <span />
      </div>
    </>
  );
};

export default Post;

const Styles = styled.div`
  margin: 20px;

  p {
    /* custom for writing? */
  }

  h4 {
    margin: 15px 0 10px 0;
    font-weight: 500;
  }

  li {
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    img {
      width: 800px;
      margin-bottom: 10px;
    }

    .caption {
      font-size: 13px;
    }
  }

  .testimonial {
    font-style: italic;
    margin: 20px 0;
    padding: 10px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    font-size: 14px;
  }

  .end {
    font-size: 11px;
    font-weight: 500;
    margin: 20px 0 -30px 0;
    text-align: right;

    a {
      font-size: 11px;
      text-transform: capitalize;
    }
  }
`;
