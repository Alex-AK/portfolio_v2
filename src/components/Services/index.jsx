import React, { useState } from 'react';
import styled from 'styled-components';
import content from '../../content/main';

import ServiceCard from './ServiceCard';

const Services = () => {
  const [services] = useState(content.services);

  return (
    <Styles>
      <h2 className='page-title'>Services</h2>
      <h3 className='service-summary'>
        Do non laborum nisi nostrud qui elit voluptate ex. Veniam id magna
        tempor qui sint in exercitation in ipsum irure deserunt tempor nostrud.
      </h3>
      <div className='service-cards'>
        {services.map(service => (
          <ServiceCard service={service} />
        ))}
      </div>
    </Styles>
  );
};

export default Services;

const Styles = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .service-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .service-summary {
    margin: 40px auto 50px auto;
    width: 675px;
  }
`;
