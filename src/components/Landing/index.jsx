import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Landing = props => {
  return (
    <Styles>
      <div>
        <h1>{props.content.title}</h1>
        <h2>{props.content.sub_title}</h2>
        <div className='buttons'>
          {props.navigation.map(title => (
            <Button key={title} title={title} />
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default Landing;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;

  .buttons {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;
