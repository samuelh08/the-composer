import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Divider, Grid, Slider, Typography } from '@mui/material';

import SoundcloudIconGray from 'assets/img/SoundCloudIconGray.svg';
import BandcampIconGray from 'assets/img/BandCampIconGray.svg';
import play from 'assets/img/Play.svg';
import pause from 'assets/img/Pause.svg';

const Playlist = ({ playlist }) => {
  const [selected, setSelected] = useState('');
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [tracks, setTracks] = useState([]);
  const [time, setTime] = useState(0);

  function fetchDuration(path) {
    const track = new Audio();
    track.src = path;
    track.addEventListener('loadedmetadata', () => setTime(track.duration));
  }

  useEffect(() => {
    const durations = playlist.tracks.map((item) => {
      fetchDuration(item.audio);
      return time;
    });
    setTracks(durations);
  }, [time, playlist]);

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
    audio?.addEventListener('ended', () => {
      setPlaying(false);
      setCurrent(0);
      setSelected('');
    });
    return () => {
      audio?.removeEventListener('ended', () => {
        setPlaying(false);
        setCurrent(0);
        setSelected('');
      });
    };
  }, [audio]);

  useEffect(() => {
    audio?.addEventListener('loadedmetadata', () => {
      setDuration(audio?.duration);
      setCurrent(0);
    });
    return () => {
      audio?.removeEventListener('loadedmetadata', () => {
        setDuration(0);
        setCurrent(0);
      });
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
          <Box marginY="2rem" sx={{ width: '80%', padding: '5% 10% 16% 10%' }}>
            <Image src={playlist.image} alt={playlist.title} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Typography variant="h3">Playlist Preview</Typography>
            <Box display="flex" justifyContent="space-around" width="7vw">
              <Link href={playlist.soundcloud} target="_blank">
                <Image
                  src={SoundcloudIconGray}
                  alt="soundcloud"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
              <Link href={playlist.bandcamp} target="_blank">
                <Image
                  src={BandcampIconGray}
                  alt="bandcamp"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
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
                  <Box
                    sx={{
                      backgroundImage: `url(${
                        playing && selected === item.title
                          ? pause.src
                          : play.src
                      })`,
                      height: '19px',
                      width: '17px',
                      cursor: 'pointer',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPositon: 'center',
                      marginTop: '0.5vw',
                    }}
                    className="play-stop-button"
                    onClick={() => togglePlay(item)}
                  ></Box>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle5">{item.title}</Typography>
                  <Slider
                    size="small"
                    value={selected === item.title ? current : 0}
                    onChange={(event) => {
                      audio.currentTime = event.target.value;
                    }}
                    max={duration}
                    disabled={selected !== item.title}
                    sx={{
                      color: 'black',
                      width: '95%',
                      '& .MuiSlider-thumb': {
                        display: selected !== item.title ? 'none' : 'block',
                      },
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
                      : tracks[index] > 0 &&
                        new Date(tracks[index] * 1000)
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
