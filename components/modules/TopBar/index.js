import React from 'react';
import Image from 'next/image';
import { AppBar, Grid, Link } from '@mui/material';
import SymbolLogo from 'public/SymbolLogo.svg';
import TwitterIcon from 'public/TwitterIconWhite.svg';
import InstagramIcon from 'public/InstagramIconWhite.svg';
import BandcampIcon from 'public/BandcampIconWhite.svg';
import SoundcloudIcon from 'public/SoundcloudIconWhite.svg';

const TopBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000000' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Link href="/" underline="none" color="#444444">
            Home
          </Link>
          <Link href="/work" underline="none" color="#444444">
            Work
          </Link>
          <Link href="/services" underline="none" color="#444444">
            Services
          </Link>
          <Link href="/abaout" underline="none" color="#444444">
            About
          </Link>
          <Link href="/contact" underline="none" color="#444444">
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Image src={SymbolLogo} alt="Symbol" />
        </Grid>
        <Grid item>
          <a href="https://soundcloud.com/">
            <Image src={SoundcloudIcon} alt="Soundcloud" href />
          </a>
          <a href="https://bandcamp.com/">
            <Image src={BandcampIcon} alt="Bandcamp" />
          </a>
          <a href="https://instagram.com/">
            <Image src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://twitter.com/">
            <Image src={TwitterIcon} alt="Twitter" />
          </a>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;
