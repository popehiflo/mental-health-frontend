import React from 'react';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import imgDefault from '../../assets/img/slide-default-img-animate.svg';

const SlideContent = styledComponents.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: #${(props) => props.colorSlide};
`;

const ContentImg = styledComponents.div`
  flex: 1 1 45rem;
`;
const Image = styledComponents.img`
  width: 100%;
`;

const ContentDescription = styledComponents.div`
  flex: 1 1 45rem;
  @media (max-width: 768px) {
    padding: 1rem 0 1rem 0;
  }
`;
const DescriptionTitle = styledComponents.h3`
  font-size: 4.5rem;
  color: var(--secondary-color);
  line-height: 1.8;
  text-shadow: var(--text-shadow);
`;
const DescriptionText = styledComponents.p`
  font-size: 1.7rem;
  color: var(--light-color);
  line-height: 1.8;
  padding: 1rem 3rem 1rem 0;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const Button = styledComponents.button``;

const Slide = ({ contentSlide }) => (
  <SlideContent colorSlide={contentSlide.colorSlide}>
    <ContentImg>
      <Image src={contentSlide.imgSlide} alt={contentSlide.altImg} />
    </ContentImg>
    <ContentDescription>
      <DescriptionTitle>{contentSlide.titleSlide}</DescriptionTitle>
      <DescriptionText>{contentSlide.descriptionSlide}</DescriptionText>
      <Button className="btn-primary">
        {contentSlide.textButton}
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </Button>
    </ContentDescription>
  </SlideContent>
);

Slide.propTypes = {
  contentSlide: PropTypes.shape({
    idSlide: PropTypes.number,
    imgSlide: PropTypes.string,
    altImg: PropTypes.string,
    titleSlide: PropTypes.string,
    descriptionSlide: PropTypes.string,
    textButton: PropTypes.string,
    colorSlide: PropTypes.string,
  }),
};

Slide.defaultProps = {
  contentSlide: {
    idSlide: 0,
    imgSlide: `${imgDefault}`,
    altImg: '',
    titleSlide: '',
    descriptionSlide: '',
    textButton: '',
    colorSlide: '',
  },
};

export default Slide;
