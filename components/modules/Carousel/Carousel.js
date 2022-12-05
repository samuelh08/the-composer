import React, { useState } from 'react';

import ArrowGray from 'assets/img/PortfolioArrowNext-01.svg';
import ArrowWhite from 'assets/img/PortfolioArrowNext-02-01.svg';
import Image from 'next/image';
import { Grid } from '@mui/material';

const Carousel = () => {
  const [activeElement, setActiveElement] = useState(null);

  return (
    <>
      <Grid container style={{ backgroundColor: 'black' }}>
        <Grid item xs={1}>
          <Image
            alt="arrow"
            src={activeElement === 'left' ? ArrowWhite : ArrowGray}
            onMouseEnter={() => setActiveElement('left')}
            onMouseLeave={() => setActiveElement(null)}
          />
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={1}>
          <Image
            alt="arrow"
            src={activeElement === 'right' ? ArrowWhite : ArrowGray}
            onMouseEnter={() => setActiveElement('right')}
            onMouseLeave={() => setActiveElement(null)}
            style={{ transform: 'scaleX(-1)' }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Carousel;
