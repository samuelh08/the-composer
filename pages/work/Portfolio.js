import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//import PortfolioModal from "components/modules/PortfolioModal";
import ImageDisplay from "components/foundation/ImageDisplay";

//import PortfolioList from "./constants/PortfolioList";
import PortfolioListGalery from "./constants/PortfolioListGalery";

const Work = () => {
  const filters = [
    {
      title: "videogames"
    },
    {
      title: "sound design"
    },
    {
      title: "film & animation"
    },
    {
      title: "all"
    },
  ]
  const [selected, setSelected] = useState('all');

  const handleClick = (e) => {
    const filterby = e.target.innerText.toLowerCase()
    setSelected(filterby)
  }
  
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" bgcolor="#000">
      <Typography sx={{ fontSize: {sx: "8.2rem", md:"9.2rem"}, color: "#fff", marginTop: "4vw", paddingTop: "2vw", letterSpacing: "0.3em" }}>PORTFOLIO</Typography>
      <Grid container justifyContent="center" width='60vw' alignItems="center" sx={{textAlign: "center", marginBottom: "8vw"}}>
        {filters.map((obj, i) => (
          <Grid key={i} item xs={i < 2 ? 3 : i === 2 ? 4 : 2}>
            <Typography 
              className="filter-portfolio"
              onClick={(e) => handleClick(e)}
              variant={obj.title === selected ? "subtitle2" : "subtitle3"}
              sx={{color:`rgba(255,255,255,${obj.title === selected ? 1 : 0.5})`, textTransform: 'uppercase', cursor:'pointer', textDecoration: obj.title === selected ? 'underline' : 'none', textUnderlineOffset: "0.4em", textDecorationThickness: "1px"}}
            >
              {obj.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" sx={{marginBottom: "15vw"}}>
        <Grid item xs={10}>
          <ImageDisplay images={PortfolioListGalery} filteredText={selected}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Work;
