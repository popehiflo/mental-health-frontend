import React from 'react';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus, faHeart, faMagnifyingGlassArrowRight,
  faUserDoctor,
} from '@fortawesome/free-solid-svg-icons';

const ServiceBox = styledComponents.div`
  background: var(--white);
  border-radius: 0.5rem;
  box-shadow: var(--primary-box-shadow);
  border: var(--primary-light-border);
  padding: 2rem;
  text-align: center;
  img {
    height: 20rem;
    border: var(--primary-light-border);
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h3 {
    color: var(--secondary-color);
    font-size: 2.5rem;
  }
  span {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
`;

const BoxButtons = styledComponents.div`
  padding-top: 2rem;
    a {
      height: 5rem;
      width: 5rem;
      line-height: 4.5rem;
      font-size: 2rem;
      color: var(--white);
      background: var(--primary-color);
      border-radius: 0.5rem;
      border: var(--primary-border);
      margin: 0.3rem;
      display: inline-block;
      &:hover {
        color: var(--primary-color);
        background: var(--white);
        box-shadow: var(--primary-box-shadow);
      }
    }
`;

const ServiceCard = ({ service }) => (
  <ServiceBox>
    <img src={service.img} alt="soy el alt" />
    <h3>{service.title}</h3>
    <span>Dr o descripcion pequenia del servicio</span>
    <BoxButtons>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartPlus} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faHeart} />
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faUserDoctor} />
      </Link>
    </BoxButtons>
  </ServiceBox>
);

ServiceCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
