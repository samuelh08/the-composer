import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';

import ArrowGray from 'assets/img/PortfolioArrowNext-01.svg';
import ArrowWhite from 'assets/img/PortfolioArrowNext-02-01.svg';

import CarouselImages from './constants/CarouselImages';

import play from 'assets/img/Play.svg';

const Carousel = () => {
  const [activeElement, setActiveElement] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [selected, setSelected] = useState('');
  const [slide, setSlide] = useState(0);

  const carousel = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const element = carousel.current;
    const handleResize = (event) => {
      element.scrollLeft = slide * (window.innerWidth * 0.81);
    };
    addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [carousel, slide]);

  const handleClickNext = () => {
    setClicked('right');
    setSlide(slide + 1);
    carousel.current.scrollLeft = (slide + 1) * (window.innerWidth * 0.81);
    setTimeout(() => setClicked(null), 500);
  };

  const handleClickPrev = () => {
    setClicked('left');
    setSlide(slide - 1);
    carousel.current.scrollLeft = (slide - 1) * (window.innerWidth * 0.81);
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
        <Grid item xs={1} display="flex" justifyContent="center">
          <Box display={slide === 0 ? 'none' : 'block'}>
            <Image
              alt="previous"
              src={activeElement === 'left' ? ArrowWhite : ArrowGray}
              width={clicked === 'left' ? '80vw' : '100vw'}
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
        <Grid item xs={10} display="flex" justifyContent="center">
          <Box
            id="wrapper"
            style={{ width: '81vw', maxWidth: '81vw', position: 'relative' }}
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
                    marginX="0.5vw"
                    style={{ width: '26vw', height: '26vw', cursor: 'pointer' }}
                    position="relative"
                  >
                    <Image
                      key={index}
                      alt={item.title}
                      src={item.image}
                      style={{
                        filter:
                          activeElement === item.title
                            ? 'grayscale(100)'
                            : 'none',
                      }}
                      onMouseEnter={() => setActiveElement(item.title)}
                      onMouseLeave={() => setActiveElement(null)}
                    />
                    <Box
                      position="absolute"
                      textAlign="center"
                      right="50%"
                      top="50%"
                      display={activeElement === item.title ? 'block' : 'none'}
                    >
                      <div
                        style={{
                          height: '5vw',
                          width: '5vw',
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignContent: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image src={play} alt={'play'} />
                      </div>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} display="flex" justifyContent="center">
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
              width={clicked === 'right' ? '80vw' : '100vw'}
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
        alignItems="center"
        style={{ backgroundColor: '#000000' }}
      >
        {Array.from({ length: Math.ceil(CarouselImages.length / 3) }).map(
          (item, index) => {
            return (
              <Typography
                key={index}
                marginX={2}
                width="3vw"
                textAlign="center"
                style={{ cursor: 'pointer' }}
                color={index === slide ? '#FFFFFF' : '#444444'}
                fontSize={
                  index === slide
                    ? '3vw'
                    : activeElement === index
                    ? '3vw'
                    : '2vw'
                }
                onMouseEnter={() => {
                  setActiveElement(index);
                }}
                onMouseLeave={() => setActiveElement(null)}
                onClick={() => {
                  carousel.current.scrollLeft =
                    index * (window.innerWidth * 0.81);
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
