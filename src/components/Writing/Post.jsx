import React from 'react';
import styled from 'styled-components';
import More from '../Projects/More';

const Post = ({ post }) => {
  const { title, sub_title, content, testimonial, links, date } = post;
  const { p_1, p_2, p_3 } = content;

  return (
    <>
      <Styles>
        <h3 className='post-title'>{title}</h3>
        <p className='sub-title'>{sub_title}</p>
        <p>{testimonial}</p>
        <p>{p_1}</p>
        <p>{p_2}</p>
        <p>{p_3}</p>
        <p>{date}</p>
        {links && <More links={links} />}
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
`;
