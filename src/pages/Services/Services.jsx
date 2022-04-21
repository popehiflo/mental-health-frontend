import React from 'react';
import styledComponents from 'styled-components';
import ServicesPopular from '../../components/ServicesPopular/ServicesPopular';

const ServicesContainer = styledComponents.div`
  padding-top: 9rem;
`;

const ContainerFilter = styledComponents.div`
  padding: 1rem 9%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

const Filter = styledComponents.div`
  font-size: 1.8rem;
  text-align: center;
`;

const Select = styledComponents.select`
margin-top: 0.5rem;
padding: 0.5rem;
margin-right: 20px;
font-size: 1.8rem;
`;

const Option = styledComponents.option`
  background: #fff;
  border: var(--primary-light-border);
  border-radius: 0.5rem;
`;

const Services = () => (
  <ServicesContainer>
    <h1 className="section-heading">
      <span>categoria:</span>
      {' '}
      infantil
    </h1>
    <ContainerFilter>
      <Filter>
        Filtro X
        <Select className="btn-primary">
          <Option disabled selected>filtro 1</Option>
          <Option>10 min</Option>
          <Option>20 min</Option>
          <Option>30 min</Option>
        </Select>
      </Filter>
      <Filter>
        Filtro Y:
        <Select className="btn-primary">
          <Option disabled selected>duracion</Option>
          <Option>10 min</Option>
          <Option>20 min</Option>
          <Option>30 min</Option>
        </Select>
      </Filter>
      <Filter>
        Filtro Z:
        <Select className="btn-primary">
          <Option disabled selected>precio</Option>
          <Option>10 min</Option>
          <Option>20 min</Option>
          <Option>30 min</Option>
        </Select>
      </Filter>
    </ContainerFilter>
    <ServicesPopular />
  </ServicesContainer>
);

export default Services;
