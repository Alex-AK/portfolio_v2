import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Contact = props => {
  return (
    <Styles
      style={
        props.contact_page
          ? { minHeight: 'calc(100vh - 140px)' }
          : { margin: '100px 0' }
      }>
      <div className='two-column'>
        <div className='left-column'>
          <h2>Contact</h2>
          <h3>
            Feel free to send me a message with work inquiries or further
            questions.
          </h3>
        </div>
        <Form />
      </div>
    </Styles>
  );
};

export default Contact;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .two-column {
    display: flex;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  .left-column {
    margin: 20px 30px;
    width: 350px;

    @media (max-width: 800px) {
      margin: 30px 0;
    }
  }
`;
