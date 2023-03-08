import { useState } from 'react';

import Image from "next/image";

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
import PortfolioModal from 'components/elements/PorftofiloModal';

import DragList from './DragGalleryObject';
import ImageDisplayTest from './ImageDisplayTest';
import MockDropDown from './MockServiceTable';
import ExperienceImage from './ExperienceObject';
import ModalItem from './ModalObject';
import Arrow from 'assets/img/ArrowReel-01.svg';
import playlist from './PlaylistObject';

const Components = () => {

  const [open, setOpen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    <>
      <TopBar />
      <Parallax />
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
      <PortfolioModal open={open} handleClose={() => setOpen(false)}>
        <Box onMouseEnter={() => setShowControls(true)}  sx={{position: "relative"}}>
          <video autoPlay controls={showControls} width='100%' onEnded={() => setVideoFinished(true)}>
            <source src={ModalItem.short} type="video/mp4" />
          </video>
          {/* <Typography variant="subtitle5" sx={{zIndex: 99, position: "absolute", bottom: "20px"}}>SCROLL <span ><Image src={Arrow} alt={'Arrow down'} /></span> FOR MORE</Typography> */}
        </Box>
        <Grid container spacing={4} sx={{marginY: "6vw", paddingX: 6}}>
          <Grid item xs={12} sx={{paddingY: "8vw"}}>
            <Box display="flex" justifyContent="center">
              <Typography variant="subtitle1">{ModalItem.quote}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5} paddingTop={9}>
           {ModalItem.firstSection.left.map((obj, i) => (
             <Box display='flex-inline' paddingBottom={4}>
               <Typography variant="h5" sx={{textTransform: "uppercase", paddingBottom: "1vw"}}>{obj.title}</Typography>
               <Typography variant="subtitle5">{obj.text}</Typography>
             </Box>
           ))}
          </Grid>
          <Grid item xs={7} marginBottom={4}>
           {ModalItem.firstSection.right.map((obj, i) => (
             <Box sx={{ paddingBottom: "5vw" }}>
               <Typography variant="subtitle2" sx={{ textDecoration: "underline", paddingBottom: "2vw"}}>{obj.title}</Typography>
               <Typography variant="subtitle2">{obj.text}</Typography>
              </Box>
           ))}
          </Grid>
          <Grid item xs={12} sx={{marginY: "5vw"}}>
            <Playlist />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography sx={{ lineHeight: '144pt', fontSize: '7.5rem',}}>{ModalItem.secondSection.title}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5} paddingTop={9}>
             <Box display='flex-inline' paddingBottom={4}>
              <Typography variant="subtitle2" sx={{ textTransform: "uppercase", textDecoration: "underline", paddingBottom: "1vw" }}>{ModalItem.secondSection.subtitle}</Typography>
             </Box>
          </Grid>
          <Grid item xs={7} paddingTop={9}>
            <Box display='flex-inline' paddingBottom={4}>
              <Typography variant="subtitle2">{ModalItem.secondSection.text}</Typography>
            </Box>
          </Grid>
        </Grid>
      </PortfolioModal>
    </>
  );
};

export default Components;
