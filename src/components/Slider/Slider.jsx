import { useState } from 'react';
import styledComponents from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dataSliders } from '../../dataFake';
import Slide from '../Slide/Slide';

const SliderWrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  left: ${(props) => (props.direction === 'left' && '1rem')};
  right: ${(props) => (props.direction === 'right' && '1rem')};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const SliderContainer = styledComponents.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(-${(props) => props.slideIndex * 100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <SliderWrapper id="home">
      <Arrow direction="left" onClick={() => handleArrowClick('left')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
      <SliderContainer slideIndex={slideIndex}>
        {dataSliders.map((slideData) => (
          <Slide key={slideData.idSlide} contentSlide={slideData} />
        ))}
      </SliderContainer>
      <Arrow direction="right" onClick={() => handleArrowClick('right')}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    </SliderWrapper>
  );
};

export default Slider;
