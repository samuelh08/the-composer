import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TopBar from 'components/modules/TopBar';
import Carousel from 'components/modules/Carousel';
import LP from 'components/elements/LP';
import Playlist from 'components/modules/Playlist';
import DragGallery from 'components/elements/DragGallery';
import ImageDisplay from 'components/foundation/ImageDisplay';
import DropDownTable from 'components/elements/DropDownTable';
import LetsTalk from 'components/modules/LetsTalk';
import Footer from 'components/modules/Footer';
import ImageOnHover from 'components/elements/ImageOnHover';
import Parallax from 'components/modules/Parallax';
import PortfolioModal from 'components/modules/PortfolioModal';

import DragList from './DragGalleryObject';
import ImageDisplayTest from './ImageDisplayTest';
import MockDropDown from './MockServiceTable';
import ExperienceImage from './ExperienceObject';
import ModalItem from './ModalObject';
import Arrow from 'assets/img/ArrowReel-01.svg';
import playlist from './PlaylistObject';

const Components = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Carousel />
      <Playlist playlist={playlist} />
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
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs="auto" paddingTop={5} marginTop={5}>
          <ImageOnHover images={DragList.map((obj) => obj.imageSrc)}>
            <Typography variant="h1" sx={{ fontSize: '6.2rem' }}>
              SERVICES
            </Typography>
          </ImageOnHover>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" marginTop={5}>
        <Grid item xs="auto" paddingTop={5} marginTop={5}>
          <ImageOnHover images={ExperienceImage.map((obj) => obj.imageSrc)}>
            <Typography variant="h2">EXPERIENCE</Typography>
            <Typography variant="subtitle2">(2017 - Present)</Typography>
          </ImageOnHover>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={10} marginBottom={4}>
          <DropDownTable rows={MockDropDown} />
        </Grid>
      </Grid>
      <br/>
      <br/>
      <Box bgcolor="#000">
        <Button onClick={() => setOpen(true)}>
          Open Modal
        </Button>
      </Box>
      <br/>
      <br/>
      <LetsTalk />
      <Footer />
      <PortfolioModal project={ModalItem} open={open} handleClose={() => setOpen(false)}/>
    </>
  );
};

export default Components;
