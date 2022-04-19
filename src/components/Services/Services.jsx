import React from 'react';
import styledComponents from 'styled-components';
import { dataPopularServices } from '../../dataFake';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesContainer = styledComponents.section``;

const ContainerBox = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

const Services = () => (
  <ServicesContainer>
    <h1 className="section-heading">
      servicios
      {' '}
      <span>
        más buscados
      </span>
    </h1>
    <ContainerBox>
      {dataPopularServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </ContainerBox>
  </ServicesContainer>
);

export default Services;
