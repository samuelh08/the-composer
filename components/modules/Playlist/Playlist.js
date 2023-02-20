import { Grid, Typography } from '@mui/material';
import React from 'react';

const Playlist = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Playlist Preview</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Playlist;
