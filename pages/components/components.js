import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TopBar from 'components/modules/TopBar';
import Carousel from 'components/modules/Carousel';
import LP from 'components/elements/LP';
import Playlist from 'components/modules/Playlist';
import DragGallery from 'components/elements/DragGallery';
import ImageDisplay from 'components/foundation/ImageDisplay';
import DropDownTable from 'components/elements/DropDownTable';
import LetsTalk from 'components/modules/LetsTalk';
import Footer from 'components/modules/Footer';

import DragList from './DragGalleryObject';
import ImageDisplayTest from './ImageDisplayTest';
import MockDropDown from './MockServiceTable';
import Parallax from 'components/modules/Parallax';

const Components = () => {
  return (
    <>
      <TopBar />
      <Parallax />
      <Carousel />
      <Playlist />
      <Box bgcolor="#000">
        <Grid container justifyContent="center">
          <Grid item xs={6} sx={{ height: '100%' }}>
            <LP />
          </Grid>
        </Grid>
      </Box>
      <DragGallery images={DragList} />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <ImageDisplay images={ImageDisplayTest} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={10} marginBottom={4}>
          <DropDownTable rows={MockDropDown} />
        </Grid>
      </Grid>
      <LetsTalk />
      <Footer />
    </>
  );
};

export default Components;
