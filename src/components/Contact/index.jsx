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

  @media (max-height: 1000px) {
    margin-bottom: -60px;
  }

  .two-column {
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  .left-column {
    margin: -50px 80px 0 0;
    width: 350px;
    text-align: center;

    @media (max-width: 800px) {
      text-align: left;
      margin: 30px 0;
    }
  }
`;
