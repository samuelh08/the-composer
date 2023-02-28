import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import background from 'assets/video/1. ALTA CALIDAD BAJO PESO.mp4';

const LetsTalk = () => {
  return (
    <Box position="relative" width="100%">
      <video autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        color="white"
        maxWidth="60rem"
        textAlign="center"
        top="50%"
        left="50%"
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <Typography variant="h1">
          I’ve been working remotely since before it was cool
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '173.783px',
            height: '116.7278px',
            borderRadius: '50%',
            border: '1px solid white',
            marginTop: '4rem',
          }}
        >
          <Typography
            variant="subtitle5"
            color="white"
            sx={{ textTransform: 'uppercase' }}
          >
            Lets Talk
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LetsTalk;
