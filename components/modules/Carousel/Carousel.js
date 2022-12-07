import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Grid } from '@mui/material';

import ArrowGray from 'assets/img/PortfolioArrowNext-01.svg';
import ArrowWhite from 'assets/img/PortfolioArrowNext-02-01.svg';

import CarouselImages from './constants/CarouselImages';

const Carousel = () => {
  const [activeElement, setActiveElement] = useState(null);

  const carousel = useRef(null);
  const content = useRef(null);

  const handleClickNext = () => {
    carousel.current.scrollBy(960, 0);
  };

  const handleClickPrev = () => {
    carousel.current.scrollBy(-960, 0);
  };

  return (
    <>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        style={{ backgroundColor: 'black' }}
      >
        <Grid item xs={2} display="flex" justifyContent="center">
          <Image
            alt="previous"
            src={activeElement === 'left' ? ArrowWhite : ArrowGray}
            onMouseEnter={() => setActiveElement('left')}
            onMouseLeave={() => setActiveElement(null)}
            onClick={handleClickPrev}
          />
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="center">
          <Box
            id="wrapper"
            style={{ width: '100%', maxWidth: '920px', position: 'relative' }}
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
                  gap: '10px',
                  gridAutoFlow: 'column',
                  margin: 'auto',
                  boxSizing: 'border-box',
                }}
              >
                {CarouselImages.map((item, index) => (
                  <Box key={index} style={{ width: '300px', height: '300px' }}>
                    <Image key={index} alt={item.title} src={item.image} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="center">
          <Image
            alt="next"
            src={activeElement === 'right' ? ArrowWhite : ArrowGray}
            onMouseEnter={() => setActiveElement('right')}
            onMouseLeave={() => setActiveElement(null)}
            onClick={handleClickNext}
            style={{ transform: 'scaleX(-1)' }}
          />
        </Grid>
      </Grid>
      <Box></Box>
    </>
  );
};

export default Carousel;
