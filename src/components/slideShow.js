import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translate}%);
`;

const SlideItem = styled.div`
  min-width: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ff6a00c4;
  color: white;
  border: none;
  padding: 1rem;
  border:2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size; 2rem;
  z-index: 1;
`;

const LeftButton = styled(Button)`
  left: 10px;
`;

const RightButton = styled(Button)`
  right: 10px;
`;

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleRightClick();
    }, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: handleRightClick,
    onSwipedRight: handleLeftClick,
  });

  return (
    <SlideshowContainer {...handlers}>
      <Slide translate={-currentIndex * 100}>
        {slides.map((slide, index) => (
          <SlideItem key={index}>{slide}</SlideItem>
        ))}
      </Slide>
      <LeftButton onClick={handleLeftClick}><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:'1rem'}} className='sideButtons'/></LeftButton>
      <RightButton onClick={handleRightClick}>{<FontAwesomeIcon icon={faArrowRight} style={{fontSize:'1rem'}} className='sideButtons'/>}</RightButton>
    </SlideshowContainer>
  );
};

export default Slideshow;
