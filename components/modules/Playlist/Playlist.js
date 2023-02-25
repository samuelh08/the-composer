import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Divider, Grid, Slider, Typography } from '@mui/material';

import playlist from './constants/Panacea';
import SoundcloudIconGray from 'assets/img/SoundcloudIconGray.svg';
import BandcampIconGray from 'assets/img/BandcampIconGray.svg';
import play from 'assets/img/Play.svg';
import pause from 'assets/img/Pause.svg';

const Playlist = () => {
  const [selected, setSelected] = useState('');
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [tracks, setTracks] = useState([]);

  function fetchDuration(path) {
    const track = new Audio();
    track.src = path;
    return track.duration;
  }

  useEffect(() => {
    const durations = playlist.tracks.map((item) => {
      return fetchDuration(item.audio);
    });
    setTracks(durations);
  }, []);

  useEffect(() => {
    playing ? audio?.play() : audio?.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio?.addEventListener('timeupdate', () => setCurrent(audio?.currentTime));
    return () => {
      audio?.removeEventListener('timeupdate', () => setCurrent(0));
    };
  }, [audio]);

  useEffect(() => {
    audio?.addEventListener('loadedmetadata', () =>
      setDuration(audio?.duration),
    );
    return () => {
      audio?.removeEventListener('loadedmetadata', () => setDuration(0));
    };
  }, [audio]);

  const togglePlay = async (item) => {
    if (selected === item.title) {
      setPlaying(!playing);
    } else if (playing) {
      await setPlaying(false);
      setCurrent(0);
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    } else {
      setCurrent(0);
      setSelected(item.title);
      setAudio(new Audio(item.audio));
      setPlaying(true);
    }
  };

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
                <Grid
                  item
                  xs={1}
                  height="2rem"
                  display="flex"
                  justifyContent="center"
                >
                  <Image
                    src={playing && selected === item.title ? pause : play}
                    alt={playing && selected === item.title ? 'pause' : 'play'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => togglePlay(item)}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle5">{item.title}</Typography>
                  <Slider
                    size="small"
                    value={selected === item.title ? current : 0}
                    max={duration}
                    disabled={selected !== item.title}
                    sx={{
                      color: 'black',
                      marginRight: '3rem',
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={2}
                  display="flex"
                  flexWrap="wrap"
                  alignContent="end"
                >
                  <Typography variant="subtitle5">
                    {selected === item.title && audio !== null
                      ? new Date((duration - current) * 1000)
                          .toISOString()
                          .slice(14, 19)
                      : tracks[index]}
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
