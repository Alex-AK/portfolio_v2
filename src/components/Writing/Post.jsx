import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import More from '../Projects/More';

const Post = ({ post }) => {
  const { title, content, testimonial, name, links } = post;
  const { p_1, p_2, p_3 } = content;

  const renderTestimonial = () => {
    return (
      <div>
        <p className='testimonial'>{testimonial}</p>
        <p className='name'>{name}</p>
      </div>
    );
  };

  return (
    <>
      <Styles>
        <h3 className='post-title'>{title}</h3>
        {testimonial && renderTestimonial()}
        <p>{p_1}</p>
        <p>{p_2}</p>
        <p>{p_3}</p>
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

  .testimonial {
    font-style: italic;
    margin: 20px 0;
    padding: 10px 0;
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
