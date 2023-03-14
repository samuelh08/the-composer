import { useState } from "react";
import LazyLoad from 'react-lazyload';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import PortfolioWrapper from "components/elements/PorftofiloWrapper";
import Playlist from "components/modules/Playlist";
import TopBarIcons from "components/modules/TopBar/constants/TopBarIcons";
import Carousel from "components/modules/Carousel";
import ArrowLink from "assets/img/ArrowLink-01.svg";

const PortfolioModal = ({ project, open, handleClose, carouselImages }) => {

  const [activeItem, setActiveItem] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  return (
    project && <PortfolioWrapper open={open} handleClose={handleClose}>
      <Box onMouseEnter={() => setShowControls(true)} sx={{ position: "relative" }}>
        <LazyLoad once>
          <video autoPlay controls={showControls} width="100%" onEnded={() => setVideoFinished(true)}>
            <source src={project.short} type="video/mp4" />
          </video>
        </LazyLoad>
        {/* <Typography variant="subtitle5" sx={{zIndex: 99, position: "absolute", bottom: "20px"}}>SCROLL <span ><Image src={Arrow} alt={"Arrow down"} /></span> FOR MORE</Typography> */}
      </Box>
      <Grid container spacing={4} sx={{ marginY: "6vw", paddingX: "4vw" }}>
        <Grid item xs={12} sx={{ paddingY: "8vw" }}>
          <Box display="flex" justifyContent="center">
            <Typography variant="subtitle1">{project.quote}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} paddingTop={9}>
          {project?.firstSection?.left?.map((obj, i) => (
            <Box key={i} display="flex-inline" paddingBottom={4}>
              <Typography variant="h5" sx={{ textTransform: "uppercase", paddingBottom: "1vw" }}>{obj.title}</Typography>
              <Typography variant="subtitle5">{obj.text}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={7} marginBottom={4}>
          {project?.firstSection?.right?.map((obj, i) => (
            <Box key={i} sx={{ paddingBottom: "5vw" }}>
              <Typography variant="subtitle2" sx={{ textDecoration: "underline", paddingBottom: "2vw" }}>{obj.title}</Typography>
              <Typography variant="subtitle2">{obj.text}</Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ marginY: "13vw" }}>
          <Playlist playlist={project.playlist} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "10vw" }}>
          <Box display="flex" justifyContent="center">
            <Typography sx={{ lineHeight: "144pt", fontSize: "7.5rem" }}>{project.secondSection.title}</Typography>
          </Box>
        </Grid>
        <Grid item xs={5} paddingTop={9}>
          <Box display="flex-inline" paddingBottom={4}>
            <Typography variant="subtitle2" sx={{ textTransform: "uppercase", textDecoration: "underline", paddingBottom: "1vw" }}>{project.secondSection.subtitle}</Typography>
          </Box>
        </Grid>
        <Grid item xs={7} paddingTop={9}>
          <Box display="flex-inline" paddingBottom={4}>
            <Typography variant="subtitle2">{project.secondSection.text}</Typography>
          </Box>
        </Grid>
        <Box sx={{ width: "120%", height: "2px", backgroundColor: "rgba(0,0,0,0.3)", marginTop: "6vw", marginBottom: "10vw" }}></Box>
        <Grid item xs={5}>
          <Box display="flex-inline" paddingBottom={4}>
            <Typography variant="h3">CREDITS:</Typography>
          </Box>
        </Grid>
        <Grid item container xs={7} sx={{ marginBottom: "8vw" }}>
          {project?.credits?.map((obj, i) => (
            <Grid key={i} item xs={6} sx={{ paddingBottom: "5vw", paddingTop: "0.5vw" }}>
              <Typography variant="subtitle4" sx={{ paddingBottom: "2vw" }}>{obj.title}</Typography>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>{obj.by}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginBottom: "4vw" }}>
        <Grid item xs={5} sx={{ textAlign: "center" }}>
          <Typography variant="subtitle4" sx={{ textAlign: "center", color: "rgba(0,0,0,0.4)" }}>Thanks for checking out this project. <br /> You can follow my latest work on:</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginBottom: "2vw" }}>
        {TopBarIcons?.map((item, i) => {
          return (
            <Grid item key={i}>
              <Link href={item.path}>
                <Box
                  className="modal-Icons"
                  alt={item.title}
                  //height={activeItem === item.title ? "50px" : "70px"}
                  src={item.grayIcon}
                  sx={{ backgroundImage: `url(${item.grayIcon.src})`, marginX: "2vw"}}
                  onMouseEnter={() => {
                    setActiveItem(item.title);
                  }}
                  onMouseLeave={() => {
                    setActiveItem(null);
                  }}
                ></Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="center" sx={{ marginBottom: "4vw", marginTop: "8vw" }}>
        <Grid item sx={{ textAlign: "center" }}>
          <Typography variant="subtitle5" sx={{ textAlign: "center", color: "rgba(0,0,0,0.4)" }}>COPYRIGHT ©2022 Eduardo Hincapie <br /> All rights reserved</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: "#000" }} justifyContent="center">
        <Grid item sx={{ borderBottom: "0.3px solid #fff", backgroundImage: `url(${ArrowLink.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "top 0% right -8%", paddingTop: "1vw", marginRight: "1vw", marginY: "5vw"}}>
          <Typography variant="subtitle3" color="#fff">VIEW ALL PROJECTS</Typography>
        </Grid>
        <Grid item sx={{padding: "1vw"}}>
          <Carousel CarouselListGallery={carouselImages} handleClick={() => {}}/>
        </Grid>
      </Grid>
    </PortfolioWrapper>
  )
}

export default PortfolioModal;
