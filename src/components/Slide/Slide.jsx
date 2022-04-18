import React from 'react';
import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

const ContentSlide = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ContentImg = styledComponents.div`
  flex: 1 1 45rem;
`;
const Image = styledComponents.img`
  width: 100%;
`;

const ContentDescription = styledComponents.div`
  flex: 1 1 45rem;
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
  padding: 1rem 0;
  margin: 0 1rem;
`;
const Button = styledComponents.button``;

const Slide = ({ contentSlide }) => (
  <ContentSlide>
    <ContentImg>
      <Image src={contentSlide.imgSlide} alt={contentSlide.altImg} />
    </ContentImg>
    <ContentDescription>
      <DescriptionTitle>{contentSlide.titleSlide}</DescriptionTitle>
      <DescriptionText>{contentSlide.descriptionSlide}</DescriptionText>
      <Button className="btn-primary">{contentSlide.textButton}</Button>
    </ContentDescription>
  </ContentSlide>
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
  }).isRequired,
};

// Slide.defaultProps = {
//   contentSlide: {
//     idSlide: 0,
//     imgSlide: '',
//     altImg: '',
//     titleSlide: '',
//     descriptionSlide: '',
//     textButton: '',
//     colorSlide: '',
//   },
// };

export default Slide;
