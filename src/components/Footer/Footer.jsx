import React from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain, faEnvelope, faHandHolding,
  faMapLocation, faMobile, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styledComponents.div`
  background: var(--primary-color);
  padding: 1rem 9%;
  @media (max-width: 991px) {
    padding: 2rem;
  }
`;

const ContainerBox = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 2rem;
`;

const FooterBox = styledComponents.div`
  padding: 0 2rem;
  h3 {
    font-size: 2.5rem;
    color: var(--white);
    padding: 0.8rem 0;
  }
  a {
    display: block;
    font-size: 1.5rem;
    color: var(--white);
    padding: 0.5rem 0;
    &:hover {
      padding-right: 0.5rem;
    }
    svg {
      margin-right: 0.5rem;
      color: var(--white);
    }
  }
`;

const Credit = styledComponents.div`
  background: var(--white);
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 2rem;
  text-align: center;
  font-size: 2rem;
  color: var(--light-color);
  span {
    color: var(--primary-color);
  }
`;

const Footer = () => (
  <FooterContainer>
    <ContainerBox>
      <FooterBox>
        <h3>MHealth</h3>
        {/* TODO: Convert <a> to <HashLink> from react-router-hash-link */}
        <a href="#home">
          <FontAwesomeIcon icon={faBrain} />
          Inicio
        </a>
        <a href="#about">
          <FontAwesomeIcon icon={faBrain} />
          Sobre nosotros
        </a>
        <a href="#services">
          <FontAwesomeIcon icon={faBrain} />
          Categorías
        </a>
        <a href="#doctors">
          <FontAwesomeIcon icon={faBrain} />
          Servicios
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faBrain} />
          Especialistas
        </a>
      </FooterBox>
      <FooterBox>
        <h3>Servicios</h3>
        {/* TODO: Pensar a donde llevara para usar <Link> o Haslink */}
        <a href="#services">
          <FontAwesomeIcon icon={faHandHolding} />
          service 1
        </a>
        <a href="#services">
          <FontAwesomeIcon icon={faHandHolding} />
          service 2
        </a>
        <a href="#services">
          <FontAwesomeIcon icon={faHandHolding} />
          service 3
        </a>
        <a href="#services">
          <FontAwesomeIcon icon={faHandHolding} />
          service 4
        </a>
        <a href="services">
          <FontAwesomeIcon icon={faHandHolding} />
          service 5
        </a>
      </FooterBox>
      <FooterBox>
        <h3>Contact Info</h3>
        <a href="#home">
          <FontAwesomeIcon icon={faPhone} />
          +51-123-456-789
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faMobile} />
          +51 975275260
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faEnvelope} />
          popehiflo@gmail.com
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faWhatsapp} />
          +51 945678912
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faMapLocation} />
          Latinoamerica
        </a>
      </FooterBox>
      <FooterBox>
        <h3>Follow Us</h3>
        {/* TODO: Link -> External Link */}
        <a href="#home">
          <FontAwesomeIcon icon={faLinkedinIn} />
          Linkedin
        </a>
        <a href="#home" target="__blank">
          <FontAwesomeIcon icon={faTwitter} />
          Twitter
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faFacebookF} />
          Facebook
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </a>
        <a href="#home">
          <FontAwesomeIcon icon={faPinterestP} />
          Pinterest
        </a>
      </FooterBox>
    </ContainerBox>
    <Credit>
      created by
      {' '}
      <span>popehiflo</span>
      {' '}
      | all rights reserved
    </Credit>
  </FooterContainer>
);

export default Footer;
