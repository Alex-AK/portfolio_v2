import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Contact = () => {
  return (
    <Styles>
      <h3>If you'd like to send me a message, use the form below.</h3>
      <Form />
    </Styles>
  );
};

export default Contact;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* min-height: calc(100vh - 280px); */

  h3 {
    margin-bottom: 40px;
  }

  min-height: calc(100vh - 140px);
`;
