import React from 'react';
import Button from './Button';

const Landing = props => {
  return (
    <div>
      <h1>{props.content.title}</h1>
      <h2>{props.content.sub_title}</h2>
      {props.navigation.map(title => (
        <Button key={title} title={title} />
      ))}
    </div>
  );
};

export default Landing;
