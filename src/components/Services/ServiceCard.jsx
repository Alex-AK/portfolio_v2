import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ service }) => {
  const { title, summary, l_1, l_2, l_3, l_4 } = service;
  return (
    <Styles>
      <h3 className='card-title'>{title}</h3>
      <p>{summary}</p>
      <div>
        <p>{l_1}</p>
        <p>{l_2}</p>
        <p>{l_3}</p>
        <p>{l_4}</p>
      </div>
    </Styles>
  );
};

export default ServiceCard;

const Styles = styled.div`
  width: 45%;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 20px 30px;

  .card-title {
    margin: 0 0 15px 0;
  }

  div {
    p {
      margin-bottom: 5px;
    }
  }
`;
