import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';

import ArrowGray from 'assets/img/PortfolioArrowNext-01.svg';
import ArrowWhite from 'assets/img/PortfolioArrowNext-02-01.svg';

import CarouselImages from './constants/CarouselImages';

const Carousel = () => {
  const [activeElement, setActiveElement] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [slide, setSlide] = useState(0);

  const carousel = useRef(null);
  const content = useRef(null);

  const handleClickNext = () => {
    setClicked('right');
    setSlide(slide + 1);
    carousel.current.scrollLeft = (slide + 1) * 930;
    setTimeout(() => setClicked(null), 500);
  };

  const handleClickPrev = () => {
    setClicked('left');
    setSlide(slide - 1);
    carousel.current.scrollLeft = (slide - 1) * 930;
    setTimeout(() => setClicked(null), 500);
  };

  return (
    <>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        style={{ backgroundColor: '#000000' }}
      >
        <Grid item xs={2} display="flex" justifyContent="center">
          <Box display={slide === 0 ? 'none' : 'block'}>
            <Image
              alt="previous"
              src={activeElement === 'left' ? ArrowWhite : ArrowGray}
              width={clicked === 'left' ? '80%' : '100%'}
              hidden={slide === 0 ? 'none' : 'block'}
              style={{
                cursor: 'pointer',
              }}
              onMouseEnter={() => setActiveElement('left')}
              onMouseLeave={() => setActiveElement(null)}
              onClick={handleClickPrev}
            />
          </Box>
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="center">
          <Box
            id="wrapper"
            style={{ width: '930px', maxWidth: '930px', position: 'relative' }}
          >
            <Box
              id="carousel"
              ref={carousel}
              style={{
                overflow: 'hidden',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
              }}
            >
              <Box
                id="content"
                ref={content}
                style={{
                  display: 'grid',
                  gridAutoFlow: 'column',
                  margin: 'auto',
                  boxSizing: 'border-box',
                }}
              >
                {CarouselImages.map((item, index) => (
                  <Box
                    key={index}
                    marginRight="10px"
                    style={{ width: '300px', height: '300px' }}
                  >
                    <Image key={index} alt={item.title} src={item.image} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Box
            display={
              slide === Math.ceil(CarouselImages.length / 3) - 1
                ? 'none'
                : 'block'
            }
          >
            <Image
              alt="next"
              src={activeElement === 'right' ? ArrowWhite : ArrowGray}
              width={clicked === 'right' ? '80%' : '100%'}
              style={{
                transform: 'scaleX(-1)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setActiveElement('right')}
              onMouseLeave={() => setActiveElement(null)}
              onClick={handleClickNext}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        justifyContent="center"
        display="flex"
        style={{ backgroundColor: '#000000' }}
      >
        {Array.from({ length: Math.ceil(CarouselImages.length / 3) }).map(
          (item, index) => {
            return (
              <Typography
                key={index}
                marginX={2}
                style={{ cursor: 'pointer' }}
                color={index === slide ? '#FFFFFF' : '#444444'}
                onClick={() => {
                  carousel.current.scrollLeft = index * 930;
                  setSlide(index);
                }}
              >
                •
              </Typography>
            );
          },
        )}
      </Box>
    </>
  );
};

export default Carousel;
