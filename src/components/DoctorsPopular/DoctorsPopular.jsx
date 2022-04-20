import React from 'react';
import styledComponents from 'styled-components';
import { dataPopularDoctors } from '../../dataFake';
import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorsContainer = styledComponents.section``;

const ContainerBox = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

const DoctorsPopular = () => (
  <DoctorsContainer>
    <h1 className="section-heading">
      especialistas
      {' '}
      <span>
        destacados
      </span>
    </h1>
    <ContainerBox>
      {dataPopularDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </ContainerBox>
  </DoctorsContainer>
);

export default DoctorsPopular;
