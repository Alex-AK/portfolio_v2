import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <h2 className='page-title'>
      <div>{title}</div>
    </h2>
  );
};

export default PageTitle;
