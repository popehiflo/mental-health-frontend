import React from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SliderWrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: var(--primary-color);
`;

const Arrow = styledComponents.div`
  width: 4.5rem;
  height: 4.5rem;
  background-color: var(--white);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.direction === 'left' && '10px')};
  right: ${(props) => (props.direction === 'right' && '10px')};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const Slider = () => {
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      console.log('left');
    }
  };

  return (
    <SliderWrapper>
      <Arrow direction="left" onClick={handleArrowClick('left')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      <div>Slider</div>
      <Arrow direction="right" onClick={handleArrowClick('right')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </SliderWrapper>
  );
};

export default Slider;
