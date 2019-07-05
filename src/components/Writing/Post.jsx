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
    mainImage,
    images,
    projectSummary,
    roles,
    technology,
    links,
    inspired
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

  const renderInspired = () => {
    return (
      <p>
        Inspired by{' '}
        <a
          href={inspired.url}
          className='hyperlink'
          target='_blank'
          rel='noopener noreferrer'>
          {inspired.inspiredBy}
        </a>
      </p>
    );
  };

  return (
    <>
      <Styles>
        <div className='introduction'>
          <div>
            <h3 className='post-title heavy'>{title}</h3>
            <p>{introduction}</p>
            <p>{projectGoals}</p>
          </div>
          <div>
            <img
              className='landing-image'
              src={mainImage.fields.file.url}
              alt={mainImage.fields.title}
            />
            <p className='caption'>{mainImage.fields.description}</p>
          </div>
        </div>

        <h4>Features</h4>
        {features && mapFeatures()}

        {images && mapImages()}

        <h4>Summary</h4>
        {projectSummary && <p>{projectSummary}</p>}

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

          {inspired && renderInspired()}
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

  h4 {
    margin: 15px 0 10px 0;
    font-weight: 500;
  }

  .introduction {
    display: flex;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }

    .landing-image {
      width: 400px;
      margin: 0 0 10px 20px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

      @media (max-width: 800px) {
        width: 100%;
        margin: 10px 0;
      }
    }
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    img {
      width: 750px;
      margin-bottom: 10px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

      @media (max-width: 800px) {
        width: 100%;
      }
    }
  }
  .caption {
    text-align: center;
    font-size: 13px;
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
