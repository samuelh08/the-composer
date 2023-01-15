import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Carousel from 'components/modules/Carousel';
import TopBar from 'components/modules/TopBar';
import Footer from 'components/modules/Footer';
import LP from 'components/elements/LP'

const Components = () => {
  return (
    <>
      <TopBar />
      <Carousel />
      <Box bgcolor="#000">
        <Grid container>
          <Grid xs={6} sx={{height: '100%'}}>
            <LP/>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default Components;
