import React, { useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Rellax from 'rellax';

import picture from 'assets/pictures/2.png';
import firma from 'assets/img/FIRMA.png';

const Parallax = () => {
  useEffect(() => {
    new Rellax('.picture', {
      speed: 5,
      center: false,
      wrapper: '#__next',
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax('.signature', {
      speed: 8,
      center: false,
      wrapper: '#__next',
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={{ backgroundColor: 'black' }}
    >
      <Typography
        color="white"
        textAlign="center"
        fontSize="6.4rem"
        variant="h1"
        letterSpacing="20px"
        lineHeight={1}
        width="50rem"
        marginTop="3rem"
      >
        eduardo hincapié
      </Typography>
      <Box width="30rem" className="picture">
        <Image src={picture} alt="" />
      </Box>
      <Box width="20rem" className="signature">
        <Image
          src={firma}
          alt="Eduardo's signature"
          style={{ filter: 'invert(1)' }}
        />
      </Box>
    </Box>
  );
};

export default Parallax;
