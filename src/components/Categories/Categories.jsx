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

const Categories = () => (
  <CategoriesContainer>
    <h1 className="section-heading">categorias</h1>
    <ContainerBox>
      {dataCategories.map((category) => (
        <CategorieCard key={category.id} category={category} />
      ))}
    </ContainerBox>
  </CategoriesContainer>
);

export default Categories;
