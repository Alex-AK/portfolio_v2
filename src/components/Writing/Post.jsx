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
    contributors,
    technology,
    links,
    inspired
  } = post;

  const renderIntroduction = () => {
    const projectGoalsSplit = projectGoals.split('_');
    return (
      <div className='introduction'>
        <div className='landing-image'>
          <img src={mainImage.fields.file.url} alt={mainImage.fields.title} />
          <p className='caption'>{mainImage.fields.description}</p>
        </div>
        <p>{introduction}</p>

        <h4>Overview</h4>
        {projectGoalsSplit.map((paragraph, key) => (
          <p key={key}>{paragraph.split('_').pop()}</p>
        ))}
      </div>
    );
  };

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

  const mapContributors = () =>
    contributors.map(contributor => (
      <ul key={contributor.name}>
        <a href={contributor.link} target='_blank' rel='noopener noreferrer'>
          <li>{contributor.name}</li>
        </a>
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
        <h3 className='post-title heavy'>{title}</h3>
        {renderIntroduction()}

        {features && (
          <>
            <h4>Features</h4>
            {mapFeatures()}
          </>
        )}

        {images && (
          <>
            <h4>Project Images</h4>
            {mapImages()}
          </>
        )}

        {projectSummary && (
          <>
            <h4>Summary</h4>
            <p>{projectSummary}</p>
          </>
        )}

        {/* {testimonial && renderTestimonial()} */}

        <div className='contributors-technology'>
          <div>
            {technology && (
              <>
                <h4>Technologies Used</h4> {mapTechnology()}
              </>
            )}
          </div>
          <div>
            {contributors && (
              <>
                <h4>Contributors</h4> {mapContributors()}
              </>
            )}
          </div>
        </div>

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

  @media (max-width: 1100px) {
    p,
    li {
      max-width: 100%;
    }
  }

  h4 {
    margin: 20px 0 10px 0;
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
        margin: 0 0 10px 30px;
        width: 400px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

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
      margin-bottom: 10px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

      @media (max-width: 1100px) {
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

  .contributors-technology {
    display: flex;
    margin: 5px 0;

    div {
      width: 50%;
    }
  }

  .end {
    font-weight: 500;
    margin: 20px 0 -30px 0;
    text-align: right;

    a {
      font-size: 11px;
      text-transform: capitalize;
    }

    p {
      font-size: 11px;
    }
  }
`;
