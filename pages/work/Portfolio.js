import { lazy } from 'react';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const PortfolioModal = lazy(() => import("components/modules/PortfolioModal"));
const ImageDisplay = lazy(() => import("components/foundation/ImageDisplay"));

const PortfolioList = lazy(() => import('./constants/PortfolioList'));

const Portfolio = () => {

  return (
    <>
      <Box display="flex" flexWrap="wrap" justifyContent="center" marginTop={6}>
        <Typography sx={{ fontSize: {sx: "8.2rem", md:"9.2rem"}, color: "#fff", marginTop: "4vw", paddingTop: "2vw", letterSpacing: "0.3em" }}>PORTFOLIO</Typography>
        <Grid container justifyContent="center" width='60vw' alignItems="center" sx={{textAlign: "center", marginBottom: "8vw"}}>
          <Grid xs={3}>
            <Typography variant="subtitle3" sx={{color:"rgba(255,255,255,0.5)"}}>VIDEOGAMES</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant="subtitle3" sx={{color:"rgba(255,255,255,0.5)"}}>SOUND DESIGN</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant="subtitle3" sx={{color:"rgba(255,255,255,0.5)"}}>FILM & ANIMATION</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography variant="subtitle3" sx={{color:"rgba(255,255,255,0.5)"}}>ALL</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <ImageDisplay images={PortfolioList.map((obj) => obj.display)} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Portfolio;