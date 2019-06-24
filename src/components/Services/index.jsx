import React, { useState } from 'react';
import styled from 'styled-components';
import content from '../../content/main';

import Card from './ServiceCard';
import Contact from '../Contact';

const Services = () => {
  const [services] = useState(content.services);
  const [work_together] = useState(content.work_together);

  return (
    <Styles>
      {/* Services section */}
      <h2 className='page-title'>
        <div>Services</div>
      </h2>
      <h3 className='service-summary'>
        Do non laborum nisi nostrud qui elit voluptate ex. Veniam id magna
        tempor qui sint in exercitation in ipsum irure deserunt tempor nostrud.
      </h3>
      <div className='service-cards'>
        {services.map(service => (
          <Card content={service} />
        ))}
      </div>

      {/* How to work together section */}
      <h2 className='page-title'>
        <div>How to work together</div>
      </h2>
      <div className='work-together-cards'>
        {work_together.map(work => (
          <Card content={work} />
        ))}
      </div>

      {/* Contact form section */}
      <Contact />
    </Styles>
  );
};

export default Services;

const Styles = styled.div`
  margin: 0 auto;

  .service-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .work-together-cards {
  }

  .service-summary {
    margin: 30px 0 50px 20px;
    width: 675px;

    @media (max-width: 800px) {
      margin: 30px 0px;
      padding: 0 20px;
      width: 100%;
    }
  }
`;
