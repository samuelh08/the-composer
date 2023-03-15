import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { Box, Grid, Link, Typography } from '@mui/material';

import Carousel from 'components/modules/Carousel';
import LP from 'components/elements/LP';
import LetsTalk from 'components/modules/LetsTalk';

import CarouselListGallery from './CarouselListGalery';

import background from 'assets/Portfolio/MainReelTiny.mp4';
import arrow from 'assets/img/ArrowReel-01.svg';
import picture from 'assets/pictures/1.png';
import arrowLink from 'assets/img/ArrowLink-01.svg';

const Home = () => {
  const [videoClicked, setVideoClicked] = useState(false);

  const handleClick = useCallback(async () => {
    setVideoClicked((v) => !v);
    if (!videoClicked) {
      document.getElementById('reel').currentTime = 0;
      document.getElementById('reel').pause();
    }
  }, [videoClicked]);

  return (
    <>
      <Box
        bgcolor="black"
        display="flex"
        justifyContent="center"
        position="relative"
        width="100%"
        onClick={handleClick}
      >
        <Box
          bgcolor={videoClicked ? '' : 'rgba(0 ,0 ,0, 0.4)'}
          width="100%"
          height="100%"
          position="absolute"
        />
        <video
          id="reel"
          width="100%"
          autoPlay
          loop={!videoClicked}
          muted={!videoClicked}
          controls={videoClicked}
        >
          <source src={background} type="video/mp4" />
        </video>
        <Box
          position="absolute"
          color="white"
          maxWidth="60rem"
          textAlign="start"
          top="50%"
          left="50%"
          sx={{ transform: 'translate(-90%, -50%)' }}
          display={videoClicked ? 'none' : 'block'}
        >
          <Typography variant="h1">Bringing projects to</Typography>
          <Typography variant="h1">
            life trought{' '}
            <span
              style={{
                fontStyle: 'italic',
                textDecoration: 'underline',
                fontFamily: 'Andale Mono',
                letterSpacing: 0,
              }}
            >
              Music Concept
            </span>
          </Typography>
        </Box>
        <Box
          width="100%"
          position="absolute"
          textAlign="center"
          justifyContent="center"
          bottom={50}
          display={videoClicked ? 'none' : 'flex'}
        >
          <Typography variant="subtitle4" color="white">
            SCROLL
          </Typography>
          <Box marginX="2rem">
            <Image src={arrow} alt="arrow" />
          </Box>
          <Typography variant="subtitle4" color="white">
            FOR MORE
          </Typography>
        </Box>
      </Box>
      <Grid container bgcolor="black" paddingTop="10rem" paddingBottom="5rem">
        <Grid item xs={6} textAlign="end">
          <Typography variant="h3" color="white">
            LATEST
          </Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Typography variant="h3" color="white">
            RELEASES
          </Typography>
          <Typography variant="subtitle4" color="white">
            YEAR 2022
          </Typography>
        </Grid>
      </Grid>
      <Carousel
        CarouselListGallery={CarouselListGallery}
        handleClick={() => {}}
      />
      <Box bgcolor="#000">
        <Grid container justifyContent="center" paddingY="30vh">
          <Grid item xs={3} sx={{ height: '100%' }}>
            <LP />
          </Grid>
        </Grid>
      </Box>
      <Grid container bgcolor="black" paddingBottom="10rem">
        <Grid item xs={6} textAlign="end">
          <Typography variant="h3" color="white">
            ACELERATING
          </Typography>
          <Typography variant="h3" color="white">
            VALUATION
          </Typography>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Typography variant="h3" color="white">
            THROUGH CREATIVE
          </Typography>
          <Typography variant="h3" color="white">
            INNOVATION
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src={picture} alt="Eduardo looking at a screen" />
        </Grid>
        <Grid item xs={6} paddingTop="1em" position="relative">
          <ul className="home-list">
            <li>
              <Typography variant="subtitle4" color="white">
                Strategy
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle4" color="white">
                Conceptualization
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle4" color="white">
                Composition
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle4" color="white">
                Music edition
              </Typography>
            </li>
            <li>
              <Typography variant="subtitle4" color="white">
                Audio implementation
              </Typography>
            </li>
          </ul>
          <Link href="/services" underline="none">
            <Box position="absolute" bottom={0} marginLeft="1rem">
              <Typography
                variant="subtitle4"
                color="white"
                sx={{
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.3em',
                }}
              >
                ALL SERVICES
              </Typography>
              <Image
                src={arrowLink}
                alt="arrow"
                translate="-50%"
                style={{ transform: 'translate(-1em, 0px)' }}
              />
            </Box>
          </Link>
        </Grid>
      </Grid>
      <LetsTalk />
    </>
  );
};

export default Home;
