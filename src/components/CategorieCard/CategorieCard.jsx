import React from 'react';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

const CategoryBox = styledComponents.div`
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--primary-box-shadow);
  border: var(--primary-border);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h3 {
    color: var(--secondary-color);
    font-size: 2.5rem;
    padding: 1rem 0;
  }
  p {
    color: var(--light-color);
    font-size: 1.4rem;
    line-height: 2;
  }
`;

const CategorieCard = ({ category }) => (
  <CategoryBox>
    <img src={category.img} alt="soy el alt" />
    <h3>{category.title}</h3>
    <p>{category.smallDescription}</p>
    <button type="button" className="btn-primary">
      Buscar
    </button>
  </CategoryBox>
);

CategorieCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object.isRequired,
};

export default CategorieCard;
