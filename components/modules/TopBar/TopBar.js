import React, { useState } from 'react';
import Image from 'next/image';
import { AppBar, Box, Grid, Link } from '@mui/material';

import SymbolLogo1 from 'assets/img/EddBeatLogo-01.svg';
import SymbolLogo2 from 'assets/img/EddBeatLogo-02.svg';
import TwitterIconGray from 'assets/img/TwitterIconGray.svg';
import TwitterIconWhite from 'assets/img/TwitterIconWhite.svg';
import InstagramIconGray from 'assets/img/InstagramIconGray.svg';
import InstagramIconWhite from 'assets/img/InstagramIconWhite.svg';
import BandcampIconGray from 'assets/img/BandcampIconGray.svg';
import BandcampIconWhite from 'assets/img/BandcampIconWhite.svg';
import SoundcloudIconGray from 'assets/img/SoundcloudIconGray.svg';
import SoundcloudIconWhite from 'assets/img/SoundcloudIconWhite.svg';
import Selected from 'assets/img/SeleccionPaginaBanner-01.svg';
import TopBarMenu from './constants/TopBarMenu';

const TopBar = () => {
  const [onIcon, setOnIcon] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#000000',
        height: '71.8px',
        justifyContent: 'center',
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Box display="flex" justifyContent="start" alignItems="end">
            {TopBarMenu.map((item, i) => {
              return (
                <Grid
                  container
                  key={i}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Grid item minHeight={'19px'}>
                    <div hidden={activeItem !== item.title && 'hidden'}>
                      <Image key={i} src={Selected} alt="selected" />
                    </div>
                  </Grid>
                  <Grid item>
                    <Link
                      href={item.path}
                      underline="none"
                      color={activeItem === item.title ? '#FFFFFF' : '#444444'}
                      fontFamily="Hebden Grotesque"
                      fontSize={'10.79pt'}
                      marginX={2}
                      key={i}
                      onMouseEnter={() => {
                        setActiveItem(item.title);
                      }}
                      onMouseLeave={() => {
                        setActiveItem(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Link href="/">
              <Image
                src={onIcon ? SymbolLogo2 : SymbolLogo1}
                alt="Symbol"
                onMouseEnter={() => {
                  setOnIcon(true);
                }}
                onMouseLeave={() => {
                  setOnIcon(false);
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box marginRight={6}>
            <Grid container spacing={4} justifyContent="end">
              <Grid item>
                <Link href="https://soundcloud.com/eddbeatmusic">
                  <Image
                    src={
                      activeItem === 'soundcloud'
                        ? SoundcloudIconWhite
                        : SoundcloudIconGray
                    }
                    alt="Soundcloud"
                    onMouseEnter={() => {
                      setActiveItem('soundcloud');
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                    }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://eddbeatmusic.bandcamp.com/">
                  <Image
                    src={
                      activeItem === 'bandcamp'
                        ? BandcampIconWhite
                        : BandcampIconGray
                    }
                    alt="Bandcamp"
                    onMouseEnter={() => {
                      setActiveItem('bandcamp');
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                    }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://www.instagram.com/eddbeatmusic_/">
                  <Image
                    src={
                      activeItem === 'instagram'
                        ? InstagramIconWhite
                        : InstagramIconGray
                    }
                    alt="Instagram"
                    onMouseEnter={() => {
                      setActiveItem('instagram');
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                    }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com/eddbeatmusic">
                  <Image
                    src={
                      activeItem === 'twitter'
                        ? TwitterIconWhite
                        : TwitterIconGray
                    }
                    alt="Twitter"
                    onMouseEnter={() => {
                      setActiveItem('twitter');
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                    }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default TopBar;
