import React from 'react';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMagnifyingGlass, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

const ServiceBox = styledComponents.div`
  background: var(--white);
  border: var(--primary-light-border);
  box-shadow: var(--primary-box-shadow);
  border-radius: 0.5rem;
  padding: 2rem;
`;

const BoxImage = styledComponents.div`
  height: 25rem;
  overflow: hidden;
  border-radius: 0.5rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const BoxContent = styledComponents.div`
  padding: 1rem 0;
  div {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 1.4rem;
      color: va(--light-color);
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

const styledDocData = {
  h3: {
    fontSize: '2.5rem',
    color: 'var(--secondary-color)',
  },
  p: {
    fontSize: '1.5rem',
    color: 'var(--light-color)',
    lineHeight: '1.8',
    padding: '1rem 0',
  },
};

const DoctorCard = ({ doctor }) => (
  <ServiceBox>
    <BoxImage>
      <img src={doctor.avatar} alt="soy el alt" />
    </BoxImage>
    <BoxContent>
      <div>
        <Link to="/cart">
          <FontAwesomeIcon icon={faHeart} style={{ paddingRight: '0.5rem' }} />
          Servicio X
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faUserDoctor} style={{ paddingRight: '0.5rem' }} />
          Perfil
        </Link>
      </div>
      <h3 style={styledDocData.h3}>
        {doctor.fullName}
      </h3>
      <p style={styledDocData.p}>
        {doctor.academic}
      </p>
      <button type="button" className="btn-primary">
        Ver más
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </button>
    </BoxContent>
  </ServiceBox>
);

DoctorCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  doctor: PropTypes.object.isRequired,
};

export default DoctorCard;
