import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Carousel from 'components/modules/Carousel';
import TopBar from 'components/modules/TopBar';
import Footer from 'components/modules/Footer';
import LP from 'components/elements/LP';
import Playlist from 'components/modules/Playlist';

const Components = () => {
  return (
    <>
      <TopBar />
      <Carousel />
      <Playlist />
      <Box bgcolor="#000">
        <Grid container justifyContent="center">
          <Grid xs={6} sx={{ height: '100%' }}>
            <LP />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Components;
