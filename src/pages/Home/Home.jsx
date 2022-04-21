import React from 'react';
import CategoriesPopular from '../../components/CategoriesPopular/CategoriesPopular';
import DoctorsPopular from '../../components/DoctorsPopular/DoctorsPopular';
import Services from '../../components/ServicesPopular/ServicesPopular';
import Slider from '../../components/Slider/Slider';

const Home = () => (
  <>
    <Slider />
    <section style={{ padding: '0.5rem' }} />
    <CategoriesPopular />
    <h1 className="section-heading">
      servicios
      {' '}
      <span>
        más buscados
      </span>
    </h1>
    <Services />
    <DoctorsPopular />
  </>
);

export default Home;
