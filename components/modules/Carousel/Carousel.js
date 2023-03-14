import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';

import ArrowGray from 'assets/img/PortfolioArrowNext-01.svg';
import ArrowWhite from 'assets/img/PortfolioArrowNext-02-01.svg';

import play from 'assets/img/Play.svg';
import pause from 'assets/img/Pause.svg';

const Carousel = ({ handleClick, CarouselListGallery }) => {
  const [activeElement, setActiveElement] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [selected, setSelected] = useState('');
  const [slide, setSlide] = useState(0);
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);

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

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio?.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio?.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    audio?.addEventListener('timeupdate', () => setCurrent(audio?.currentTime));
    return () => {
      audio?.removeEventListener('timeupdate', () => setCurrent(0));
    };
  }, [audio]);

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

  const togglePlay = async (item) => {
    if (selected === item.title) {
      setPlaying(!playing);
    } else if (playing) {
      await setPlaying(false);
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    } else {
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    }
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
                {CarouselListGallery.map(({ item, index }) => (
                  <Box
                    key={index}
                    marginX="0.5vw"
                    style={{ width: '26vw', height: '26vw', cursor: 'pointer' }}
                    position="relative"
                    onClick={() => {
                      handleClick(index);
                    }}
                    onMouseEnter={() => setActiveElement(item.title)}
                    onMouseLeave={() => setActiveElement(null)}
                  >
                    <Image
                      key={index}
                      alt={item.title}
                      src={item.src}
                      layout="fill"
                      objectFit="cover"
                      style={{
                        filter:
                          activeElement === item.title ||
                          selected === item.title
                            ? 'grayscale(100)'
                            : 'none',
                      }}
                    />
                    <Box
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0%"
                      textAlign="center"
                      flexDirection="column"
                      flexWrap="wrap"
                      alignContent="center"
                      alignItems="center"
                      justifyContent="center"
                      display={
                        activeElement === item.title || selected === item.title
                          ? 'flex'
                          : 'none'
                      }
                    >
                      <Box
                        height="20%"
                        width="20%"
                        padding="10px"
                        borderRadius="50%"
                        display="inline-block"
                        border="solid white 0.2vw"
                        style={{
                          backgroundColor: 'white',
                          backgroundImage:
                            selected === item.title
                              ? `conic-gradient(#444444 ${
                                  (current * 100) / audio?.duration
                                }%, white ${
                                  (current * 100) / audio?.duration
                                }% ${
                                  ((audio?.duration - current) * 100) /
                                  audio?.duration
                                }%)`
                              : 'none',
                        }}
                      >
                        <Grid
                          container
                          height="100%"
                          width="100%"
                          borderRadius="50%"
                          bgcolor="white"
                          alignContent="center"
                          justifyContent="center"
                          onClick={() => {
                            togglePlay(item);
                          }}
                        >
                          <Grid item xs={3}></Grid>
                          <Grid
                            item
                            xs={selected === item.title ? 6 : 7}
                            display="flex"
                            justifyContent="center"
                          >
                            <Image
                              src={
                                (selected === item.title) & playing
                                  ? pause
                                  : play
                              }
                              alt={
                                (selected === item.title) & playing
                                  ? 'pause'
                                  : 'play'
                              }
                              height="40%"
                              width="40%"
                            />
                          </Grid>
                          <Grid
                            item
                            xs={(selected === item.title) & playing ? 3 : 2}
                          ></Grid>
                        </Grid>
                      </Box>
                      <Typography variant="h6" color="white" marginTop="2vh">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle5"
                        color="white"
                        sx={{ textTransform: 'uppercase' }}
                        marginTop="2vh"
                      >
                        {item.category}
                      </Typography>
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
              slide === Math.ceil(CarouselListGallery.length / 3) - 1
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
        {Array.from({ length: Math.ceil(CarouselListGallery.length / 3) }).map(
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

Carousel.propTypes = {
  CarouselListGallery: PropTypes.object,
  onClick: PropTypes.func,
};

export default Carousel;
