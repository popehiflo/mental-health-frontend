import React from 'react';
import styledComponents from 'styled-components';
import CategorieCard from '../CategorieCard/CategorieCard';
import { dataCategories } from '../../dataFake';

const CategoriesContainer = styledComponents.section``;

const ContainerBox = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  gap: 2rem;
`;

const CategoriesPopular = () => (
  <CategoriesContainer id="popular-categories">
    <h1 className="section-heading">
      categorías
      {' '}
      <span>
        más buscadas
      </span>
    </h1>
    <ContainerBox>
      {dataCategories.map((category) => (
        <CategorieCard key={category.id} category={category} />
      ))}
    </ContainerBox>
  </CategoriesContainer>
);

export default CategoriesPopular;
