import { useRouter } from 'next/router'
import Image from 'next/image'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import FooterMenu from './constants/FooterMenu';

const Footer = () => {
  const { pathname } = useRouter()

  const logo = require('assets/img/SymbolLogo-01.svg');

  return (
    <Box bgcolor="#000">
      <Grid container sx={{paddingBottom: 6}}>
        {FooterMenu.map((item, i) => {
          return <Grid item xs={12} sx={{borderBottom: '1px solid white', paddingLeft:'8%', paddingY: '15px'}} key={i}>
            <Typography variant="h5" color='white' fontFamily="Hebden Grotesque" sx={{textTransform: 'uppercase'}}>{item.title}</Typography>
          </Grid> 
        })}
        <Grid item container xs={12} sx={{ paddingTop: 6 }} justifyContent="flex-start" alignItems="flex-end">
          <Grid item xs={12} md={6} sx={{ paddingLeft: '7%'}}>
              <Image src={logo} alt="Eduardo's Logo" height='150%'/>
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid xs={7}>
              <Typography variant='subtitle2' color='white'>Drop me a line</Typography>
              <Typography
                color='white'
                sx={{ overflowWrap: 'break-word', paddingTop: 2}}
              >
                <span>
                  Eddbeatmusic
                </span>
                <br/>
                <span>
                  .contact@gmail.com
                </span>
              </Typography>
            </Grid>
            <Grid xs={5}>
              <Stack spacing={2}>
                <Link
                  variant='subtitle2'
                  underline='none'
                  href='#'
                >
                    <Box 
                      component='span'
                      sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                        Sound Cloud
                    </Box>
                </Link>
                <Link
                  variant='subtitle2'
                  underline='none'
                  href='#'
                >
                    <Box 
                      component='span'
                      sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                        Band Camp
                    </Box>
                </Link>
                <Link
                  variant='subtitle2'
                  underline='none'
                  href='#'
                >
                    <Box 
                      component='span'
                      sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                        Instagram
                    </Box>
                </Link>
                <Link
                  variant='subtitle2'
                  underline='none'
                  href='#'
                >
                    <Box 
                      component='span'
                      sx={{ paddingBottom: 0.7, borderBottom: '1px solid white', paddingRight:'7px' }}>
                        Twitter
                    </Box>
                </Link>
              </Stack>
            </Grid>
            <Grid xs={12} sx={{paddingTop: 6}}>
              <Typography variant='subtitle2' sx={{color: 'rgba(255, 255, 255, 0.16)'}}>&copy; 2022 Eduardo Hincapie - All rights reserved</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )

};

export default Footer