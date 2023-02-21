import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import playlist from './constants/Panacea';
import SoundcloudIconGray from 'assets/img/SoundcloudIconGray.svg';
import BandcampIconGray from 'assets/img/BandcampIconGray.svg';
import play from 'assets/img/Play.svg';
import pause from 'assets/img/Pause.svg';

const Playlist = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Box marginY="2rem">
            <Image src={playlist.image} alt={playlist.title} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Typography variant="h3">Playlist Preview</Typography>
            <Box>
              <Image src={SoundcloudIconGray} alt="soundcloud" />
              <Image src={BandcampIconGray} alt="bandcamp" />
            </Box>
          </Box>
          <Divider />
          <Box marginTop="1rem">
            {playlist.tracks.map((item, index) => (
              <Grid container key={index} marginTop="2rem">
                <Grid item xs={1} display="flex" justifyContent="center">
                  <Image
                    style={{ width: '0.5rem' }}
                    src={playing ? pause : play}
                    alt={playing ? 'pause' : 'play'}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle5">{item.title}</Typography>
                  {/* change for actual component */}
                  <Divider />
                </Grid>
                <Grid
                  item
                  xs={2}
                  display="flex"
                  flexWrap="wrap"
                  alignContent="end"
                >
                  <Typography variant="subtitle5">
                    {new Date(
                      (item.audio.duration - item.audio.currentTime) * 1000,
                    )
                      .toISOString()
                      .slice(14, 19)}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Playlist;
