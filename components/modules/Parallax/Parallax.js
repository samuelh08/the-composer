import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import picture from 'assets/pictures/2.png';
import firma from 'assets/img/FIRMA.png';

const Parallax = () => {
  return (
    <Box
      style={{
        background: 'black',
        perspective: '3px',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          transformStyle: 'preserve-3d',
          '&::before': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: `url(${picture.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: 'translateZ(-1px) scale(1.2)',
          },
          '&::after': {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: `url(${firma.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            filter: 'invert(1)',
            transform: 'translateY(10%) scale(0.5)',
          },
        }}
      >
        <Typography
          color="white"
          textAlign="center"
          fontSize="6.4rem"
          variant="h1"
          position="absolute"
          top="1%"
          left="50%"
          style={{
            transform: 'translateZ(-2px) translate(-50%, -130%) scale(1.8)',
          }}
        >
          eduardo hincapié
        </Typography>
      </Box>
    </Box>
  );
};

export default Parallax;
