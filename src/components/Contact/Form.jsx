import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Landing/Button';

const Form = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  // // if local storage has form data, set form to saved data
  // const form_data = JSON.parse(localStorage.getItem('contact'));
  // let name = form_data ? form_data.name : values.name;
  // let email = form_data ? form_data.email : values.email;
  // let message = form_data ? form_data.message : values.message;

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
    // localStorage.setItem('contact', JSON.stringify(values));
  };

  return (
    <Styles>
      <form name='contact' onSubmit={handleSubmit} netlify action='/'>
        <label htmlFor='name'>
          Name
          <input
            onChange={handleChange}
            name='name'
            type='text'
            value={values.name}
            required
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            onChange={handleChange}
            label='Email'
            name='email'
            type='email'
            value={values.email}
            required
          />
        </label>
        <label htmlFor='message'>
          Message
          <textarea
            onChange={handleChange}
            label='Message'
            name='message'
            type='text'
            value={values.message}
            required
          />
        </label>
        <p className='hidden'>
          <label>
            Don’t fill this out if you're human: <input name='bot-field' />
          </label>
        </p>
        <div>
          <Button title='submit' />
        </div>
      </form>
    </Styles>
  );
};

export default Form;

const Styles = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100%;
  }

  label {
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  input {
    margin: 5px 0 20px 0;
    border-radius: 3px;
    border: 1px solid #282828;
    height: 30px;
    background: white;
    font-size: 15px;
  }

  textarea {
    margin: 5px 0 25px 0;
    border-radius: 3px;
    border: 1px solid #282828;
    max-width: 350px;
    min-width: 350px;
    min-height: 50px;
    max-height: 200px;
    font-size: 15px;
  }

  .button {
    margin: 0;
  }

  .hidden {
    display: none;
  }
`;
